import express, { Router } from 'express';
import ProductController from '../../app/http/controllers/v1/ProductController';

const router: Router = express.Router();
const apiContext: string = 'api/v1';

router.route(`/${apiContext}/products`)
    .get(ProductController.show)
    .post(ProductController.store);

export { router as routerApi_v1, apiContext };