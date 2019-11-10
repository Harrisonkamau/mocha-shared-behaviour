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
    ctx.body = 'hello world';
  }
}