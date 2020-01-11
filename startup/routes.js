const error = require('../middleware/error');
const express = require('express');
const logging = require('../middleware/req-log');

// routes imports goes here
// const client  = require('../routes/clients');
// const authentication  = require('../routes/authentication');
// const document  = require('../routes/document');
const sysnonymesAttributes  = require('../routes/sysnonymes-attributes');


module.exports = (app) => {

// Authorization checking
    app.use(express.json()) ;
    // app.use(authorization);
// logging middleware
    app.use(logging);
// routes middleware stack goes here
    app.use('/sysnonymes-attribute', sysnonymesAttributes);

// handling global error
    app.use(error);
};
