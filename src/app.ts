import express, { Application } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import morgan from 'morgan';
import exphbs from 'express-handlebars';

import connectDB from './config/db';
import router from './routes';

dotenv.config({ path: path.join(__dirname, '/config/config.env') });

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
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', router);

const PORT: string = process.env.PORT ?? '8000';

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
