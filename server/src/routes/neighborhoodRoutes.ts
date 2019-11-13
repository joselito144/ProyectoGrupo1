import { Router } from 'express';
import neighborhoodControllers from '../controllers/neighborhoodControllers';



class NeighborhoodRoutes {

    public router: Router = Router();
    constructor(){
         this.config();
         console.log('Entraeda')
    }

    config(): void {
        this.router.get('/', neighborhoodControllers.list);
    } 
}

const neighborhoodRoutes = new NeighborhoodRoutes();
export default neighborhoodRoutes.router;