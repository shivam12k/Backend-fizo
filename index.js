const net = require('net');

const host = '192.168.1.45'; 
const port = 1204; 

const server = net.createServer({ host: host }, (socket) => {
  // New client connection
  console.log('Client connected:', socket.remoteAddress, socket.remotePort);

  socket.on('data', (data) => {
    // Received data from the client
    console.log('Received data:', data.toString());
    socket.emit('msg',(data)=>{
      console.log('Received data:', data.toString());
    })
   
  });

  socket.on('end', () => {
    // Client disconnected
    console.log('Client disconnected');
  });

  socket.on('error', (err) => {
    // Handle errors
    console.error('Socket error:', err);
  });
});

server.on('error', (err) => {
  // Handle server errors
  console.error('Server error:', err);
});

server.listen(port, host, () => {
  // Server is listening
  console.log(`Server listening on ${host}:${port}`);
});
