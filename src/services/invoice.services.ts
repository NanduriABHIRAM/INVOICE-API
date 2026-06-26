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
        throw new Error("Invoice already exists");
    }

    // create invoice 
    const newInvoice = await Invoice.create({
        ...invoiceData,
    });

    return newInvoice;
}

//get invoices

async function getAllInvoice(){
    //Fetch all invoices from the database

    const invoices = await Invoice.findAll();

    return invoices;
}

async function getInvoiceByNumber(invoiceNumber : string){
    const invoice = await Invoice.findOne({
        where:{
            invoiceNumber : invoiceNumber,
        },
    });

    if(!invoice){
        throw new Error("Invoice not found");
    }
    return invoice
}

async function updateInvoice(invoiceNumber:string , invoiceData:Partial<InvoiceData>){
        const invoice = await Invoice.findOne({
        where: {
            invoiceNumber,
        },
    });

    // If invoice doesn't exist
    if (!invoice) {
        throw new Error("Invoice not found");
    }

    // Update invoice
    await invoice.update(invoiceData);

    // Return updated invoice
    return invoice;
}


export{
    createInvoice,
    getAllInvoice,
    getInvoiceByNumber,
    updateInvoice

};