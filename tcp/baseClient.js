const net = require('net');

const client = net.connect({ port: 8124 }, () => {
  console.log('client connected');
  // client.write('我是客户端!');
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

client.on('end', () => {
  console.log('client disconnected');
});

client.on('err', () => console.log(err));
