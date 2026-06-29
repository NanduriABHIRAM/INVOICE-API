export interface SettlementData {
    accessToken: string;

    paymentId: string;
    settlementStatus?: string;
    settlementDate: string;
    paymentDoneDate?: string;
    paymentDoneTime: string;
    paymentStatus: string;

    transactionAmount: number;

    invoiceId: string;

    payment_gateway: string;
    paymentType: string;

    cardName: string;
    cardId: string;

    upiId?: string;

    userDepartmentId?: string;

    description?: string;

    mccCode?: string;

    mccFTtoMdr?: string;
    mccFTtoMdrValue?: string;

    mccPGtoMdr?: string;
    mccPGtoMdrValue?: string;

    mccAdjustment?: string;

    payment_network?: string;

    mccCategory?: string;
    mccSubCategory?: string;
    mccPlanType?: string;

    mccConvenienceFee?: string;

    company_id: number;
    vendor_id: number;

    companyConsent?: string;
    vendorConsent?: string;
}