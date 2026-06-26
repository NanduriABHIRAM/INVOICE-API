"use strict";
// models/invoice.model.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const Invoice = database_1.default.define("Invoice", {
    invoiceNumber: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
    },
    invoiceDate: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    vendorName: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    gstin: {
        type: sequelize_1.DataTypes.STRING(15),
        allowNull: true,
    },
    baseAmount: {
        type: sequelize_1.DataTypes.DECIMAL(15, 2),
        allowNull: false,
    },
    dueDate: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    expenseType: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    vendorType: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    discount: {
        type: sequelize_1.DataTypes.DECIMAL(5, 2),
        allowNull: true,
        defaultValue: 0,
    },
    subTotal: {
        type: sequelize_1.DataTypes.DECIMAL(15, 2),
        allowNull: true,
    },
    accountNumber: {
        type: sequelize_1.DataTypes.STRING(11),
        allowNull: false,
    },
    gst: {
        type: sequelize_1.DataTypes.DECIMAL(5, 2),
        allowNull: true,
        defaultValue: 0,
    },
    ifsc: {
        type: sequelize_1.DataTypes.STRING(11),
        allowNull: false,
    },
    invoiceAmount: {
        type: sequelize_1.DataTypes.DECIMAL(16, 2),
        allowNull: true,
    },
    paymentFrequency: {
        type: sequelize_1.DataTypes.ENUM("Immediate", "Scheduled"),
        allowNull: true,
    },
    tds: {
        type: sequelize_1.DataTypes.DECIMAL(5, 2),
        allowNull: true,
        defaultValue: 0,
    },
    scheduledDate: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: true,
    },
    paymentAmount: {
        type: sequelize_1.DataTypes.DECIMAL(15, 2),
        allowNull: true,
    },
    paidAmount: {
        type: sequelize_1.DataTypes.DECIMAL(15, 2),
        allowNull: true,
    },
    dueAmount: {
        type: sequelize_1.DataTypes.DECIMAL(15, 2),
        allowNull: true,
    },
    description: {
        type: sequelize_1.DataTypes.STRING(250),
        allowNull: false,
    },
    paymentTerms: {
        type: sequelize_1.DataTypes.STRING(15),
        allowNull: true,
    },
    amountToVendor: {
        type: sequelize_1.DataTypes.DECIMAL(15, 2),
        allowNull: true,
    },
}, {
    tableName: "invoices",
    timestamps: true,
});
exports.default = Invoice;
//# sourceMappingURL=invoice.model.js.map