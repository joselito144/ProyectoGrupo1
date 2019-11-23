import { Router } from 'express';
import usersControllers from '../controllers/usersControllers';



class UsersRoutes {

    public router: Router = Router();
    constructor(){
         this.config();
    }

    config(): void {
        this.router.get('/', usersControllers.list);
        this.router.post('/', usersControllers.getOne);
    } 
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;