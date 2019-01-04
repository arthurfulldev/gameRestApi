"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({
            "API": "Las rutas de la api son:",
            "routes": {
                "listGames~GET": "api/games",
                "createGame~POST": "api/games",
                "modifyGame~PUT": "api/games/{id}",
                "deleteGame~DELETE": "api/games/{id}"
            }
        });
    }
}
const indexController = new IndexController();
exports.default = indexController;
