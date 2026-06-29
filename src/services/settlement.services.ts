import { WhereOptions } from "sequelize";
import { SettlementFilters } from "../interfaces/settlementFilter.interfaces";
import Settlement from "../models/settlement.model";

function buildSettlementFilters(filters: SettlementFilters = {}) {
    const where: WhereOptions = {};


    if (filters.invoiceId) {
        where.invoiceId = filters.invoiceId;
    }

    if (filters.settlementStatus) {
        where.settlementStatus = filters.settlementStatus;
    }

    if (filters.paymentStatus) {
        where.paymentStatus = filters.paymentStatus;
    }

    if (filters.payment_gateway) {
        where.payment_gateway = filters.payment_gateway;
    }

    if (filters.vendor_id !== undefined) {
        where.vendor_id = filters.vendor_id;
    }
    if (filters.settlementDate) {
        where.settlementDate = filters.settlementDate;
    }
    if(filters.vendorName){
    where.vendorName = filters.vendorName;
    }

    return where;
}

async function getAllSettlements(filters?: SettlementFilters) {
    const settlements = await Settlement.findAll({
        where: buildSettlementFilters(filters),
        order: [["createdAt", "DESC"]],
    });

    return settlements;
}

async function getSettlementByInvoiceId(invoiceId: string) {
    const settlement = await Settlement.findOne({
        where: {
            invoiceId,
        },
    });

    if (!settlement) {
        throw new Error("Settlement not found");
    }

    return settlement;
}


export {
    getAllSettlements,
    getSettlementByInvoiceId,
};
