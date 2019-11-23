import { Request, Response} from 'express';

import pool from '../database';

class UsersControllers {

    public async list (req: Request, res: Response) {
        const users = await pool.query('SELECT * FROM users')
        console.log(users.recordsets);
        res.json(users.recordsets);
    }

    public async getOne (req: Request, res: Response) {
        const username  = req.body.username;
        const users = await pool.query('SELECT password FROM users where username = \'' + username + "\'");
        console.log(users.rowsAffected[0]);
        if(users.rowsAffected[0] === 0){
            res.json(false);
        }
        else
        {
            if(req.body.password === users.recordsets[0][0].password) {
                res.json(true);
            }
            else{
                res.json(false);
            }
        }


    }


}

const usersControllers = new UsersControllers();
export default usersControllers;