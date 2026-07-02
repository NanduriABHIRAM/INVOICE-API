import { Response,Request } from "express";
import { getAllSettlements,getSettlementByInvoiceId } from "../services/settlement.services";
import { SettlementFilters } from "../interfaces/settlementFilter.interfaces";

export const getAllsettlementsController = async(
    req:Request,
    res:Response

) => {

        try{
            const settlements = await getAllSettlements(req.query as SettlementFilters);

            return res.status(200).json({
                success : true,
                data : settlements,
            });
        }
        catch(error:any){
            return res.status(500).json({
                success : false,
                message :error.message,
            });
        }


}

export const getsettlementByInvoiceIdController = async(

    req: Request<{ invoiceId: string }>,
    res: Response

)=>{

    try{
        const settlement = await getSettlementByInvoiceId(req.params.invoiceId);

        return res.status(200).json({
            success : true,
            data :settlement,
        });

    }
    catch(error:any){
        if (error.message === "Settlement not found") {
            return res.status(404).json({
                success: false,
                message: error.message,
            });
        }

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
