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

module.exports = {
  validateProjectId,
}