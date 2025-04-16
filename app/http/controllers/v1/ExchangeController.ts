import QuotationRequest from '../../requests/v1/ExchangeRequest';
import { Request, Response } from 'express';
import { setCache } from '../../../../config/cache';
import { getCurrentExchange } from '../../../functions/function';

class ExchangeController {
    async index(req: Request, res: Response): Promise<void> {

        
       
        res.status(201).json({
            message: 'Product created successfully',
            data: null
        });
    } 

    async store(req: Request, res: Response): Promise<void> {
        console.log( getCurrentExchange(req, res));
        
       /*  await setCache.mset([
            {

            }
        ]);
 */

      
        res.status(201).json({
            message: 'Product created successfully',
            data: null,
        });
    }

    async search(req: Request, res: Response): Promise<void> {

       
        console.log( await getCurrentExchange(req, res))
    }
}

export default new ExchangeController();