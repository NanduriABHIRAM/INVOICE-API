import express, { Request, Response } from "express";
import invoiceRoutes from "./routes/invoice.routes";
import settlementRoutes from "./routes/settlement.routes";
import errorMiddleware from "./middleware/error.middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get("/health", (_req: Request, res: Response) => {
    return res.status(200).json({
        success: true,
        message: "Invoice API is running",
    });
});

// Register Routes
app.use("/v1/vendor-payable/invoice", invoiceRoutes);
app.use("/v1/vendor-payable/settlement", settlementRoutes);

// 404 Middleware (must come AFTER all routes)
app.use((req: Request, res: Response) => {
    return res.status(404).json({
        success: false,
        message: `Route ${req.method} ${req.originalUrl} not found`,
    });
});

// Global Error Middleware (always last)
app.use(errorMiddleware);

export default app;