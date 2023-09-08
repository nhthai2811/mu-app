import express from 'express'
import cors from 'cors'

import flaskRouter from './flask.routes'
import authRouter from './auth.routes'

const app = express()
app.use(cors())

const router = express.Router()

const isAuth = (req: any, res: any, next: any) => { // Currently not in use.
  if (req.isAuthenticated()) {
    return next()
  }
  res.status(401).json({ message: 'Invalid authentication request' })
}

router.use('/auth', authRouter)
router.use('/', flaskRouter)

export default router