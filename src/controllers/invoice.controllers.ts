import { Request, Response } from "express";
import {
    createInvoice,
    getAllInvoice,
    getInvoiceByNumber,
    updateInvoice,
} from "../services/invoice.services";

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
        if (error.message === "Invoice already exists") {
            return res.status(409).json({
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

export const getAllInvoiceController = async (

    req : Request,
    res : Response
) => {
        try{
            const invoices = await getAllInvoice();

            return res.status(200).json({
                success:true,
                data : invoices,

            });
        }
        catch(error:any){
            return res.status(500).json({
                success : false,
                message : error.message,
            });
        }

};

export const getInvoiceByNumberController = async (
    req: Request<{ invoiceNumber: string }>,
    res: Response
) => {
    try {
        const invoice = await getInvoiceByNumber(req.params.invoiceNumber);

        return res.status(200).json({
            success: true,
            data: invoice,
        });

    } catch (error: any) {

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

export const updateInvoiceController = async (
    req: Request<{ invoiceNumber: string }>,
    res: Response
) => {
    try {
        const invoice = await updateInvoice(req.params.invoiceNumber, req.body);

        return res.status(200).json({
            success: true,
            message: "Invoice updated successfully",
            data: invoice,
        });

    } catch (error: any) {

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
