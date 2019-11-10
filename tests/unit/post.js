const { expect } = require('../setup');
const { postsForCreation } = require('../mocks');
const { models: { Post } } = require('../../models');

describe('Post', () => {
  it('cannot save without a title', async() => {
    const [newPost] = postsForCreation();
    const post = new Post(newPost);
    post.title = '';

    expect(post.save).to.throw();
  });

  it('cannot save without a description', async() => {
    const [newPost] = postsForCreation();
    const post = new Post(newPost);
    post.description = '';

    expect(post.save).to.throw();
  });
});
