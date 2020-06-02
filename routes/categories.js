'use strict';

const express = require('express');
const router = express.Router();
const notFoundHandler = require('../lib/middleware/404');
const serverErrorHandler = require('../lib/middleware/500');

const cat = require('../lib/models/categories/categories.collection');

router.post('/categories', postCateg);
router.get('/categories', getCateg);
router.put('/categories/:id', updateCateg);
router.delete('/categories/:id', deleteCateg);

function postCateg(req, res, next){ 
  cat.create(req.body)
    .then(data =>{
      res.status(201).json(data);
    }).catch(next);
}
  
function getCateg(req, res, next){ 
  cat.get()
    .then(data =>{
      res.status(200).json(data);
    }).catch(next);
}
  
function updateCateg(req, res, next){ 
  cat.update(req.params.id,req.body)
    .then(data =>{
      res.status(201).json(data);
    }).catch(next);
}
  
function deleteCateg(req, res, next){ 
  cat.delete(req.params.id)
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
