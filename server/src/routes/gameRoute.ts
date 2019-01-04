import { Router } from 'express';
import gamesController from '../controllers/GamesController';


class gamesRouter{

    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config() :void
    {
        this.router.get('/', gamesController.index);
        this.router.post('/', gamesController.create);
        this.router.get('/:id', gamesController.show);
        this.router.put('/:id', gamesController.update);
        this.router.delete('/:id', gamesController.delete);
    }

}

const gameRouter = new gamesRouter()
export default gameRouter.router;