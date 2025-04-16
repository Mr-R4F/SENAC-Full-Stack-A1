import { Request, Response } from 'express';
import { DB } from '../../../../config/db';
import { ProductType } from '../../../types/type';
import ProductRequest from '../../requests/v1/ProductRequest';

class ProductController {
    async show(req: Request, res: Response): Promise<void> {
        let showProducts: DB<ProductType> | ProductType[] = new DB<ProductType>('products.json');
        showProducts = showProducts.index();

        if(showProducts.length === 0) {
            res.status(404).json({
                message: 'Products not found',
                data: null
            });

            return;
        }
        
        res.status(200).json({
            message: 'Products have been retrieved successfully',
            data: showProducts
        });
    }

    async store(req: Request, res: Response): Promise<void> {
        const { name, description }: { name: string, description: string } = req.body;
        ProductRequest.rules({ name, description }, res);

        if (res.headersSent) return;

        const newProduct: DB<ProductType> = new DB<ProductType>('products.json');
        const existingProduct: ProductType | undefined = newProduct.findById(newProduct.index().length + 1);

        if (existingProduct) {
            res.status(400).json({
                message: 'Product already exists',
                data: null
            });
            return;
        }

        newProduct.store({ id: newProduct.index().length + 1, name, description });
        res.status(201).json({
            message: 'Product created successfully',
            data: { id: newProduct.index().length, name, description },
        });
    }   
}

export default new ProductController();