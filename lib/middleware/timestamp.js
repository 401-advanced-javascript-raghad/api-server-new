'use strict';

const requestTime = (req, res, next) => {
  let d = new Date();
  req.requestTime = d.toLocaleDateString();
  next();
};

module.exports = requestTime;