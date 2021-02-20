const express = require('express');
const server = express();
const logger = require('../middleware/logger')
const projectsRouter = require('./projects/projects-router')


server.use(express.json())
server.use(logger)

server.get('/welcome', (req, res) => {
  res.send('<h2>Welcome! Server is working!</h2>')
})

server.use('/projects', projectsRouter)

module.exports = server;
