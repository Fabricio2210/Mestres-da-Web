import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import  Product  from '../../database/models/Product';


class ProductController {
    async execute(req: Request, res:Response){
        const repository = getRepository(Product);
        const id = req.params.id;
        const {  name, qty, price, size } = req.body;

        const productExists = await repository.findOne({ where: { id }});
        
        if(!productExists){
            res.sendStatus(404);
            throw new Error("Produto não existe no estoque.");
        }

        await repository.update(id, { name, qty, price, size });
        const product = await repository.findOne({ where: { id }});

        return res.json(product);
    }
}

export default new ProductController; 