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

//delete a project
router.delete('/:id', validateProjectId(), async(req, res, next) => {
  try {
await projects.remove(req.params.id)
res.json({
  message: "project successfully deleted"
})
  } catch(err) {
    next(err)
  }
})


//- [ ] Inside `api/projects/projects-router.js` add an endpoint for retrieving the list of actions for a project:
// - `[GET] /api/projects/:id/actions` sends an array of actions (or an empty array) as the body of the response.
router.get('/:id/actions', validateProjectId(), async(req, res, next) => {
  try {
const actions = await projects.getProjectActions(req.params.id)
res.json(actions)
  } catch(err) {
    next(err)
  }
})


module.exports = router