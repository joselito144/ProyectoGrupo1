import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors'
import productRoutes from './routes/productRoutes';
import billRoutes from './routes/billRoutes';
import clientRoutes from './routes/clientRoutes';
import providerRoutes from './routes/providerRoutes';
import purchaseRoutes from './routes/purchaseRoutes';


class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/products',productRoutes);
        this.app.use('/bills',billRoutes);
        this.app.use('/clients', clientRoutes);
        this.app.use('/providers', providerRoutes);
        this.app.use('/purchase', purchaseRoutes)
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Hemos iniciado en el puerto', this.app.get('port'));
        });
    }
}

const server = new Server;
server.start();