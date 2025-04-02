import express, { Router } from 'express';
import ItemController from '../../app/http/controllers/v1/ItemController';

const router: Router = express.Router();
const apiContext: string = 'api/v1';

router.route(`/${apiContext}/items`)
    .get(ItemController.show)
    .post(ItemController.store);

export { router as routerApi_v1, apiContext };