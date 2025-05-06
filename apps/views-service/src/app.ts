import express, { Express } from 'express';
import { view } from './api/view';

export const createServerApp = (app: Express) => {
  app.use(express.json());

  view(app);
};
