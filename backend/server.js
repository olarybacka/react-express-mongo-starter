import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import logger from './core/logger/app-logger'
import config from './core/config/config.dev'
import user from './users/users.route'
import connectToDb from './db/connect'

const port = config.serverPort
logger.stream = {
  write: function(message) {
    logger.info(message)
  },
}

connectToDb()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', user)

app.get('/', (req, res) => {
  res.send('Invalid endpoint!')
})

app.listen(port, () => {
  logger.info('server started - ', port)
})
