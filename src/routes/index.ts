import express, { Router } from 'express';
// utility routes
import error from './error_handler';
import not_found from './not_found';
// entities
import role from '../entities/roles/index';
import entity from '../entities/permissions/index';
import permission from '../entities/permissions/index';

const router: Router = express.Router();
router.get('/', (req, res) => { res.send('user_service') })
router.use('/role', role)
router.use('/entity', entity)
router.use('/permission', permission)
router.use(not_found);
router.use(error);

export default router;