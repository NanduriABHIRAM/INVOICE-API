import { Router } from "express";
import { nlqController } from "../controllers/NLQ.controllers";

const router = Router();

router.post("/", nlqController);

export default router;