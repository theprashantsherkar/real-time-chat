import express from 'express';
import { loginFunc, logout, signinFunc } from '../controllers/Auth';

const router = express.Router();

router.post('/login', loginFunc);
router.post('/register', signinFunc);
router.get('/logout', logout);

export default router;
