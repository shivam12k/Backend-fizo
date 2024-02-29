const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));
// Socket.io server setup
io.on('connection', (socket) => {
  console.log('Client connected:', socket.handshake.address);

  socket.on('dataFromClient', (data) => {
    console.log('Received data from client:', data);
    // Handle data from the client
    // You can emit data back to the client using socket.emit or io.emit
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start the server
server.listen(1204, () => {
  console.log('Socket.io server listening on port 5399');
});
