import { Request, Response } from "express";
import { processNLQ } from "../services/NLQ.services";

export const nlqController = async (
    req: Request,
    res: Response
) => {
    try {
        const query = typeof req.body.query === "string"
            ? req.body.query.trim()
            : "";

        if (!query) {
            return res.status(400).json({
                success: false,
                message: "Query is required",
            });
        }

        const result = await processNLQ(query);

        return res.status(200).json({
            success: true,
            data: result,
        });

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
