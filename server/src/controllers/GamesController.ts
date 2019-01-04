import { Request, Response } from 'express';
import pool from '../database'

class GamesController
{
    public async index ( req: Request, res: Response )
    {
        let games = await pool.query('SELECT * FROM games');
        res.json({ 'text': games });
    }
    public async show ( req: Request, res: Response )
    {
        let { id } = req.params;
        let game = await pool.query('SELECT * FROM games WHERE id = ? LIMIT 1', [id]);
        res.json({ 'data': game });
    }
    public async create ( req: Request, res: Response )
    {
        let game = await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({ 'message': 'Game has been created', 'game': game.insertId  });
    }
    public async update ( req: Request, res: Response )
    {
        let { id } = req.params;
        let game = await pool.query( 'UPDATE games set ? WHERE id = ?', [ req.body, id ] );
        res.json({ 'game': 'The game was update' });
    }
    public async delete ( req: Request, res: Response )
    {
        let { id } = req.params;
        let game = await pool.query('DELETE  FROM games WHERE id = ?', [id])

        res.json({ 'text': 'The game with id:  ' + req.params.id + ' has been removed'});
    }
}

const gamesController = new GamesController();
export default gamesController;