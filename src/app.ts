import express, { NextFunction, Request, Response } from "express";
import invoiceRoutes from "./routes/invoice.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (_req: Request, res: Response) => {
    return res.status(200).json({
        success: true,
        message: "Invoice API is running",
    });
});

// Register invoice routes
app.use("/v1/vendor-payable/invoice", invoiceRoutes);

app.use((req: Request, res: Response) => {
    return res.status(404).json({
        success: false,
        message: `Route ${req.method} ${req.originalUrl} not found`,
    });
});

app.use((
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    console.error(error);

    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
});

export default app;
