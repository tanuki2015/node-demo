const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});

server.listen(2048, '127.0.0.1', () => console.log('server is running...'));
