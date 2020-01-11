// import express
const express = require('express')
    , http = require('http');
const app = express();
// create a http server instance
const server = http.createServer(app);
// import cors
const cors = require('cors');
app.use(cors());
// require configuration file
require('./startup/config')(app);
// import the logger and the FN to convert global rejection to exception
const { handleRejection, logger } = require('./startup/logging');
handleRejection();
// require route file
require('./startup/routes')(app);
// require database configuration file
require('./startup/db')();
// run the server
const port = process.env.PORT || 3000;
const serv = server.listen(port, () => logger.info(`Listening on port ${port}...`));

module.exports = serv;
