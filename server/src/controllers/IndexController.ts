import { Request, Response } from 'express';

class IndexController
{
    public index( req: Request, res: Response )
    {
        res.json(
            { 
                "API": "Las rutas de la api son:",
                "routes" : {
                    "listGames~GET": "api/games",
                    "createGame~POST": "api/games",
                    "modifyGame~PUT": "api/games/{id}",
                    "deleteGame~DELETE": "api/games/{id}"
                }
            }
        );
    }
}

const indexController = new IndexController();
export default indexController;