import express, { Express } from 'express';
import { env } from './env';
import { createServerApp } from './app';
import { connectToDatabase } from './database/connection';

const startServer = async () => {
  const app: Express = express();

  await connectToDatabase();

  createServerApp(app);

  const PORT: string = env.PORT;

  app.listen(PORT, () => {
    console.log(`Notifications service is running on port ${PORT}`);
  });
};

startServer();
