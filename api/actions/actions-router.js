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

//add an action
router.post('/', async(req, res, next) => {
  try {
    const action = await actions.insert(req.body)
    res.status(201).json(action)
  } catch(err) {
    next(err)
  }
})

//edit an action
router.put('/:id', async(req, res, next) => {
  try {
    const action = await actions.update(req.params.id, req.body)
    res.status(201).json(action)
  } catch(err) {
    next(err)
  }
})

//delete an action
router.delete('/:id', async(req, res, next) => {
  try {
    actions.remove(req.params.id)
    res.status(200).json({
      message: `action ${req.params.id} deleted`,
    })
  } catch(err) {
    next(err)
  }
})


module.exports = router
