const createPuppeteerPool = require('./tool');
const config = require('./config');

const pool = createPuppeteerPool({
    puppeteerArgs: {
      args: config.browserArgs
    }
  })
  module.exports = pool 