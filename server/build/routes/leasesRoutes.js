"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const leasesControllers_1 = __importDefault(require("../controllers/leasesControllers"));
class LeasesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', leasesControllers_1.default.list);
        this.router.get('/:id', leasesControllers_1.default.getOne);
        this.router.post('/', leasesControllers_1.default.create);
        this.router.delete('/:id', leasesControllers_1.default.delete);
        this.router.put('/:id', leasesControllers_1.default.upDate);
    }
}
const leasesRoutes = new LeasesRoutes();
exports.default = leasesRoutes.router;
