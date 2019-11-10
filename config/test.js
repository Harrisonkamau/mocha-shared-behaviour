module.exports = {
  app: {
    loggingEnabled: false,
  },
  mongo: {
    uri: 'mongodb://localhost:27017/mocha-tutorial-test',
    debug: true,
    sslEnabled: false,
    connectionOptions: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
