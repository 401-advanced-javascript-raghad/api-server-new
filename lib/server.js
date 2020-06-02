'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const CategoriesRouter = require('../routes/categories');
const ProductsRouter = require('../routes/product');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1',CategoriesRouter);
app.use(ProductsRouter);


const startServer = (PORT) => {
  app.listen(PORT, () => {
    console.log(`RAGHAD server is up and running on port ${PORT}`);
  });
};
module.exports = {
  server: app,
  start: startServer,
};
