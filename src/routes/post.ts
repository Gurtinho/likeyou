import { Router } from 'express';
const router = Router();

import { CreateUserController } from '../controllers/CreateUserController';
import { CreateTagController } from '../controllers/CreateTagController';
import { AuthUserController } from '../controllers/AuthUserController';
import { CreateComplimentController } from '../controllers/CreateComplimentController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuth } from '../middlewares/ensureAuth';

const authUserController = new AuthUserController();
const createTagController = new CreateTagController();
const createUserController = new CreateUserController();
const complimentController = new CreateComplimentController();

router.post('/login', authUserController.handle);
router.post('/users', createUserController.handle);
router.post('/compliments', ensureAuth, complimentController.handle);
router.post('/tags', ensureAuth, ensureAdmin, createTagController.handle);


export { router };