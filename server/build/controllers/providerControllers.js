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
class ProviderControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const providers = yield database_1.default.query('SELECT * FROM proveedores');
            console.log(providers.recordsets);
            res.json(providers.recordsets);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'INSERT INTO proveedores ' +
                '(idProveedor, nombreProveedor) values (' +
                req.body.idProveedor + ', \'' +
                req.body.nombreProveedor + '\')';
            yield database_1.default.query(query);
            res.json({ text: 'creating the provider ' + req.body.nombreProveedor });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProveedor } = req.params;
            yield database_1.default.query('DELETE FROM proveedores WHERE idProveedor = ' + [idProveedor]);
            res.json({ message: "The provider was deleted" });
        });
    }
    upDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ message: "The provider was Updated" });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idProveedor = req.params.idProveedor;
            console.log(idProveedor);
            const provider = yield database_1.default.query('SELECT * FROM proveedores where idProveedor = ' + idProveedor);
            console.log(provider.recordsets);
            return res.json(provider.recordsets);
        });
    }
}
const providerControllers = new ProviderControllers();
exports.default = providerControllers;
