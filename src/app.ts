import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config({ path: './src/config/config.env' });

connectDB();

const app = express();
const PORT = process.env.PORT ?? 8000;

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
});