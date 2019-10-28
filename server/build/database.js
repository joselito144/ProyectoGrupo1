"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("./keys"));
var mssql = require('mssql');
var pool = mssql.connect(keys_1.default.database, function (err, res) {
    if (err) {
        throw err;
    }
    else {
        console.log('Conectado correctamente a la BD');
    }
});
exports.default = pool;
