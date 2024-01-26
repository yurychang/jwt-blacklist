import { Router } from 'express';
import auth from './auth';
import { parseJwt } from '@/middlewares/parseJWT';

export const router = Router();

router.get('/', function (req, res, next) {
  res.send('Hello world!');
});

router.get('/protected', parseJwt, function (req, res, next) {
  res.send('This is a protected route!');
});

router.use(auth);
