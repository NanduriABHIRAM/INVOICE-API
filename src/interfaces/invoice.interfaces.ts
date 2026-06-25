export interface InvoiceData {
    invoiceNumber: string;
    invoiceDate: Date;
    vendorName: string;
    gstin: string;
    baseAmount: number;
    dueDate: Date;
    expenseType: string;
    vendorType: string;
    discount: number;
    subTotal: number;
    accountNumber: string;
    gst: number;
    ifsc: string;
    invoiceAmount: number;
    paymentFrequency: string;
    tds: number;
    scheduledDate: Date;
    paymentAmount: number;
    paidAmount: number;
    description: string;
    dueAmount: number;
    paymentTerms: string;
    amountToVendor: number;
}