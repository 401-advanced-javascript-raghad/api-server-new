'use strict';

const notFoundHandler = (req, res, next) => {
    res.status(404);
    res.end();
};

module.exports = notFoundHandler;