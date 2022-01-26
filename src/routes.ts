import { Router } from 'express';
const router = Router();

import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthUserController } from './controllers/AuthUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authUserController = new AuthUserController();
const complimentController = new CreateComplimentController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAdmin, createTagController.handle);
router.post('/login', authUserController.handle);
router.post('/compliments', complimentController.handle);

export { router };