const express = require('express')
const projects = require('./projects-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const projectsData = await projects.get()
    res.status(200).json(projectsData)
  } catch(err) {
    next(err)
  }

}
)


module.exports = router