const config = require('config');

module.exports = (app) => {
    // verify the database connection string
        if (!config.get('db')) {
            throw new Error('FATAL ERROR: db is not defined: no database was provided');
        }
};
