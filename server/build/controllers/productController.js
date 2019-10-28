"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield database_1.default.query('select * from productos');
            res.json(products);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'INSERT INTO productos ' +
                '(codigoProducto, descripcionProducto, stock) values (' +
                req.body.codigoProducto + ', \'' +
                req.body.descripcionProducto + '\',' +
                req.body.stock + ')';
            yield database_1.default.query(query);
            res.json({ text: 'creating the product ' + req.body.descripcionProducto });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigoProducto } = req.params;
            yield database_1.default.query('DELETE FROM productos WHERE codigoProducto = ' + [codigoProducto]);
            res.json({ message: "The product was deleted" });
        });
    }
    upDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ message: "The product was Updated" });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const codigoProducto = req.params.codigoProducto;
            console.log(codigoProducto);
            const products = yield database_1.default.query('SELECT * FROM productos where codigoProducto = ' + codigoProducto);
            console.log(products);
            return res.json(products);
        });
    }
}
const productController = new ProductController();
exports.default = productController;
