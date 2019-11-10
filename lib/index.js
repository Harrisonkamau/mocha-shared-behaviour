const { logger } = require('loggery');
const createApp = require('./createApp');

const { PORT } = process.env || 3000;

async function main() {
  try {
    const app = await createApp();
    app.listen(PORT);
    logger().info(`Server running on: http://localhost:${PORT}`);
  } catch (error) {
    logger().error(error);
    process.exit(1);
  }
}

module.exports = main();
