import { Request, Response } from 'express';
import knex from '../database/connection';

class PointItemsController {
    async index(req: Request, res: Response) {
        const { point_id } = req.query;

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_id', Number(point_id))
            .select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`
            };
        });
    
        return res.json(serializedItems);
    }
}

export default PointItemsController;