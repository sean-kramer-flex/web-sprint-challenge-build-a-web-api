const express = require('express')
const projects = require('./projects-model')

const router = express.Router()
const { validateProjectId, validateProjectBody } = require('../../middleware/validate')

//get all projects
router.get('/', async (req, res, next) => {
  try {
    const projectsData = await projects.get()
    res.status(200).json(projectsData)
  } catch(err) {
    next(err)
  }

}
)

//get a project by id
router.get('/:id', validateProjectId(), async (req, res, next) => {
  try {
const project = await projects.get(req.params.id)
res.json(project)
  } catch (err) {
    next(err)
  }
})

//add a new project
router.post('/', validateProjectBody(), async(req, res, next) => {
  try {
const project = await projects.insert(req.body)
res.status(201).json(project)
  } catch (err) {
    next(err)
  }
})

//edit a project
router.put('/:id', validateProjectId(), async(req, res, next) => {
try {
const project = await projects.update(req.params.id, req.body)
res.status(201).json(project)
} catch(err) {
  next(err)
}
})



module.exports = router