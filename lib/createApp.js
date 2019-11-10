// NPM Modules
const config = require('config');
const Koa = require('koa');
const koaQS = require('koa-qs');
const koaLogger = require('koa-logger');
const bodyParser = require('koa-body-parser');
const { logger } = require('loggery');
const {
  ValidationError: MongooseValidationError,
} = require('mongoose/lib/error');

// App modules
const db = require('./db');
const { models } = require('../models');
const {
  homeRouter,
  authorRouter,
  postRouter,
} = require('../routes');
const { NotFoundError } = require('./customErrors');

const loggingEnabled = config.get('app.loggingEnabled');

async function createApp() {
  try {
    const app = new Koa();

    // QueryString middleware
    koaQS(app);

    app.use(bodyParser());

    // error middleware
    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (error) {
        if (error instanceof NotFoundError) {
          ctx.throw(404, error.message);
        }

        if (error instanceof MongooseValidationError) {
          error.status = 400;
          ctx.throw(400, error.message);
        }

        ctx.status = error.status || 500 // default to server error

        if(ctx.status === 500) {
          logger().error(error);
          ctx.body = '';
        } else {
          const message = error.body;
          ctx.body = {
            message,
            status: ctx.status,
          };
        }
      }
    });

    // log requests & responses to the console
    if (loggingEnabled) {
      app.use(koaLogger());
    }

    // pass models to the context to make importing them easier
    app.use(async (ctx, next) => {
      ctx.models = models;

      await next();
    });

    // home route
    app.use(homeRouter.middleware());

    // You can have these as protected routes i.e. require user login or something
    app.use(postRouter.middleware());
    app.use(authorRouter.middleware());

    return app;
    // author routes
  } catch (error) {
    logger().error(error);
    process.exit(1);
  }
}

module.exports = createApp;
