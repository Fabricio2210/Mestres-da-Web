import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import  Product  from '../../database/models/Product';


class ProductController {
    async execute(req: Request, res:Response){
        const repository = getRepository(Product);
        const { name, qty, price, size } = req.body;

        const productExists = await repository.findOne({ where: { name }});

        if(productExists){
            throw new Error("Produto já existe no estoque.");
        }

        const product = repository.create({ name, qty, price, size });
        await repository.save(product);
        return res.json(product);
    }
}

export default new ProductController; 