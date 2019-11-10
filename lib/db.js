const config = require('config');
const mongoose = require('mongoose');

const connectionOptions = config.get('mongo.connectionOptions');
const uri = config.get('mongo.uri');

// use Native Promise library
mongoose.Promise = global.Promise;

const awaitConnection = async () => mongoose.connect(uri, connectionOptions);

module.exports = { awaitConnection };
