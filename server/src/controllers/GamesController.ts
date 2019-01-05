import { Request, Response } from 'express';
import pool from '../database'

class GamesController
{
    public async index ( req: Request, res: Response )
    {
        let games = await pool.query('SELECT * FROM games');
        res.json(games);
    }
    public async show ( req: Request, res: Response )
    {
        let { id } = req.params;
        let game = await pool.query('SELECT * FROM games WHERE id = ? LIMIT 1', [id]);
        res.json(game);
    }
    public async create ( req: Request, res: Response )
    {
        let game = await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({ 'message': `Game has been created in ${game.insertId} id` });
    }
    public async update ( req: Request, res: Response )
    {
        let { id } = req.params;
        let game = await pool.query( 'UPDATE games set ? WHERE id = ?', [ req.body, id ] );
        res.json({ 'message': 'The game was update' });
    }
    public async delete ( req: Request, res: Response )
    {
        let { id } = req.params;
        await pool.query('DELETE  FROM games WHERE id = ?', [id])
        res.json({ 'message': `The game with id: ${id} has been removed`});
    }
}

const gamesController = new GamesController();
export default gamesController;