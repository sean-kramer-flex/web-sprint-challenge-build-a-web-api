const express = require('express');
const server = express();
const logger = require('../middleware/logger')
const projectsRouter = require('./projects/projects-router')
const actionsRouter = require('./actions/actions-router')


server.use(express.json())
server.use(logger)

server.get('/welcome', (req, res) => {
  res.send('<h2>Welcome! Server is working!</h2>')
})

server.use('/projects', projectsRouter)
server.use('/actions', actionsRouter)

module.exports = server;
