import { Request, Response} from 'express';

import pool from '../database';

class ProductController {

    public async list (req: Request, res: Response) {
        const products = await pool.query('SELECT * FROM productos')
        res.json(products.recordsets);
    }

    public async create(req:Request, res: Response) {
        const query: string = 'INSERT INTO productos ' +
        '(codigoProducto, descripcionProducto, stock) values (' +
        req.body.codigoProducto +  ', \'' +
        req.body.descripcionProducto +  '\',' +
        req.body.stock +  ')'
        await pool.query(query);
        res.json({text: 'creating the product ' + req.body.descripcionProducto});
    }

    public async delete(req: Request, res: Response) {
        const { codigoProducto } = req.params;
        await pool.query('DELETE FROM productos WHERE codigoProducto = ' + [codigoProducto]);
        res.json({ message: "The product was deleted" });
    }

    public async upDate(req: Request, res: Response) {
        res.json({ message: "The product was Updated" });
    }

    public async getOne(req: Request, res: Response) {
        const codigoProducto  = req.params.codigoProducto;
        console.log(codigoProducto);
        const products = await pool.query('SELECT * FROM productos where codigoProducto = ' + codigoProducto);
        console.log(products);
        return res.json(products.recordsets);
    }
}

const productController = new ProductController();
export default productController;