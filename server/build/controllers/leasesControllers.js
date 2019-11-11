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
class LeasesControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const housingUnit = yield database_1.default.query('SELECT * FROM unidades');
            console.log(housingUnit.recordsets);
            res.json(housingUnit.recordsets);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'INSERT INTO unidades ' +
                '(barrio, estrato, valorCanon, area, direccion, habitaciones, banios, parqueadero, cuartoUtil, tipoParqueadero, tipoCocina) values (\'' +
                req.body.barrio + '\',' +
                req.body.estrato + ',' +
                req.body.valorCanon + ',' +
                req.body.area + ',\'' +
                req.body.direccion + '\',' +
                req.body.habitaciones + ',' +
                req.body.banios + ',' +
                req.body.parqueadero + ',' +
                req.body.cuartoUtil + ',\'' +
                req.body.tipoParqueadero + '\',\'' +
                req.body.tipoCocina + '\')';
            console.log({ req });
            console.log(query);
            yield database_1.default.query(query);
            res.json({ text: 'creating housing unit number ' + req.body.id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM unidades WHERE id = ' + id);
            res.json({ message: "The housing unit was deleted" });
        });
    }
    upDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ message: "The housing unit was Updated" });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            console.log(id);
            const housingUnit = yield database_1.default.query('SELECT * FROM unidades where id = ' + id);
            console.log(housingUnit);
            return res.json(housingUnit.recordsets);
        });
    }
}
const leasesControllers = new LeasesControllers();
exports.default = leasesControllers;
