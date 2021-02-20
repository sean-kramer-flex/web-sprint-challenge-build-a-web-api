const projects = require('../api/projects/projects-model')

function validateProjectId() {
  return (req, res, next) => {
    projects.get(req.params.id)
    .then((project) => {
      if (project) {
        req.project = project
        next()
      } else {
        res.status(404).json({
          message: "No project exists with this id"
        })
      }
    })
  }
}

function validateProjectBody() {
  return (req, res, next) => {
    if (!req.body.name || ! req.body.description) {
      return res.status(400).json({
        message: "Name and description fields are both required"
      })
    }
    next()
  }
}

module.exports = {
  validateProjectId,
  validateProjectBody,
}