const express = require('express')
const actions = require('./actions-model')
const router = express.Router()


//get all actions
router.get('/', async(req, res, next) => {
  try {
const actionData = await actions.get()
res.json(actionData)
  } catch(err) {
    next(err)
  }
})

//get action by id
router.get('/:id', async(req, res, next) => {
  try {
const action = await actions.get(req.params.id)
res.json(action)
  } catch(err) {
    next(err)
  }
})


module.exports = router
