import { Router } from 'express';
import clientControllers from '../controllers/clientControllers';



class ClientRoutes {

    public router: Router = Router();
    constructor(){
         this.config();
    }

    config(): void {
        this.router.get('/', clientControllers.list);
        this.router.get('/:idCliente', clientControllers.getOne);
        this.router.post('/', clientControllers.create);
        this.router.delete('/:idCliente', clientControllers.delete);
        this.router.put('/:idCliente', clientControllers.upDate)
    } 
}

const clientRoutes = new ClientRoutes();
export default clientRoutes.router;