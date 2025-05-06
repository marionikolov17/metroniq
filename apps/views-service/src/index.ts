import express from 'express';
import { env } from './env';

const app: express.Application = express();

const PORT: string = env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
