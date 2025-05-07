import { Notification } from '@repo/types';
import notificationModel from '../models/Notification';

class NotificationRepository {
  private notificationModel: typeof notificationModel;

  constructor() {
    this.notificationModel = notificationModel;
  }

  async createNotification(notification: Notification) {
    return await this.notificationModel.create(notification);
  }

  async getNotifications(query: any) {
    return await this.notificationModel.find(query);
  }

  async updateNotification(id: string, notification: Notification) {
    return await this.notificationModel.findByIdAndUpdate(id, notification, {
      new: true,
    });
  }

  async deleteNotification(id: string) {
    return await this.notificationModel.findByIdAndDelete(id);
  }

  async getNotificationById(id: string) {
    return await this.notificationModel.findById(id);
  }
}

export default NotificationRepository;
