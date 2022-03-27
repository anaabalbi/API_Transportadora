import express from 'express';
import addressController from './controllers/address-controller.js';
import database from './database/sqlite-db.js';

const app = express();

app.use(express.json());

addressController(app, database);

export default app;
