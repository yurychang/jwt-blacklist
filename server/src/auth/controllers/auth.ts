import express from 'express';
import { verifyPassword } from '@/utils/pwd-encrypt';
import { prisma } from '@/models/prisma';
import { generateJwtToken } from '@/utils/generate-jwt-token';
import { parseJwt } from '@/middlewares/parseJWT';
import { redis } from '@/models/redis';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body as {
    username: string;
    password: string;
  };
  const user = await prisma.user.findFirst({ where: { username } });

  if (!user) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  const isMatch = await verifyPassword(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  const token = generateJwtToken({
    userId: user.userId,
    username: user.username,
  });

  res.json({ token });
});

router.post('/logout', parseJwt, async (req, res) => {
  const { exp } = req.authPayload!;
  redis.set(`bl_${req.authToken!}`, req.authToken!);
  redis.expireAt(`bl_${req.authToken!}`, exp);
  res.sendStatus(200);
});

export default router;
