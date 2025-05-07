import mongoose from 'mongoose';
import { env } from '../env';

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(env.DATABASE_URL, {
      user: env.DATABASE_USER,
      pass: env.DATABASE_PASSWORD,
      dbName: env.DATABASE_NAME,
    });
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database', error);
  }
};
