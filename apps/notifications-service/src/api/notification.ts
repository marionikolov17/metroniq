import { Express } from 'express';
import NotificationService from '../services/notification-service';
import { tryCatch } from '@repo/server-utils';

export const notification = (app: Express) => {
  const service = new NotificationService();

  app.post(
    '/notifications',
    tryCatch(async (req, res) => {
      const notification = req.body;
      const newNotification = await service.createNotification(notification);
      res.status(201).json(newNotification);
    }),
  );

  app.get(
    '/notifications',
    tryCatch(async (req, res) => {
      const notifications = await service.getNotifications(req.query.userId);
      res.status(200).json(notifications);
    }),
  );

  app.put(
    '/notifications/:id',
    tryCatch(async (req, res) => {
      const notification = req.body;
      const updatedNotification = await service.updateNotification(
        req.params.id,
        notification,
      );
      res.status(200).json(updatedNotification);
    }),
  );
};
