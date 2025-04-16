import { Response } from 'express';

class ProductRequest {
    rules({ name, description }: { name: string, description: string }, res: Response): void {
        if (!name || !description) {
            res.status(400).json({
                message: 'Name and description are required',
                data: null
            });
            return;
        } else if (name.length < 3 || name.length > 50) {
            res.status(400).json({
                message: 'Name must be between 3 and 50 characters',
                data: null
            });
            return;
        } else if (description.length < 10 || description.length > 30) {
            res.status(400).json({
                message: 'Description must be between 10 and 30 characters',
                data: null
            });
            return;
        } else if (description.includes('badword')) {
            res.status(400).json({
                message: 'Description contains a forbidden word',
                data: null
            });
            return;
        }

        return;
    }
}

export default new ProductRequest();