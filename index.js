'use strict';

const mongoose = require('mongoose');

const app = require('./lib/server');
const PORT = process.env.PORT || 3000;

const MONGODB_URI = 'mongodb://localhost:27017/categories-db';


const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(MONGODB_URI, mongooseOptions);
app.start(PORT);
