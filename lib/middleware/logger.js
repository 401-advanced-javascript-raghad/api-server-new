'use strict';

const logger = (req, res, next) => {
  console.log('Request', req.method, req.path, 'at', req.time);
  next();
};

module.exports = logger;