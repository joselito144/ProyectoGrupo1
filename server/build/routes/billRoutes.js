"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const billControllers_1 = __importDefault(require("../controllers/billControllers"));
class BillRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', billControllers_1.default.list);
        this.router.get('/:idFacturaVenta', billControllers_1.default.getOne);
        this.router.post('/', billControllers_1.default.create);
        this.router.delete('/:idFacturaVenta', billControllers_1.default.delete);
        this.router.put('/:idFacturaVenta', billControllers_1.default.upDate);
    }
}
const billRoutes = new BillRoutes();
exports.default = billRoutes.router;
