import { Request, Response} from 'express';

import pool from '../database';

class LeasesControllers {

    public async list (req: Request, res: Response) {
        const housingUnit = await pool.query('SELECT * FROM unidades')
        console.log(housingUnit.recordsets);
        res.json(housingUnit.recordsets);
    }

    public async create(req:Request, res: Response) {
        const query: string = 'INSERT INTO unidades ' +
        '(barrio, estrato, valorCanon, area, direccion, habitaciones, banios, parqueadero, cuartoUtil, tipoParqueadero, tipoCocina) values (\'' +
        req.body.barrio +  '\',' +
        req.body.estrato +  ',' +
        req.body.valorCanon +  ',' +
        req.body.area +  ',\'' +
        req.body.direccion +  '\',' +
        req.body.habitaciones +  ',' +
        req.body.banios +  ',' +
        req.body.parqueadero +  ',' +
        req.body.cuartoUtil +  ',\'' +
        req.body.tipoParqueadero +  '\',\'' +
        req.body.tipoCocina +  '\')';
        console.log({req})
        console.log(query);
        await pool.query(query);
        res.json({text: 'creating housing unit number ' + req.body.id});
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM unidades WHERE id = ' + id);
        res.json({ message: "The housing unit was deleted" });
    }

    public async upDate(req: Request, res: Response) {
        res.json({ message: "The housing unit was Updated" });
    }

    public async getOne(req: Request, res: Response) {
        const id  = req.params.id;
        console.log(id);
        const housingUnit = await pool.query('SELECT * FROM unidades where id = ' + id);
        console.log(housingUnit);
        return res.json(housingUnit.recordsets);
    }
}

const leasesControllers = new LeasesControllers();
export default leasesControllers;