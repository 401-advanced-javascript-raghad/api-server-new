'use strict';
require('dotenv').config();
const mongoose = require('mongoose');

const app = require('./lib/server');
const PORT = process.env.PORT || 3000;

const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(process.env.MONGODB_URI, mongooseOptions);
app.start(PORT);
