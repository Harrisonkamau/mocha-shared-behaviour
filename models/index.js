const mongoose = require('mongoose');
const config = require('config');

const PostSchema = require('./post');
const AuthorSchema = require('./author');

if (config.get('mongo.debug')) {
  mongoose.set('debug', true);
}

module.exports = {
  models: {
    Author: mongoose.model('Author', AuthorSchema),
    Post: mongoose.model('Post', PostSchema),
  },
};
