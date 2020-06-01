'use strict';

const express = require('express');

const notFoundHandler = require('./middleware/404');
const timestamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const serverErrorHandler = require('./middleware/500');


const app = express();

app.use(express.json());
app.use(timestamp);
app.use(logger);

let db = [];
let categArr = [];

const startServer = (PORT) => {
  app.listen(PORT, () => {
    console.log(`RAGHAD server is up and running on port ${PORT}`);
  });
};

app.post('/products', (req, res) => {
  let { category, name, display_name, description } = req.body;
  let newProducts = { category, name, display_name, description };
  newProducts.id = db.length + 1;
  db.push(newProducts);
  res.status(200);
  res.json(newProducts);
});

app.get('/products', (req, res) => {
  let count = db.length;
  let result = db;
  res.json({ count, result });
});

app.put('/products/:id', (req, res) => {
  let { category, name, display_name, description } = req.body;
  let newRecord = { category, name, display_name, description };
  let id = req.params.id;
  db.forEach((val, index)=>{
    if(val.id == id){
      newRecord.id = id;
      db[index] = newRecord;
    }else{
      db[index] = val;
    }
  });
  res.json(newRecord);
});

app.delete('/products/:id', (req, res) => {
  let id = req.params.id;
  db = db.filter((val) => {
    if (val.id === parseInt(id)) return false;
    else return true;
  });
  res.json({});
});

// Categories Routes
app.post('/Categories', (req, res) => { 
  let { name, display_name, description } = req.body;
  let newCategory = { name, display_name, description };
  newCategory.id = categArr.length + 1;
  categArr.push(newCategory);
  res.status(200);
  res.json(newCategory);
});

app.get('/Categories', (req, res) => {
  let count = categArr.length;
  let result = categArr;
  res.json({ count, result });
});

app.put('/Categories/:id', (req, res) => { 
  let { name, display_name, description } = req.body;
  let newRecord = { name, display_name, description };
  let id = req.params.id;
  categArr.forEach((val, index)=>{
    if(val.id == id){
      newRecord.id = id;
      categArr[index] = newRecord;
    }else{
      categArr[index] = val;
    }
  });
  res.json(newRecord);
});

app.delete('/Categories/:id', (req, res) => {
  let id = req.params.id;
  categArr = categArr.filter((val) => {
    if (val.id === parseInt(id)) return false;
    else return true;
  });
  res.json({});
});

app.get('/bad', (req, res)=> {
  res.status(500).json({});
});

app.use('*', notFoundHandler);
app.use(serverErrorHandler);

module.exports = {
  server: app,
  start: startServer,
};
