const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/1.0',
    proxy({
      target: 'https://api.itbook.store',
      changeOrigin: true,
    })
  );
};
