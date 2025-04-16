import QuotationRequest from '../../requests/v1/ExchangeRequest';
import { Request, Response } from 'express';
import { cache } from '../../../../config/cache';
import { getCurrentExchange } from '../../../functions/function';

class ExchangeController {
    async index(req: Request, res: Response): Promise<void> {
        const exchanges = await cache.get('Exchanges');
        console.log(exchanges)
        if(exchanges) {
            res.status(200).json({
                message: 'Exchanges retrieved successfully',
                data: exchanges
            });
            return;
        }

        res.status(500).json({
            message: 'An error occurred while retrieving the exchanges',
            error: 'No exchanges found in cache',
            data: null
        });
    }

    async store(req: Request, res: Response): Promise<void> {
        const { base_code, target_code, conversion_rate } = await getCurrentExchange(req, res);
        let exchangesValues: any[] = await cache.get('Exchanges') || [];

        exchangesValues.push({
            base_code,
            target_code,
            conversion_rate
        });

        await cache.set('Exchanges', exchangesValues);

        res.status(201).json({
            message: 'Exchange created successfully'
        });
    }
}

export default new ExchangeController();