const net = require('net');

const server = net.createServer((socket) => {
  socket.write('hello tcp client!');
  socket.on('data', (data) => {
    socket.write(`hi, you data is ${data}`);
  })
  socket.on('end', () => console.log('连接断开'));
  socket.on('err', (err) => console.log(err));
});

server.listen(8124, () => console.log('server is running'));
