import express, { Express } from 'express';
import { notification } from './api/notification';

export const createServerApp = (app: Express) => {
  app.use(express.json());

  notification(app);
};
