module.exports = {
  method: 'get',
  path: '/',
  handler: async (ctx) => {
    const { Post } = ctx.models;
    const posts = await Post.find({}).exec();
    const {length: totalCount } = posts;

    ctx.body = posts;
    ctx.set('X-Total-Count', totalCount);
    ctx.status = 200;
  },
};
