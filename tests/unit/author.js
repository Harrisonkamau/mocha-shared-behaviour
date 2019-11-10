const { expect } = require('../setup');
const { authorsForCreation } = require('../mocks');
const { models: { Author } } = require('../../models');

describe('Author', () => {
  it('cannot save without a name', async() => {
    const [newAuthor] = authorsForCreation();
    const author = new Author(newAuthor);
    author.name = '';

    expect(author.save).to.throw();
  });

  it('can save without a list of authors', async() => {
    const [newAuthor] = authorsForCreation();
    const author = new Author(newAuthor);

    expect(author.save).to.not.throw;
  });
});
