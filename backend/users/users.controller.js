import User from './users.model'
import logger from '../core/logger/app-logger'

const controller = {}

controller.getAll = async (req, res) => {
  try {
    const users = await User.find()
    logger.info('sending all users...')
    res.send(users)
  } catch (err) {
    logger.error('Error in getting users- ' + err)
    res.send('Got error in getAll')
  }
}

controller.addUser = async (req, res) => {
  const user = new User(req.body)
  try {
    logger.info('Adding user...')
    user.save(async () => {
      res.send('added: ' + user)
      logger.info('OK')
    })
  } catch (err) {
    logger.error('Error in getting users- ' + err)
    res.send('Got error in getAll')
  }
}

controller.deleteUser = async (req, res) => {
  let user = req.body
  try {
    const removedUser = await User.remove(user)
    logger.info('Deleted User- ' + removedUser)
    res.send('User successfully deleted')
  } catch (err) {
    logger.error('Failed to delete user- ' + err)
    res.send('Delete failed..!')
  }
}

export default controller
