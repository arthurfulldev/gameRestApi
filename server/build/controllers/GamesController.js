"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let games = yield database_1.default.query('SELECT * FROM games');
            res.json(games);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = req.params;
            let game = yield database_1.default.query('SELECT * FROM games WHERE id = ? LIMIT 1', [id]);
            res.json(game);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let game = yield database_1.default.query('INSERT INTO games set ?', [req.body]);
            res.json({ 'message': `Game has been created in ${game.insertId} id` });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = req.params;
            let game = yield database_1.default.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
            res.json({ 'message': 'The game was update' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = req.params;
            yield database_1.default.query('DELETE  FROM games WHERE id = ?', [id]);
            res.json({ 'message': `The game with id: ${id} has been removed` });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
