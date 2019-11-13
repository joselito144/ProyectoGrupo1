"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const neighborhoodControllers_1 = __importDefault(require("../controllers/neighborhoodControllers"));
class NeighborhoodRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
        console.log('Entraeda');
    }
    config() {
        this.router.get('/', neighborhoodControllers_1.default.list);
    }
}
const neighborhoodRoutes = new NeighborhoodRoutes();
exports.default = neighborhoodRoutes.router;
