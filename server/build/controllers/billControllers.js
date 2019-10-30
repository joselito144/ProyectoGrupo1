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
class BillControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bills = yield database_1.default.query('SELECT * FROM facturas_ventas');
            console.log(bills);
            res.json(bills.recordsets);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'INSERT INTO facturas_ventas ' +
                '(idFacturaVenta, fecha, idCliente) values (' +
                req.body.idFacturaVenta + ', \'' +
                req.body.fecha + '\',' +
                req.body.idCliente + ')';
            yield database_1.default.query(query);
            res.json({ text: 'creating the bill number ' + req.body.idFacturaVenta });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idFacturaVenta } = req.params;
            yield database_1.default.query('DELETE FROM facturas_ventas WHERE idFacturaVenta = ' + [idFacturaVenta]);
            res.json({ message: "The bill was deleted" });
        });
    }
    upDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ message: "The bill was Updated" });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idFacturaVenta = req.params.idFacturaVenta;
            console.log(idFacturaVenta);
            const bills = yield database_1.default.query('SELECT * FROM facturas_ventas where idFacturaVenta = ' + idFacturaVenta);
            console.log(bills);
            return res.json(bills.recordsets);
        });
    }
}
const billControllers = new BillControllers();
exports.default = billControllers;
