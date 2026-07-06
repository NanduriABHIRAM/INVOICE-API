import { WhereOptions } from "sequelize";
import { InvoiceData } from "../interfaces/invoice.interfaces";
import { InvoiceFilters } from "../interfaces/NLQ.interfaces";
import Invoice from "../models/invoice.model";

function buildInvoiceFilters(filters: InvoiceFilters = {}) {
    const where: WhereOptions = {};

    if (filters.invoiceNumber) {
        where.invoiceNumber = filters.invoiceNumber;
    }

    if (filters.vendorName) {
        where.vendorName = filters.vendorName;
    }

    if (filters.invoiceDate) {
        where.invoiceDate = filters.invoiceDate;
    }

    if (filters.dueDate) {
        where.dueDate = filters.dueDate;
    }

    if (filters.paymentFrequency) {
        where.paymentFrequency = filters.paymentFrequency;
    }

    if (filters.vendorType) {
        where.vendorType = filters.vendorType;
    }

    if (filters.expenseType) {
        where.expenseType = filters.expenseType;
    }

    return where;
}

async function createInvoice(invoiceData: InvoiceData) {
    const existingInvoice = await Invoice.findOne({
        where: {
            invoiceNumber: invoiceData.invoiceNumber,
        },
    });

    if (existingInvoice) {
        throw new Error("Invoice already exists");
    }

    const newInvoice = await Invoice.create({
        ...invoiceData,
    });

    return newInvoice;
}

async function getAllInvoice(filters?: InvoiceFilters) {
    const invoices = await Invoice.findAll({
        where: buildInvoiceFilters(filters),
        order: [["createdAt", "DESC"]],
    });

    return invoices;
}

async function getInvoiceByNumber(invoiceNumber: string) {
    const invoice = await Invoice.findOne({
        where: {
            invoiceNumber,
        },
    });

    if (!invoice) {
        throw new Error("Invoice not found");
    }

    return invoice;
}

async function updateInvoice(
    invoiceNumber: string,
    invoiceData: Partial<InvoiceData>,
) {
    const invoice = await Invoice.findOne({
        where: {
            invoiceNumber,
        },
    });

    if (!invoice) {
        throw new Error("Invoice not found");
    }

    await invoice.update(invoiceData);

    return invoice;
}


export {
    createInvoice,
    getAllInvoice,
    getInvoiceByNumber,
    updateInvoice,
};
