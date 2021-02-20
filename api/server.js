const express = require('express');
const server = express();

server.get('/welcome', (req, res) => {
  res.send('<h2>Welcome! Server is working!</h2>')
})

module.exports = server;
