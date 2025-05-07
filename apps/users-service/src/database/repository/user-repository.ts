import { User } from '@repo/types';
import userModel from '../models/User';

class UserRepository {
  private readonly userModel: typeof userModel;

  constructor() {
    this.userModel = userModel;
  }

  async createUser(user: User) {
    const newUser = await this.userModel.create(user);
    return newUser;
  }

  async findUser(identifier: string) {
    const query = {
      $or: [{ email: identifier }, { username: identifier }],
    };

    const user = await this.userModel.findOne(query);
    return user;
  }

  async getUser(query: any) {
    const user = await this.userModel.findOne(query);
    return user;
  }

  async updateUser(query: any, update: any) {
    const user = await this.userModel.findOneAndUpdate(query, update, {
      new: true,
    });
    return user;
  }

  async deleteUser(query: any) {
    await this.userModel.findOneAndDelete(query);
  }
}

export default UserRepository;
