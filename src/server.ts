import express from 'express';
import 'reflect-metadata';
import 'express-async-errors';
import './database';
import { router } from './routes/index';
import { errors } from './middlewares/ensureErrors';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use( router );
app.use( errors );

app.listen( 3000 );