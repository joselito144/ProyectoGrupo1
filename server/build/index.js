"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const leasesRoutes_1 = __importDefault(require("./routes/leasesRoutes"));
const neighborhoodRoutes_1 = __importDefault(require("./routes/neighborhoodRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
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
        this.app.use('/leases', leasesRoutes_1.default);
        this.app.use('/neighborhood', neighborhoodRoutes_1.default),
            this.app.use('/users', usersRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Hemos iniciado en el puerto', this.app.get('port'));
        });
    }
}
const server = new Server;
server.start();
