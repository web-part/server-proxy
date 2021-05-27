
const { createProxyMiddleware, } = require('http-proxy-middleware');

module.exports = {
    
    use(app, path$rule) {

        Object.keys(path$rule).forEach((path) => {
            let rule = path$rule[path];
            let proxy = createProxyMiddleware(rule);

            app.use(path, proxy);

        });
    },
};