import { Request, Response} from 'express';

import pool from '../database';

class BillControllers {

    public async list (req: Request, res: Response) {
        const bills = await pool.query('SELECT * FROM facturas_ventas')
        console.log(bills);
        res.json(bills.recordsets);
    }

    public async create(req:Request, res: Response) {
        const query: string = 'INSERT INTO facturas_ventas ' +
        '(idFacturaVenta, fecha, idCliente) values (' +
        req.body.idFacturaVenta +  ', \'' +
        req.body.fecha +  '\',' +
        req.body.idCliente +  ')'
        await pool.query(query);
        res.json({text: 'creating the bill number ' + req.body.idFacturaVenta});
    }

    public async delete(req: Request, res: Response) {
        const { idFacturaVenta } = req.params;
        await pool.query('DELETE FROM facturas_ventas WHERE idFacturaVenta = ' + [idFacturaVenta]);
        res.json({ message: "The bill was deleted" });
    }

    public async upDate(req: Request, res: Response) {
        res.json({ message: "The bill was Updated" });
    }

    public async getOne(req: Request, res: Response) {
        const idFacturaVenta  = req.params.idFacturaVenta;
        console.log(idFacturaVenta);
        const bills = await pool.query('SELECT * FROM facturas_ventas where idFacturaVenta = ' + idFacturaVenta);
        console.log(bills);
        return res.json(bills.recordsets);
    }
}

const billControllers = new BillControllers();
export default billControllers;