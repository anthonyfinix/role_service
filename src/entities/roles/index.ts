import express from 'express';
const Router = express.Router();

import get from './controller/get';
import create from './controller/create';
import update from './controller/update';
import remove from './controller/remove';


Router.get('/', get);
Router.post('/', create);
Router.put('/', update);
Router.delete('/', remove);

export default Router