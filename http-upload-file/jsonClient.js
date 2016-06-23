const http = require('http');

const option = {
  host: "localhost",
  port: 8080,
  headers: {
    'content-Type': 'appliction/json'
  },
  path: '/',
  method: 'post',
}

const client = http.request(option, (res) => {

});

client.write(JSON.stringify({ name:'nicolas', age:18 }));
client.end();
