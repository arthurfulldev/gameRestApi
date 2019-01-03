import express, { Application} from "express";
import morgan from 'morgan';
import cors from 'cors';

import indexRoute from './routes/indexRoute';
import gamesRouter from './routes/gameRoute';

class Server {

    public app: Application;
    
    constructor(){
        this.app = express();
        this.config();
        this.route();
    }

    config(): void{
        this.app.set("port", process.env.PORT ||3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false}));
    }

    route():void{
        this.app.use('/api', indexRoute);
        this.app.use('/api/games',gamesRouter)
    }

    start():void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server port:' + this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();