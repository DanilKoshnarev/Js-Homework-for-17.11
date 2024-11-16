import { Router } from 'express';
import { authRegistration } from '../controllers/authController';

const router = Router();

router.post('/registration', authRegistration);

export default router;
