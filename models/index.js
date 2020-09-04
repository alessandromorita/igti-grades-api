import mongoose from 'mongoose';
import gradesModel from './gradesModel.js';
const db = {};

import dotenv from 'dotenv';

dotenv.config();

db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.port = process.env.PORT;
db.cors = process.env.CORS_HOST;
db.grades = gradesModel(mongoose);

export { db };
