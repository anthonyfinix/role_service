import express from 'express';
const Router = express.Router();

import get from './controller/get';
import create from './controller/create';
import update from './controller/update';
import remove from './controller/remove';
import urlEncoded from '../../middlewares/urlEncoded';
import expressJson from '../../middlewares/expressJson';
import error_handler from '../../routes/error_handler';


Router.get('/', get);
Router.post('/', urlEncoded(), error_handler, expressJson(), create);
Router.put('/', urlEncoded(), error_handler, expressJson(), update);
Router.delete('/', remove);

export default Router