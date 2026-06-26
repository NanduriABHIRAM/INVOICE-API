import express from "express";
import invoiceRoutes from "./routes/invoice.routes";

const app = express();

app.use(express.json());

// Register invoice routes
app.use("/v1/vendor-payable/invoice", invoiceRoutes);

export default app;