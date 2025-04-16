import { Request, Response } from "express";
import { apiConfig } from "../../config/apiConfig";
import axios from "axios";

export async function getCurrentExchange(req: Request, res: Response) {
    const { baseCurrency, targetCurrency }: { baseCurrency: string, targetCurrency?: string | undefined } = req.body;
    // QuotationRequest.rules({ baseCurrency, targetCurrency }, res);

    // if (res.headersSent) return;

    try {
        const AxRes = await axios.get(`${apiConfig.url}/${baseCurrency}/${targetCurrency || 'BRL'}`)

        return AxRes.data;
    } catch (err) {
        return res.statusCode;
    }
 


       /*  .then(AxRes => {
           
        }) */
        /* .catch(err => {
            return res.status(500).json({
                message: 'An error occurred while retrieving the current exchange',
                error: err.message
            });
    }); */

  
}