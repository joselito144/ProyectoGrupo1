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
class PurchaseControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const purchase = yield database_1.default.query('SELECT * FROM facturas_compras');
            console.log(purchase.recordsets);
            res.json(purchase.recordsets);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'INSERT INTO facturas_compras ' +
                '(idFactura, fecha, idProveedor) values (' +
                req.body.idFactura + ', \'' +
                req.body.fecha + '\',' +
                req.body.idProveedor + ')';
            yield database_1.default.query(query);
            res.json({ text: 'creating the purchase number ' + req.body.idFactura });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idFactura } = req.params;
            yield database_1.default.query('DELETE FROM facturas_compras WHERE idFactura = ' + [idFactura]);
            res.json({ message: "The purchase was deleted" });
        });
    }
    upDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ message: "The purchase was Updated" });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idFactura = req.params.idFactura;
            console.log(idFactura);
            const purchase = yield database_1.default.query('SELECT * FROM facturas_compras where idFactura = ' + idFactura);
            console.log(purchase.recordsets);
            return res.json(purchase.recordsets);
        });
    }
}
const purchaseControllers = new PurchaseControllers();
exports.default = purchaseControllers;
