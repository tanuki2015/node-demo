const http = require('http');

http.createServer((req, res) => {
  req.setEncoding('utf8')
  req.on('data', (data) => {
     console.log(JSON.parse(data));
  });
  res.end();
})
.listen(8080, () => console.log('server has start'));
