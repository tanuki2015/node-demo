const http = require('http');

http.createServer((req, res) => {
  res.end('your are on line');
})
.listen(8080, 'localhost', () => 'server is running');
