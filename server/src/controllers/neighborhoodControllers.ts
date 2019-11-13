import { Request, Response} from 'express';

import pool from '../database';

class NeighborhoodControllers {

    public async list (req: Request, res: Response) {
        const neighborhoods = await pool.query('SELECT barrio, count(*) as cantidad FROM unidades group by barrio')
        console.log(neighborhoods.recordsets);
        res.json(neighborhoods.recordsets);
    }


}

const neighborhoodControllers = new NeighborhoodControllers();
export default neighborhoodControllers;