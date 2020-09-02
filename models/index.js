import mongoose from 'mongoose';
import gradesModel from './gradesModel.js';
const db = {};

import dotenv from 'dotenv';

dotenv.config();

db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.grades = gradesModel(mongoose);

export { db };
