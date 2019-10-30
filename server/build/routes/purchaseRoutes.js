"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const purchaseControllers_1 = __importDefault(require("../controllers/purchaseControllers"));
class PurchaseRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', purchaseControllers_1.default.list);
        this.router.get('/:idFactura', purchaseControllers_1.default.getOne);
        this.router.post('/', purchaseControllers_1.default.create);
        this.router.delete('/:idFactura', purchaseControllers_1.default.delete);
        this.router.put('/:idFactura', purchaseControllers_1.default.upDate);
    }
}
const purchaseRoutes = new PurchaseRoutes();
exports.default = purchaseRoutes.router;
