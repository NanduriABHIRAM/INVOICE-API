import { Request, Response } from "express";
import { createInvoice } from "../services/invoice.services";

export const createInvoiceController = async (
    req: Request,
    res: Response
) => {
    try {
        const invoice = await createInvoice(req.body);

        return res.status(201).json({
            success: true,
            message: "Invoice created successfully",
            data: invoice,
        });

    } catch (error: any) {

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
            message: "Internal Server Error",
        });
    }
};