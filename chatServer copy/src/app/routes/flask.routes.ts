import express from 'express'
import cors from 'cors'
import FlaskService from '../services/flask.service'

const app = express()
app.use(cors())

const router = express.Router()
const flaskService = new FlaskService()

router.post('/ask', (req, res, next) => {
  flaskService
    .ask(req)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
})

router.get('/clear', (req, res, next) => {
  flaskService
    .clear(req)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
})

app.use((req, res) => {
  res.status(404)
  res.render('error', {
    param: {
      status: 404,
      message: 'not found',
    },
  })
})

export default router
