const http = require('http');
const queryString = require('querystring');

http.createServer((req, res) => {
  const contentType = req.headers['content-type'];
  req.setEncoding('utf8');
  // 仅小数据可行，太大要做累加操作
  let result;
  req.on('data', (data) => {
    result = queryString.parse(data)
    console.log(result);
  });
  res.on('end', () => console.log(queryString.stringify(result)))
})
.listen(8080, () => console.log('server has start'));
