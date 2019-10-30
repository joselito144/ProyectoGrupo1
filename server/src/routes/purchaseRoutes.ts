import { Router } from 'express';
import purchaseControllers from '../controllers/purchaseControllers';



class PurchaseRoutes {

    public router: Router = Router();
    constructor(){
         this.config();
    }

    config(): void {
        this.router.get('/', purchaseControllers.list);
        this.router.get('/:idFactura', purchaseControllers.getOne);
        this.router.post('/', purchaseControllers.create);
        this.router.delete('/:idFactura', purchaseControllers.delete);
        this.router.put('/:idFactura', purchaseControllers.upDate)
    } 
}

const purchaseRoutes = new PurchaseRoutes();
export default purchaseRoutes.router;