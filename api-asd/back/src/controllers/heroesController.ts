import {Request, Response, text} from 'express';
import pool from '../db';

class HeroesController {
    public async list (req: Request, res: Response) {
        const personajes = await pool.query('SELECT * from personajes');
        res.json(personajes);
    }
    public async getOne(req: Request, res: Response){
        const {id} = req.params;
        const personaje = await pool.query('SELECT * from personajes WHERE id = ?', [id])
        if(personaje.length > 0){
            return res.json(personaje[0]);
        }else{
            res.status(404).json({text:'No existe el personaje'});
        }
    }
    public async create (req: Request, res: Response){
        await pool.query('INSERT INTO personajes set ?', [req.body])
        res.json({message: 'Personaje agregado'})
    }
    public async delete (req: Request, res: Response) {
        const {id} = req.params;
        await pool.query('DELETE from personajes WHERE id = ?', [id])
        res.json({message: 'Personaje eliminado'})
    }
    public async update (req: Request, res: Response) {
        const {id} = req.params;
        await pool.query('UPDATE personajes set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Personaje actualizado'});
    }
}

const heroesController = new HeroesController();
export default heroesController;