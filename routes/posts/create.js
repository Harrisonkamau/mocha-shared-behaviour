const router = require('koa-joi-router');
const { JoiValidationError } = require('../../lib/customErrors');

const { Joi } = router;

module.exports = {
  method: 'post',
  path: '/',
  validate: {
    type: 'json',
    body: {
      title: Joi.string().error(
        new JoiValidationError('Title is a required field')
      ),
      description: Joi.string().error(
        new JoiValidationError('Description is a required string')
      ),
    },
  },
  handler: async (ctx) => {
    const { Post } = ctx.models;
    const { title, description } = ctx.request.body;

    const posts = await Post.find({ title });
    ctx.assert(posts.length === 0, 403, `Post with title: '${title}' already exists`);

    const newPost = await Post.create({ title, description });
    await newPost.save();

    ctx.body = newPost;
    ctx.status = 201;
  }
}