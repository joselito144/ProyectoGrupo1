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
class UsersControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * FROM users');
            console.log(users.recordsets);
            res.json(users.recordsets);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const username = req.body.username;
            const users = yield database_1.default.query('SELECT password FROM users where username = \'' + username + "\'");
            console.log(users.rowsAffected[0]);
            if (users.rowsAffected[0] === 0) {
                res.json(0);
            }
            else {
                if (req.body.password === users.recordsets[0][0].password) {
                    res.json(1);
                }
                else {
                    res.json(0);
                }
            }
        });
    }
}
const usersControllers = new UsersControllers();
exports.default = usersControllers;
