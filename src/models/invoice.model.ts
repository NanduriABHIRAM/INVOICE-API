// models/invoice.model.ts

import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Invoice = sequelize.define(
  "Invoice",
  {
    invoiceNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,  
      primaryKey: true,
    },

    invoiceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    vendorName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    gstin: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },

    baseAmount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },

    dueDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    expenseType: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    vendorType: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    discount: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
      defaultValue: 0,
    },

    subTotal: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },

    accountNumber: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },

    gst: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
      defaultValue: 0,
    },

    ifsc: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },

    invoiceAmount: {
      type: DataTypes.DECIMAL(16, 2),
      allowNull: true,
    },

    paymentFrequency: {
      type: DataTypes.ENUM("Immediate", "Scheduled"),
      allowNull: true,
    },

    tds: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
      defaultValue: 0,
    },

    scheduledDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },

    paymentAmount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },

    paidAmount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },

    dueAmount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },

    description: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },

    paymentTerms: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },

    amountToVendor: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
  },
  {
    tableName: "invoices",
    timestamps: true,
  }
);

export default Invoice;