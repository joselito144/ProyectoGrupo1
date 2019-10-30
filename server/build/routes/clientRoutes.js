"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientControllers_1 = __importDefault(require("../controllers/clientControllers"));
class ClientRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', clientControllers_1.default.list);
        this.router.get('/:idCliente', clientControllers_1.default.getOne);
        this.router.post('/', clientControllers_1.default.create);
        this.router.delete('/:idCliente', clientControllers_1.default.delete);
        this.router.put('/:idCliente', clientControllers_1.default.upDate);
    }
}
const clientRoutes = new ClientRoutes();
exports.default = clientRoutes.router;
