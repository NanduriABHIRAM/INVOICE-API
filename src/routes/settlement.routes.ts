import { Router } from "express";
import { getAllsettlementsController,
    getsettlementByInvoiceIdController } from "../controllers/settlement.controller";

const router = Router();

router.get("/",getAllsettlementsController);
router.get("/:invoiceId",getsettlementByInvoiceIdController);

export default router;