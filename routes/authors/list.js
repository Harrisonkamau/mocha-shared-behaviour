module.exports = {
  method: 'get',
  path: '/',
  handler: async (ctx) => {
    const { Author } = ctx.models;
    const authors = await Author.find({}).exec();
    const {length: totalCount } = authors;

    ctx.body = authors;
    ctx.set('X-Total-Count', totalCount);
    ctx.status = 200;
  },
};
