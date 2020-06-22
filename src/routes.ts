import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import PointItemsController from './controllers/PointItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();
const pointItemsController = new PointItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.get('/point_items', pointItemsController.index);

export default routes;