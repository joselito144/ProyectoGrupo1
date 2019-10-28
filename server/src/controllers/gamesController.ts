import { Request, Response} from 'express';

import pool from '../database';





class GamesController {

    public async list (req: Request, res: Response) {
        const games = await pool.query('select * from games')
        res.json(games);
    }

    public async create(req:Request, res: Response) {
        const query: string = 'INSERT INTO games ' +
        '(id, title, description, image, create_at) values (' +
        req.body.id +  ', \'' +
        req.body.title +  '\', \'' +
        req.body.description +  '\', \'' +
        req.body.image +  '\', \'' +
        req.body.create_at +  '\')'
        await pool.query(query);
        res.json({text: 'creating the game ' + req.body.title});
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ' + [id]);
        res.json({ message: "The game was deleted" });
    }

    public async upDate(req: Request, res: Response) {
        res.json({ message: "The game was Updated" });
    }

    public async getOne(req: Request, res: Response) {
        const id  = req.params.id;
        console.log(id);
        const games = await pool.query('SELECT * FROM games where id = ' + id);
        console.log(games);
        return res.json(games);
    }
}

const gamesController = new GamesController();
export default gamesController;