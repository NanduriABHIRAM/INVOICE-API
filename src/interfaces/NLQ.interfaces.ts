export interface NLQRequest {
    query: string;
}

export interface InvoiceFilters {
    invoiceNumber?: string;
    vendorName?: string;
    invoiceDate?: string;
    dueDate?: string;
    paymentFrequency?: string;
    vendorType?: string;
    expenseType?: string;
}

export interface SettlementFilters {
    invoiceId?: string;
    paymentStatus?: string;
    settlementStatus?: string;
    settlementDate?: string;
    payment_gateway?: string;
    vendor_id?: number;
}

export interface NLQResponse {
    module: "invoice" | "settlement";
    filters: InvoiceFilters & SettlementFilters;
}

export interface OllamaChatResponse {
    message?: {
        content?: string;
    };
}
