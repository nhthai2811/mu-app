import passport from 'passport'
import { Request } from 'express'
import { Strategy as LocalStrategy } from 'passport-local'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

passport.serializeUser((user: any, done: any) => {
  done(null, user.id)
})

passport.deserializeUser(async (id: any, done: any) => {
  try {
    const user = prisma.user.findUnique(id)
    done(null, user)
  } catch (error) {
    done(error)
  }
})

export class AuthService {
  public async authenticate(req: Request, username: string, password: string, done: any): Promise<void> {
    try {
      passport.use(
        new LocalStrategy(async (username: string, password: string, done: any) => {
          try {
            const user = await prisma.user.findUnique({
              where: {
                username,
              },
            })

            if (!user) {
              return done(null, false, { message: 'Account does not exist'})
            }

            const passwordMatch = await bcrypt.compare(password, user.password)
            if (!passwordMatch) {
              return done(null, false, { message: 'Password does not correct' })
            }
            return done(null, user)
          } catch (error) {
            return done(error)
          }
        })
      )

      passport.authenticate('local', (err: any, user: any, info: any) => {
        if (err) {
          return done(err)
        }
        if (!user) {
          return done(null, false, { message: info.message })
        }
        return done(null, user)
      })(req, null, done)
    } catch (error) {
      return done(error)
    }
  }
}
