module.exports = {
  app: {
    loggingEnabled: true,
  },
  mongo: {
    uri: 'mongodb://localhost:27017/mocha-tutorial',
    debug: true,
    sslEnabled: false,
    connectionOptions: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
