import { Router } from "express";
import {
    createInvoiceController,
    getAllInvoiceController,
    getInvoiceByNumberController, 
    updateInvoiceController,

} from "../controllers/invoice.controllers";

const router = Router();

router.post("/create",createInvoiceController);
router.put("/:invoiceNumber", updateInvoiceController);
router.get("/getAllInvoice", getAllInvoiceController);
router.get("/:invoiceNumber", getInvoiceByNumberController);
export default router;
