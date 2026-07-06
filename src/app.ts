import express, { Request, Response } from "express";
import invoiceRoutes from "./routes/invoice.routes";
import settlementRoutes from "./routes/settlement.routes";
import errorMiddleware from "./middleware/error.middleware";
import NLQRoutes from "./routes/NLQ.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (_req: Request, res: Response) => {
    return res.status(200).json({
        success: true,
        message: "Invoice API is running",
    });
});

app.use("/v1/vendor-payable/invoice", invoiceRoutes);
app.use("/v1/vendor-payable/settlement", settlementRoutes);
app.use("/v1/vendor-payable/nlq", NLQRoutes);

app.use((req: Request, res: Response) => {
    return res.status(404).json({
        success: false,
        message: `Route ${req.method} ${req.originalUrl} not found`,
    });
});

app.use(errorMiddleware);

export default app;
