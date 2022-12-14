import { Router } from 'express';

import SessionController from './controllers/SessionController.js';
import HouseController from './controllers/HouseController.js';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/houses', HouseController.store);
routes.get('/houses', HouseController.index);
routes.put('/houses/:house_id', HouseController.update);
routes.delete('/houses', HouseController.destroy);


export default routes;