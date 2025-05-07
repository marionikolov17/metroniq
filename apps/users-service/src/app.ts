import express, { Express } from 'express';
import { user } from './api/user';

export const createServerApp = (app: Express) => {
  app.use(express.json());

  user(app);
};
