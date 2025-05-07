import { User } from '@repo/types';
import UserRepository from '../database/repository/user-repository';
import { verifyPassword } from '../utils/password';
import { handler } from '@repo/server-utils';

class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async register(user: User) {
    const registerHandler = handler(async () => {
      const existingUser = await this.userRepository.findUser(user.email);

      if (existingUser) {
        throw new Error('User already exists');
      }

      const newUser = await this.userRepository.createUser(user);

      return {
        id: newUser._id,
        email: newUser.email,
        username: newUser.username,
        profileImage: newUser.profileImage,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
      };
    });

    return registerHandler();
  }

  async login(identifier: string, password: string) {
    const loginHandler = handler(async () => {
      const user = await this.userRepository.findUser(identifier);

      if (!user) {
        throw new Error('Incorrect email/username or password');
      }

      const isPasswordValid = await verifyPassword(password, user.password);

      if (!isPasswordValid) {
        throw new Error('Incorrect email/username or password');
      }

      return {
        id: user._id,
        email: user.email,
        username: user.username,
        profileImage: user.profileImage,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    });

    return loginHandler();
  }

  async getUser(userId: string) {
    const getUserHandler = handler(async () => {
      const user = await this.userRepository.getUser(
        { _id: userId },
        { password: 0 },
      );

      return user;
    });

    return getUserHandler();
  }
}

export default UserService;
