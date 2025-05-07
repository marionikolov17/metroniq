import { handler } from '@repo/server-utils';
import { Notification } from '@repo/types';
import NotificationRepository from '../database/repository/notification-repository';

class NotificationService {
  private notificationRepository: NotificationRepository;

  constructor() {
    this.notificationRepository = new NotificationRepository();
  }

  async createNotification(notification: Notification) {
    const createNotificationHandler = handler(() =>
      this.notificationRepository.createNotification(notification),
    );
    return createNotificationHandler();
  }

  async getNotifications(userId: string) {
    const getNotificationsHandler = handler(() =>
      this.notificationRepository.getNotifications({ userId }),
    );
    return getNotificationsHandler();
  }

  async updateNotification(id: string, notification: Notification) {
    const updateNotificationHandler = handler(() =>
      this.notificationRepository.updateNotification(id, notification),
    );
    return updateNotificationHandler();
  }
}

export default NotificationService;
