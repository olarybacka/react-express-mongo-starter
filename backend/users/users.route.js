import express from 'express'
import usersController from './users.controller'
const router = express.Router()

router.get('/user', (req, res) => {
  usersController.getAll(req, res)
})

router.post('/user', (req, res) => {
  usersController.addUser(req, res)
})

router.delete('/user', (req, res) => {
  usersController.deleteUser(req, res)
})

export default router
