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
class ClientControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield database_1.default.query('SELECT * FROM clientes');
            console.log(client);
            res.json(client.recordsets);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'INSERT INTO clientes ' +
                '(idCliente, NombreCliente) values (' +
                req.body.idCliente + ', \'' +
                req.body.nombreCliente + '\')';
            yield database_1.default.query(query);
            res.json({ text: 'creating the client ' + req.body.nombreCliente });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCliente } = req.params;
            yield database_1.default.query('DELETE FROM clientes WHERE idCliente = ' + [idCliente]);
            res.json({ message: "The client was deleted" });
        });
    }
    upDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ message: "The client was Updated" });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idCliente = req.params.idCliente;
            console.log(idCliente);
            const client = yield database_1.default.query('SELECT * FROM clientes where idCliente = ' + idCliente);
            console.log(client);
            return res.json(client.recordsets);
        });
    }
}
const clientControllers = new ClientControllers();
exports.default = clientControllers;
