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
Object.defineProperty(exports, "__esModule", { value: true });
const scripts_1 = require("./scripts");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const knex = scripts_1.conn();
        yield knex.schema.withSchema('db').dropTableIfExists('films');
        yield knex.schema.withSchema('db').createTable('films', function (table) {
            table.increments();
            table.string('title');
            table.string('year');
            table.string('genre');
            table.string('rating');
            table.string('runtime');
        });
        knex.destroy();
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield main();
}))();
