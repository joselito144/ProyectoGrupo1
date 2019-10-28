import { Router } from 'express';
import productController from '../controllers/productController';



class ProductRoutes {

    public router: Router = Router();
    constructor(){
         this.config();
    }

    config(): void {
        this.router.get('/', productController.list);
        this.router.get('/:codigoProducto', productController.getOne);
        this.router.post('/', productController.create);
        this.router.delete('/:codigoProducto', productController.delete);
        this.router.put('/:codigoProducto', productController.upDate)
    } 
}

const productRoutes = new ProductRoutes();
export default productRoutes.router;