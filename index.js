const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const cors = require('cors');

app.use(express.json());

app.use(cors({
  origin: "",
  methods: ["GET", "POST"],
  credentials: true
}));

const { Server } = require('socket.io');

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
})