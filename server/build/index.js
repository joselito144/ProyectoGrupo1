"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const billRoutes_1 = __importDefault(require("./routes/billRoutes"));
const clientRoutes_1 = __importDefault(require("./routes/clientRoutes"));
const providerRoutes_1 = __importDefault(require("./routes/providerRoutes"));
const purchaseRoutes_1 = __importDefault(require("./routes/purchaseRoutes"));
const leasesRoutes_1 = __importDefault(require("./routes/leasesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/products', productRoutes_1.default);
        this.app.use('/bills', billRoutes_1.default);
        this.app.use('/clients', clientRoutes_1.default);
        this.app.use('/providers', providerRoutes_1.default);
        this.app.use('/purchase', purchaseRoutes_1.default);
        this.app.use('/leases', leasesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Hemos iniciado en el puerto', this.app.get('port'));
        });
    }
}
const server = new Server;
server.start();
