"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class gamesRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Lista de juegos'));
    }
}
const gameRouter = new gamesRouter();
exports.default = gameRouter.router;
