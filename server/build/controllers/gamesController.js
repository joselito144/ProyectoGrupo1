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
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('select * from games');
            res.json(games);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'INSERT INTO games ' +
                '(id, title, description, image, create_at) values (' +
                req.body.id + ', \'' +
                req.body.title + '\', \'' +
                req.body.description + '\', \'' +
                req.body.image + '\', \'' +
                req.body.create_at + '\')';
            yield database_1.default.query(query);
            res.json({ text: 'creating the game ' + req.body.title });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM games WHERE id = ' + [id]);
            res.json({ message: "The game was deleted" });
        });
    }
    upDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ message: "The game was Updated" });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            console.log(id);
            const games = yield database_1.default.query('SELECT * FROM games where id = ' + id);
            console.log(games);
            return res.json(games);
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
