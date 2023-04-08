const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://tiki-taka-server.onrender.com",
      changeOrigin: true,
    })
  );
};
