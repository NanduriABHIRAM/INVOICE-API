// models/settlement.model.ts

import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Settlement = sequelize.define(
  "Settlement",
  {
    accessToken: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    paymentId: {
      type: DataTypes.STRING(250),
      allowNull: false,
      primaryKey: true,
    },

    settlementStatus: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },

    settlementDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    paymentDoneDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },

    paymentDoneTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },

    paymentStatus: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    transactionAmount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },

    invoiceId: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    payment_gateway: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    paymentType: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    cardName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    cardId: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    upiId: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    userDepartmentId: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    mccCode: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    mccFTtoMdr: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },

    mccFTtoMdrValue: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },

    mccPGtoMdr: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },

    mccPGtoMdrValue: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },

    mccAdjustment: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },

    payment_network: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    mccCategory: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    mccSubCategory: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    mccPlanType: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    mccConvenienceFee: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },

    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    vendor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    companyConsent: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },

    vendorConsent: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
  },
  {
    tableName: "settlements",
    timestamps: true,
  }
);

export default Settlement;