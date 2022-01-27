import { Router } from 'express';
const router = Router();

import { ListUserSendComplimentsController } from '../controllers/ListUserSendComplimentsController';
import { ListUserReceiveComplimentsController } from '../controllers/ListUserReceiveComplimentsController';
import { ListTagController } from '../controllers/ListTagController';
import { ListUsersController } from '../controllers/ListUsersController';

import { ensureAuth } from '../middlewares/ensureAuth';

const listTagController = new ListTagController();
const listUsersController = new ListUsersController();
const listUserSendCompControl = new ListUserSendComplimentsController();
const listUserReceiveCompControl = new ListUserReceiveComplimentsController();

router.get('/tags', ensureAuth, listTagController.handle);
router.get('/users', ensureAuth, listUsersController.handle);
router.get('/users/compliments/send', ensureAuth, listUserSendCompControl.handle);
router.get('/users/compliments/receive', ensureAuth, listUserReceiveCompControl.handle);

export { router };