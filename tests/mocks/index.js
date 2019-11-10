const faker = require('faker');

const authorsForCreation = () => [
  {
    name: faker.internet.userName(),
  },
  {
    name: faker.internet.userName(),
  },
  {
    name: faker.internet.userName(),
  },
];

const postsForCreation = () => [
  {
    title: faker.lorem.text(),
    description: faker.lorem.sentence(),
  },
  {
    title: faker.lorem.text(),
    description: faker.lorem.sentence(),
  },
  {
    title: faker.lorem.text(),
    description: faker.lorem.sentence(),
  },
]

module.exports = {
  authorsForCreation,
  postsForCreation,
};
