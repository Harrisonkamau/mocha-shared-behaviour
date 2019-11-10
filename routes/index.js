const router = require('koa-joi-router');
const postRoutes = require('./posts');
const authorRoutes = require('./authors');
const homeRoute = require('./home');

const API_BASE_ROUTE = '/api';

const homeRouter = router();
homeRouter.prefix('');
homeRouter.route(homeRoute);

const postRouter = router();
postRouter.prefix(`${API_BASE_ROUTE}/posts`);
postRouter.route(postRoutes);

const authorRouter = router();
authorRouter.prefix(`${API_BASE_ROUTE}/authors`);
authorRouter.route(authorRoutes);

module.exports = {
  authorRouter,
  homeRouter,
  postRouter,
};
