"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const providerControllers_1 = __importDefault(require("../controllers/providerControllers"));
class ProviderRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', providerControllers_1.default.list);
        this.router.get('/:idProveedor', providerControllers_1.default.getOne);
        this.router.post('/', providerControllers_1.default.create);
        this.router.delete('/:idProveedor', providerControllers_1.default.delete);
        this.router.put('/:idProveedor', providerControllers_1.default.upDate);
    }
}
const providerRoutes = new ProviderRoutes();
exports.default = providerRoutes.router;
