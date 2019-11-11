import { Router } from 'express';
import leasesControllers from '../controllers/leasesControllers';



class LeasesRoutes {

    public router: Router = Router();
    constructor(){
         this.config();
    }

    config(): void {
        this.router.get('/', leasesControllers.list);
        this.router.get('/:id', leasesControllers.getOne);
        this.router.post('/', leasesControllers.create);
        this.router.delete('/:id', leasesControllers.delete);
        this.router.put('/:id', leasesControllers.upDate)
    } 
}

const leasesRoutes = new LeasesRoutes();
export default leasesRoutes.router;