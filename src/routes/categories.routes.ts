import { Router } from 'express';
import { createCategory } from '../controllers/categories.controller';

const router = Router();

router.post('/categories', createCategory);

export default router;
