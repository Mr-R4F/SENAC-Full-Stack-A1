import { Request, Response } from "express";
import { apiConfig } from "../../config/apiConfig";
import axios from "axios";

export async function getCurrentExchange(req: Request, res: Response) {
    const { baseCurrency, targetCurrency }: { baseCurrency: string, targetCurrency?: string | undefined } = req.body;

    try {
        const AxRes = await axios.get(`${apiConfig.url}/${baseCurrency}/${targetCurrency || 'BRL'}`)

        return AxRes.data;
    } catch (err) {
        return res;
    }
}