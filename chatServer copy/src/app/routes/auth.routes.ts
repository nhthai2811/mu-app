import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'

import { AuthService } from '../services/auth.service'

const app = express()
const appConfig = require('../../../appConfig')
app.use(cors())

const router = express.Router()
const authService = new AuthService()

router.post('/login', (req, res, next) => {
  const { username, password } = req.body
  authService.authenticate(req, username, password, (err: any, user: any, info: any) => {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.status(401).json({ message: info.message })
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err)
      }

      const token = jwt.sign({ username: user.username }, appConfig.secretKey)
      return res.json({ token })
    })
  })
})

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err)
    }
    res.json({ message: 'Logged out successfully.' })
  })
})

export default router
