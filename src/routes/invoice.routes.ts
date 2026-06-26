import { Router } from "express";
import {
    createInvoiceController,
    getAllInvoiceController,
    getInvoiceByNumberController,
    updateInvoiceController,
} from "../controllers/invoice.controllers";

const router = Router();

router.post("/create", createInvoiceController);
router.get("/getAllInvoice", getAllInvoiceController);
router.get("/:invoiceNumber", getInvoiceByNumberController);
router.put("/:invoiceNumber", updateInvoiceController);

export default router;
