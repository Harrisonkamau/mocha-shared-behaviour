const mongoose = require('mongoose');
const PostSchema = require('./post');

const { Schema } = mongoose;

const AuthorSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  posts: {
    type: [PostSchema],
  },
});

module.exports = AuthorSchema;
