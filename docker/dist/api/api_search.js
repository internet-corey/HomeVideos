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
exports.search = void 0;
const axios_1 = __importDefault(require("axios"));
const api_key_1 = require("./api_key");
function search(searchTerm, privateKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = api_key_1.decrypt(api_key_1.encryptedApiKey, privateKey);
        const url = `https://www.omdbapi.com/?apikey=${key}&t=${searchTerm}`;
        try {
            return (yield axios_1.default.get(url)).data;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.search = search;
