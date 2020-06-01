'use strict';

const serverErrorHandler = (err, req, res, next) => {
    res.status(500);
    res.end();
};

module.exports = serverErrorHandler;