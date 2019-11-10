const router = require('koa-joi-router');
const { JoiValidationError } = require('../../lib/customErrors');

const { Joi } = router;

module.exports = {
  method: 'post',
  path: '/',
  validate: {
    type: 'json',
    body: {
      name: Joi.string().error(
        new JoiValidationError('Title is a required field'),
      ),
    },
  },
  handler: async (ctx) => {
    const { Author } = ctx.models;
    const { name } = ctx.request.body;

    const authors = await Author.find({ name });
    ctx.assert(authors.length === 0, 403, `Author with name: '${name}' already exists`);

    const newAuthor = await Author.create({ name });
    await newAuthor.save();

    ctx.body = newAuthor;
    ctx.status = 201;
  }
}