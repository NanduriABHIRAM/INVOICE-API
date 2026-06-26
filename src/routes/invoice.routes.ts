import { Router } from "express";
import {
    createInvoiceController,
    updateInvoiceController,
} from "../controllers/invoice.controllers";

const router = Router();

router.post("/create",createInvoiceController);
router.put("/:invoiceNumber", updateInvoiceController);

export default router;
