const { html } = require('common-tags');
const { name, version } = require('../package');

module.exports = {
  method: 'get',
  path: '/',
  handler: async (ctx) => {
    const welcomeMessage = 'Welcome to Mocha Shared Behaviour Tutorial :)';
    const apiMessage = 'All API routes are prefixed with "/api/"';
    const status = `
    Name: ${name} <br>
    Latest Version: ${version}
    `

    const messages = html`
    <div style='text-align:center; margin-top: 40px'>
    <h3>${welcomeMessage}</h3>
    <hr style='border:2px solid green; width: 40%'>
    <small>${apiMessage} </small>
    <br>
    <i>${status}</i>
    </div>
    `;

    ctx.body = messages;
    ctx.status = 200;
  },
};
