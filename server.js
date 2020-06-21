const express = require('express');
const serveStatic = require('serve-static');
const socket = require('socket.io');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use('/', serveStatic(path.join(__dirname, 'client/dist')));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
  });
}

const server = app.listen(port, () =>
  console.log(`Server start on port ${port}`)
);

const io = socket(server);
io.on('connection', (socket) => {
  console.log('Server connnect');

  socket.on('sendMessage', (data) => {
    io.sockets.emit('sendMessage', data);
  });
});
