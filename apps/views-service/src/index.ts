import express, { Express } from 'express';
import { env } from './env';
import { createServerApp } from './app';

const startServer = () => {
  const app: Express = express();

  // Connect to database

  createServerApp(app);

  const PORT: string = env.PORT;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
