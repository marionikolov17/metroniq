import { Express } from 'express';
import ViewService from '../services/view-service';
import { tryCatch } from '@repo/server-utils';

export const view = (app: Express) => {
  const service = new ViewService();

  app.post(
    '/views',
    tryCatch(async (req, res) => {
      const view = req.body;
      const newView = await service.CreateView(view);
      res.status(201).json(newView);
    }),
  );

  app.get(
    '/views',
    tryCatch(async (req, res) => {
      const views = await service.FetchViews(req.query);
      res.status(200).json(views);
    }),
  );

  app.put(
    '/views/:id',
    tryCatch(async (req, res) => {
      const view = req.body;
      const updatedView = await service.UpdateView(req.params.id, view);
      res.status(200).json(updatedView);
    }),
  );
};
