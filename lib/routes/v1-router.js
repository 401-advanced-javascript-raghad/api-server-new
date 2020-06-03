'use strict';

const express = require('express');
const router = express.Router();
const notFoundHandler = require('../middleware/404');
const serverErrorHandler = require('../middleware/500');
const getModel = require('../middleware/getModel');

router.param('model',getModel);

router.post('/:model', handlePostAll);
router.get('/:model', handleGetAll);
router.get('/:model/:id', handleGetOne);
router.put('/:model/:id', updateModel);
router.delete('/:model/:id', deleteModel);


function handlePostAll(req, res, next){ 
  req.model.create(req.body)
    .then(data =>{
      res.status(201).json(data);
    }).catch(next);
}
  
function handleGetAll(req, res, next){ 
  req.model.get()
    .then(data =>{
      res.status(200).json(data);
    }).catch(next);
}

function handleGetOne(req, res, next){ 
  req.model.get(req.params.id)
    .then(data =>{
      res.status(200).json(data);
    }).catch(next);
}
  
function updateModel(req, res, next){ 
  req.model.update(req.params.id,req.body)
    .then(data =>{
      res.status(201).json(data);
    }).catch(next);
}
  
function deleteModel(req, res, next){ 
  req.model.delete(req.params.id)
    .then(data =>{
      res.status(200).json(data);
    }).catch(next);
}
router.use('*', notFoundHandler);
router.use(serverErrorHandler);

module.exports = router;
