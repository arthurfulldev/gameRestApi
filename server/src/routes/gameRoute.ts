import { Router } from 'express';

class gamesRouter{

    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config() :void
    {
        this.router.get('/', (req, res) => res.send('Lista de juegos'));
    }

}

const gameRouter = new gamesRouter()
export default gameRouter.router;