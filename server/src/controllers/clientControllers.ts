import { Request, Response} from 'express';

import pool from '../database';

class ClientControllers {

    public async list (req: Request, res: Response) {
        const client = await pool.query('SELECT * FROM clientes')
        console.log(client);
        res.json(client.recordsets);
    }

    public async create(req:Request, res: Response) {
        const query: string = 'INSERT INTO clientes ' +
        '(idCliente, NombreCliente) values (' +
        req.body.idCliente +  ', \'' +
        req.body.nombreCliente +  '\')';
        await pool.query(query);
        res.json({text: 'creating the client ' + req.body.nombreCliente});
    }

    public async delete(req: Request, res: Response) {
        const { idCliente } = req.params;
        await pool.query('DELETE FROM clientes WHERE idCliente = ' + [idCliente]);
        res.json({ message: "The client was deleted" });
    }

    public async upDate(req: Request, res: Response) {
        res.json({ message: "The client was Updated" });
    }

    public async getOne(req: Request, res: Response) {
        const idCliente  = req.params.idCliente;
        console.log(idCliente);
        const client = await pool.query('SELECT * FROM clientes where idCliente = ' + idCliente);
        console.log(client);
        return res.json(client.recordsets);
    }
}

const clientControllers = new ClientControllers();
export default clientControllers;