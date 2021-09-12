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
exports.select = exports.update = exports.bulkInsert = exports.conn = void 0;
const knex_1 = __importDefault(require("knex"));
function conn() {
    const config = {
        client: 'mysql2',
        connection: {
            host: 'db',
            user: 'root',
            password: 'rewt',
            database: 'db'
        }
    };
    const knex_conn = knex_1.default(config);
    return knex_conn;
}
exports.conn = conn;
function bulkInsert(conn, table, valuesArray) {
    return __awaiter(this, void 0, void 0, function* () {
        yield conn(table).insert(valuesArray);
    });
}
exports.bulkInsert = bulkInsert;
function update(conn, table, whereClause, setClause) {
    return __awaiter(this, void 0, void 0, function* () {
        yield conn(table).where(whereClause).update(setClause);
    });
}
exports.update = update;
function select(conn, field, table, rawString, rawFields) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield conn.select(field).from(table).whereRaw(rawString, rawFields);
        return result;
    });
}
exports.select = select;
