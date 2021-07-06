import express, { Router } from 'express';
// utility routes
import error from './error_handler';
import not_found from './not_found';
// entities
import role from '../entities/roles/index';
import entity from '../entities/entity/index';
import permission from '../entities/permissions/index';
import create from '../controllers/create';
import expressJson from '../middlewares/expressJson';
import error_handler from './error_handler';
import urlEncoded from '../middlewares/urlEncoded';

import post from '../middlewares/validators/post';

const router: Router = express.Router();
router.get('/', (req, res) => { res.send('user_service') })
router.use('/role', role)
router.use('/entity', entity)
router.use('/permission', permission)
router.post('/', urlEncoded(), error_handler, expressJson(), post, create)
router.use(error_handler);
router.use(not_found);
router.use(error);

export default router;