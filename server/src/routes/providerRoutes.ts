import { Router } from 'express';
import providerControllers from '../controllers/providerControllers';



class ProviderRoutes {

    public router: Router = Router();
    constructor(){
         this.config();
    }

    config(): void {
        this.router.get('/', providerControllers.list);
        this.router.get('/:idProveedor', providerControllers.getOne);
        this.router.post('/', providerControllers.create);
        this.router.delete('/:idProveedor', providerControllers.delete);
        this.router.put('/:idProveedor', providerControllers.upDate)
    } 
}

const providerRoutes = new ProviderRoutes();
export default providerRoutes.router;