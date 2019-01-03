import { Router } from 'express';

class IndexRoute
{
    public router: Router = Router();

     constructor()
     {
        this.config()
     }

    config(): void
    {
        this.router.get('/', ( req, res ) => res.send('Hello'));
    }
}

const indexRoute = new IndexRoute();
export default indexRoute.router;