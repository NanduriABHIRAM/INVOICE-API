import { InvoiceData } from "../interfaces/invoice.interfaces";
import Invoice from "../models/invoice.model";
async function createInvoice(invoiceData: InvoiceData) {
    // checking if invoice exists
    const existingInvoice = await Invoice.findOne({
        where:{
            invoiceNumber: invoiceData.invoiceNumber,
        },
    });

    // if duplicate throw error

    if(existingInvoice){
        throw new Error("Invoice already exsits");
    }

    // create invoice 
    const newInvoice = await Invoice.create({
        ...invoiceData,
    });

    return newInvoice;
}
export{createInvoice};