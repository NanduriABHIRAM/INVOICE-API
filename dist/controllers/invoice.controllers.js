"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInvoiceController = exports.getInvoiceByNumberController = exports.getAllInvoiceController = exports.createInvoiceController = void 0;
const invoice_services_1 = require("../services/invoice.services");
const createInvoiceController = async (req, res) => {
    try {
        const invoice = await (0, invoice_services_1.createInvoice)(req.body);
        return res.status(201).json({
            success: true,
            message: "Invoice created successfully",
            data: invoice,
        });
    }
    catch (error) {
        console.error(error);
        // Duplicate invoice
        if (error.message === "Invoice already exists") {
            return res.status(409).json({
                success: false,
                message: error.message,
            });
        }
        // Unexpected error
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.createInvoiceController = createInvoiceController;
const getAllInvoiceController = async (req, res) => {
    try {
        const invoices = await (0, invoice_services_1.getAllInvoice)();
        return res.status(200).json({
            success: true,
            data: invoices,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.getAllInvoiceController = getAllInvoiceController;
const getInvoiceByNumberController = async (req, res) => {
    try {
        const invoice = await (0, invoice_services_1.getInvoiceByNumber)(req.params.invoiceNumber);
        return res.status(200).json({
            success: true,
            data: invoice,
        });
    }
    catch (error) {
        if (error.message === "Invoice not found") {
            return res.status(404).json({
                success: false,
                message: error.message,
            });
        }
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
exports.getInvoiceByNumberController = getInvoiceByNumberController;
const updateInvoiceController = async (req, res) => {
    try {
        const invoice = await (0, invoice_services_1.updateInvoice)(req.params.invoiceNumber, req.body);
        return res.status(200).json({
            success: true,
            message: "Invoice updated successfully",
            data: invoice,
        });
    }
    catch (error) {
        if (error.message === "Invoice not found") {
            return res.status(404).json({
                success: false,
                message: error.message,
            });
        }
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.updateInvoiceController = updateInvoiceController;
//# sourceMappingURL=invoice.controllers.js.map