"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GamesController_1 = __importDefault(require("../controllers/GamesController"));
class gamesRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', GamesController_1.default.index);
        this.router.post('/', GamesController_1.default.create);
        this.router.get('/:id', GamesController_1.default.show);
        this.router.put('/:id', GamesController_1.default.update);
        this.router.delete('/:id', GamesController_1.default.delete);
    }
}
const gameRouter = new gamesRouter();
exports.default = gameRouter.router;
