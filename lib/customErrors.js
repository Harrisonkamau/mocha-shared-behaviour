class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
  }
}

class JoiValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'JoiValidationError';
  }
}

module.exports = {
  NotFoundError,
  JoiValidationError,
};
