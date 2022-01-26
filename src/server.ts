import express from 'express';
import { generalError } from './middlewares/generalError';
import { router } from './routes';
import 'reflect-metadata';
import 'express-async-errors';
import './database';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use( generalError );
app.use( router );

app.listen(3000);