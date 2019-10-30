import { Request, Response} from 'express';

import pool from '../database';

class PurchaseControllers {

    public async list (req: Request, res: Response) {
        const purchase = await pool.query('SELECT * FROM facturas_compras')
        console.log(purchase.recordsets);
        res.json(purchase.recordsets);
    }

    public async create(req:Request, res: Response) {
        const query: string = 'INSERT INTO facturas_compras ' +
        '(idFactura, fecha, idProveedor) values (' +
        req.body.idFactura +  ', \'' +
        req.body.fecha +  '\',' +
        req.body.idProveedor +  ')'
        await pool.query(query);
        res.json({text: 'creating the purchase number ' + req.body.idFactura});
    }

    public async delete(req: Request, res: Response) {
        const { idFactura } = req.params;
        await pool.query('DELETE FROM facturas_compras WHERE idFactura = ' + [idFactura]);
        res.json({ message: "The purchase was deleted" });
    }

    public async upDate(req: Request, res: Response) {
        res.json({ message: "The purchase was Updated" });
    }

    public async getOne(req: Request, res: Response) {
        const idFactura  = req.params.idFactura;
        console.log(idFactura);
        const purchase = await pool.query('SELECT * FROM facturas_compras where idFactura = ' + idFactura);
        console.log(purchase.recordsets);
        return res.json(purchase.recordsets);
    }
}

const purchaseControllers = new PurchaseControllers();
export default purchaseControllers;