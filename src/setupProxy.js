const path = require('path');
const apiMocker = require('mocker-api');

function setupProxy(app) {
  console.error(app);
  apiMocker(app, path.resolve('./mocker/index.js'), {
    proxy: {
      '/repos/*': 'https://api.github.com/',
    },
    changeHost: true,
  })
};

module.exports = setupProxy;