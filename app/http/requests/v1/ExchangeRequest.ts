import e, { Response } from 'express';

class QuotationRequest {
    rules({ baseCurrency, targetCurrency }: { baseCurrency: string, targetCurrency?: string | undefined }, res: Response): void {
    }
}

export default new QuotationRequest();