'use strict';
// const cat = require('../lib/models/categories/categories-collection');
// const products = require('../lib/models/products/products-collection');


function getModel(req, res, next) {
  let model = req.params.model;
  const mod = require(`../models/${model}/${model}`);
  switch(model) {
  case 'categories':
  case 'products':
    req.model = mod;
    next();
    return;
  default:
    next('Invalid Model');
    return;
  }
}
module.exports = getModel;