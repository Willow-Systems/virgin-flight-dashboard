var http = require('http'),
httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({
  secure: false
});

proxy.on('proxyReq', function(proxyReq, req, res, options) {
  console.log("-> " + proxyReq.path);
  proxyReq.setHeader('Connection', 'keep-alive');
  proxyReq.setHeader('Pragma', 'no-cache');
  proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/70.0.3538.77 Chrome/70.0.3538.77 Safari/537.36');
  proxyReq.setHeader('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8')
  proxyReq.setHeader('Host', 'services.inflightpanasonic.aero');
});

proxy.on('proxyRes', function(proxyRes, req, res) {
  console.log("<- " + proxyRes);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', "GET,POST,PUT,DELETE,HEAD");
});

var server = http.createServer(function(req, res) {
  // You can define here your custom logic to handle the request
  // and then proxy the request.
  proxy.web(req, res, {
    target: "http://services.inflightpanasonic.aero"
  });
});

console.log("listening on port 3001")
server.listen(3001);
