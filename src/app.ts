import express, {
  Application,
  Request,
  Response,
} from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config({ path: './src/config/config.env' });

connectDB();

const app: Application = express();
const PORT: string = process.env.PORT ?? '8000';

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
