export interface SettlementFilters {
    invoiceId?: string;
    vendor_id?: number;
    settlementDate?: string;
    paymentStatus?: string;
    settlementStatus?: string;
    payment_gateway?: string;
    paymentDoneDate? : Date;
    vendorName?:string;
}