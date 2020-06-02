'use strict';

const express = require('express');
const router = express.Router();
const notFoundHandler = require('../lib/middleware/404');
const serverErrorHandler = require('../lib/middleware/500');

const products = require('../lib/models/products/products.schema');

router.post('/products', postProduct);
router.get('/products', getProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

function postProduct(req, res, next){ 
  products.post(req.body)
    .then(data =>{
      res.status(201).json(data);
    }).catch(next);
}
  
function getProduct(req, res, next){ 
  products.get()
    .then(data =>{
      res.status(200).json(data);
    }).catch(next);
}
  
function updateProduct(req, res, next){ 
  products.update(req.params.id,req.body)
    .then(data =>{
      res.status(200).json(data);
    }).catch(next);
}
  
function deleteProduct(req, res, next){ 
  products.delete(req.params.id)
    .then(data =>{
      res.status(200).json(data);
    }).catch(next);
}
router.get('/bad', (req, res)=> {
  res.status(500).json({});
});
  
router.use('*', notFoundHandler);
router.use(serverErrorHandler);

module.exports = router;
