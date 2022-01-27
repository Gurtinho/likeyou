import { Router } from 'express';
const router = Router();

import { router as create } from './post';
import { router as list } from './get';

router.use(create);
router.use(list);

export { router };