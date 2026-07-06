import config from "../config/config";
import { NLQResponse, OllamaChatResponse } from "../interfaces/NLQ.interfaces";
import { getAllInvoice, getInvoiceByNumber } from "./invoice.services";
import {
    getAllSettlements,
    getSettlementByInvoiceId,
} from "./settlement.services";

const systemPrompt = `
You are an AI assistant for an Invoice Management System.

Convert the user's natural language query into structured filters.

Available modules and filters:

invoice:
- invoiceNumber
- vendorName
- invoiceDate
- dueDate
- paymentFrequency
- vendorType
- expenseType

settlement:
- invoiceId
- paymentStatus
- settlementStatus
- settlementDate
- payment_gateway
- vendor_id

Rules:
1. Return only valid JSON.
2. Do not explain anything.
3. Do not return markdown.
4. Do not generate SQL.
5. Extract only filters mentioned by the user.
6. Use module "invoice" for invoice queries.
7. Use module "settlement" for settlement or payment queries.

Example invoice response:
{
    "module": "invoice",
    "filters": {
        "invoiceNumber": "INV1001"
    }
}

Example settlement response:
{
    "module": "settlement",
    "filters": {
        "paymentStatus": "PAID",
        "vendor_id": 101
    }
}
`;

function parseNLQResponse(content: string): NLQResponse {
    const jsonStart = content.indexOf("{");
    const jsonEnd = content.lastIndexOf("}");

    if (jsonStart === -1 || jsonEnd === -1 || jsonEnd < jsonStart) {
        throw new Error("NLQ model returned an invalid response");
    }

    const parsed = JSON.parse(
        content.slice(jsonStart, jsonEnd + 1),
    ) as Partial<NLQResponse>;

    if (
        typeof parsed.module !== "string" ||
        !["invoice", "settlement"].includes(parsed.module) ||
        !parsed.filters
    ) {
        throw new Error("NLQ model returned an unsupported response");
    }

    return parsed as NLQResponse;
}

async function processNLQ(query: string) {
    const response = await fetch(config.nlq.apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: config.nlq.model,
            stream: false,
            messages: [
                {
                    role: "system",
                    content: systemPrompt,
                },
                {
                    role: "user",
                    content: query,
                },
            ],
            options: {
                temperature: 0,
            },
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to communicate with Qwen");
    }

    const result = await response.json() as OllamaChatResponse;
    const content = result.message?.content;

    if (!content) {
        throw new Error("NLQ model returned an empty response");
    }

    const llmResponse = parseNLQResponse(content);

    if (llmResponse.module === "settlement") {
        if (llmResponse.filters.invoiceId) {
            return await getSettlementByInvoiceId(
                llmResponse.filters.invoiceId
            );
        }

        return await getAllSettlements(llmResponse.filters);
    }

    if (llmResponse.module === "invoice") {
        if (llmResponse.filters.invoiceNumber) {
            return await getInvoiceByNumber(
                llmResponse.filters.invoiceNumber
            );
        }

        return await getAllInvoice(llmResponse.filters);
    }

    throw new Error("Unsupported module");
}

export {
    processNLQ,
};
