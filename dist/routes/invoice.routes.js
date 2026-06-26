"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const invoice_controllers_1 = require("../controllers/invoice.controllers");
const router = (0, express_1.Router)();
router.post("/create", invoice_controllers_1.createInvoiceController);
router.put("/:invoiceNumber", invoice_controllers_1.updateInvoiceController);
exports.default = router;
//# sourceMappingURL=invoice.routes.js.map