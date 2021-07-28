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
const api_search_1 = require("./api/api_search");
const scripts_1 = require("./db/scripts");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const privateKey = './api/private_key.pem';
        const knex = scripts_1.conn();
        function updateFilms(filmTitle, response) {
            return __awaiter(this, void 0, void 0, function* () {
                function clean(str) {
                    return str.replace(/[^\w\s]/g, '').replace('  ', ' ').toLowerCase();
                }
                if (clean(filmTitle) !== clean(response.Title)) {
                    console.log(`ERROR - ${filmTitle} matched to wrong title ${response.Title}`);
                }
                else {
                    const whereClause = { title: filmTitle };
                    const setClause = {
                        year: response.Year,
                        genre: response.Genre,
                        rating: response.Rated,
                        runtime: response.Runtime.replace(' min', '')
                    };
                    yield scripts_1.update(knex, 'films', whereClause, setClause);
                }
            });
        }
        const rawString = 'WHERE ? IS NULL OR WHERE ? IS NULL OR WHERE ? IS NULL OR WHERE ? IS NULL';
        const rawFields = ['year', 'genre', 'rating', 'runtime'];
        const titles = (yield scripts_1.select(knex, 'title', 'films', rawString, rawFields)).map(row => (row.title));
        for (let title of titles) {
            const res = yield api_search_1.search(title, privateKey);
            res.Response === "True"
                ? yield updateFilms(title, res)
                : console.log(`ERROR - ${title}: ${res}`);
        }
        knex.destroy();
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield main();
}))();
