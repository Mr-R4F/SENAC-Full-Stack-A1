import express, { Router } from 'express';
import ExchangeController from '../../app/http/controllers/v1/ExchangeController';

const router: Router = express.Router();
const apiContext: string = 'api/v1';

router
    .post(`/${apiContext}/search-current-quotation`, ExchangeController.search)
    .get(`/${apiContext}/quotation`, ExchangeController.index)
    .post(`/${apiContext}/quotation-history`, ExchangeController.store);

export { router as routerApi_v1, apiContext };