import { Express } from 'express';
import { tryCatch } from '@repo/server-utils';
import { authenticateToken } from '@repo/auth';
import UserService from '../services/user-service';
import { isAuthenticated } from './middleware/auth-middleware';

export const user = (app: Express) => {
  const userService = new UserService();

  app.post(
    '/register',
    tryCatch(async (req, res) => {
      const { email, username, password } = req.body;

      // TODO: Get random profile image from uploads
      const profileImage = '';

      const user = await userService.register({
        email,
        username,
        password,
        profileImage,
      });
      res.status(201).json(user);
    }),
  );

  app.post(
    '/login',
    tryCatch(async (req, res) => {
      const { identifier, password } = req.body;

      const user = await userService.login(identifier, password);
      res.status(200).json(user);
    }),
  );

  app.get(
    '/get',
    authenticateToken,
    isAuthenticated,
    tryCatch(async (req, res) => {
      const user = await userService.getUser(req.user.userId);
      res.status(200).json(user);
    }),
  );
};
