import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const app = express();
const httpServer = http.Server(app);
const io = socketio(httpServer);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

httpServer.listen(port, () => {
  console.log(`Chat Redes 2 is running at *:  ${port}`);
});