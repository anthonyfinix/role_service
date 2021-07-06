import express from 'express';
const Router = express.Router();

import get from './controllers/get';
import create from './controllers/create';
import update from './controllers/update';
import remove from './controllers/remove';
import expressJson from '../../middlewares/expressJson';
import urlEncoded from '../../middlewares/urlEncoded';
import error_handler from '../../routes/error_handler';


Router.get('/', get);
Router.post('/', urlEncoded(), error_handler, expressJson(), create);
Router.put('/', urlEncoded(), error_handler, expressJson(), update);
Router.delete('/', remove);

export default Router