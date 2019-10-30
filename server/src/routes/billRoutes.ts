import { Router } from 'express';
import billControllers from '../controllers/billControllers';



class BillRoutes {

    public router: Router = Router();
    constructor(){
         this.config();
    }

    config(): void {
        this.router.get('/', billControllers.list);
        this.router.get('/:idFacturaVenta', billControllers.getOne);
        this.router.post('/', billControllers.create);
        this.router.delete('/:idFacturaVenta', billControllers.delete);
        this.router.put('/:idFacturaVenta', billControllers.upDate)
    } 
}

const billRoutes = new BillRoutes();
export default billRoutes.router;