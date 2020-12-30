import express, { Application } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import exphbs from 'express-handlebars';

import connectDB from './config/db';
import router from './routes';

dotenv.config({ path: './src/config/config.env' });

connectDB();

const app: Application = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
}));
app.set('view engine', '.hbs');
app.set('views', './src/views');

app.use('/', router);

const PORT: string = process.env.PORT ?? '8000';

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
