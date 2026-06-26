"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInvoice = createInvoice;
exports.getAllInvoice = getAllInvoice;
exports.getInvoiceByNumber = getInvoiceByNumber;
exports.updateInvoice = updateInvoice;
const invoice_model_1 = __importDefault(require("../models/invoice.model"));
async function createInvoice(invoiceData) {
    // checking if invoice exists
    const existingInvoice = await invoice_model_1.default.findOne({
        where: {
            invoiceNumber: invoiceData.invoiceNumber,
        },
    });
    // if duplicate throw error
    if (existingInvoice) {
        throw new Error("Invoice already exists");
    }
    // create invoice 
    const newInvoice = await invoice_model_1.default.create({
        ...invoiceData,
    });
    return newInvoice;
}
//get invoices
async function getAllInvoice() {
    //Fetch all invoices from the database
    const invoices = await invoice_model_1.default.findAll();
    return invoices;
}
async function getInvoiceByNumber(invoiceNumber) {
    const invoice = await invoice_model_1.default.findOne({
        where: {
            invoiceNumber: invoiceNumber,
        },
    });
    if (!invoice) {
        throw new Error("Invoice not found");
    }
    return invoice;
}
async function updateInvoice(invoiceNumber, invoiceData) {
    const invoice = await invoice_model_1.default.findOne({
        where: {
            invoiceNumber,
        },
    });
    // If invoice doesn't exist
    if (!invoice) {
        throw new Error("Invoice not found");
    }
    // Update invoice
    await invoice.update(invoiceData);
    // Return updated invoice
    return invoice;
}
//# sourceMappingURL=invoice.services.js.map