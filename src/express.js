import express from 'express';
import addressController from './controllers/address-controller.js';
import database from './database/sqlite-db.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
addressController(app, database);

export default app;
