import { Express } from 'express';
import { tryCatch } from '@repo/server-utils';
import { authenticateToken, AuthService, isAuthenticated } from '@repo/auth';
import UserService from '../services/user-service';

export const user = (app: Express) => {
  const userService = new UserService();
  const authService = new AuthService();

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

      const token = await authService.generateToken(user.id);
      res.status(201).json({ user, token });
    }),
  );

  app.post(
    '/login',
    tryCatch(async (req, res) => {
      const { identifier, password } = req.body;

      const user = await userService.login(identifier, password);

      const token = await authService.generateToken(user.id);
      res.status(200).json({ user, token });
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
