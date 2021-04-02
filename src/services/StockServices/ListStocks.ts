import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import  Product  from '../../database/models/Product';


class StockController {
    async execute(req: Request, res:Response){
        const repository = getRepository(Product);
        const id = req.params;
        const stocks = await repository.find({select:["qty"], where: { product: id }});

        if(!stocks){
            throw new Error("Não há estoque do produto");
        }

        return res.json(stocks);
    }
}

export default new StockController; 