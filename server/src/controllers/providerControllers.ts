import { Request, Response} from 'express';

import pool from '../database';

class ProviderControllers {

    public async list (req: Request, res: Response) {
        const providers = await pool.query('SELECT * FROM proveedores')
        console.log(providers.recordsets);
        res.json(providers.recordsets);
    }

    public async create(req:Request, res: Response) {
        const query: string = 'INSERT INTO proveedores ' +
        '(idProveedor, nombreProveedor) values (' +
        req.body.idProveedor +  ', \'' +
        req.body.nombreProveedor +  '\')';
        await pool.query(query);
        res.json({text: 'creating the provider ' + req.body.nombreProveedor});
    }

    public async delete(req: Request, res: Response) {
        const { idProveedor } = req.params;
        await pool.query('DELETE FROM proveedores WHERE idProveedor = ' + [idProveedor]);
        res.json({ message: "The provider was deleted" });
    }

    public async upDate(req: Request, res: Response) {
        res.json({ message: "The provider was Updated" });
    }

    public async getOne(req: Request, res: Response) {
        const idProveedor  = req.params.idProveedor;
        console.log(idProveedor);
        const provider = await pool.query('SELECT * FROM proveedores where idProveedor = ' + idProveedor);
        console.log(provider.recordsets);
        return res.json(provider.recordsets);
    }
}

const providerControllers = new ProviderControllers();
export default providerControllers;