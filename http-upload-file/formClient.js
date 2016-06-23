const http = require('http');
const queryString = require('querystring');

const option = {
  host: "localhost",
  port: 8080,
  headers: {
    'content-Type': 'application/x-www-form-urlencoded'
  },
  path: '/',
  method: 'post',
}

const client = http.request(option, (res) => {

});

client.write(queryString.stringify({ name:'nicolas', age:18 }));
client.end();
