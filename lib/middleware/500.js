'use strict';

const serverErrorHandler = (err, req, res, next) => {
  res.status(500);
  res.json({error: err});
};

module.exports = serverErrorHandler;