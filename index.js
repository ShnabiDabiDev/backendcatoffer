const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const cors = require('cors');

app.use(express.json());

app.use(cors({
  origin: "backendcatoffer-production.up.railway.app",
  methods: ["GET", "POST"],
  credentials: true
}));

const { Server } = require('socket.io');
const { text } = require('stream/consumers');

const io = new Server(server, {
  cors: {
    origin: "https://frontendcatoffer.pages.dev/",
    methods: ["GET", "POST"],
    credentials: true
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
  res.redirect('https://frontendcatoffer.pages.dev/');
})

io.on('connection', (socket) => {
  socket.on('sendmeasseage', (data) => {
    io.emit('createmeassage', {data})
  })
});