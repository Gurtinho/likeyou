import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import 'express-async-errors';
import './database';
import { router } from './routes/index';
import { errors } from './middlewares/ensureErrors';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use( router );
app.use( errors );

app.listen( 3000 );