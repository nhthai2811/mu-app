// ライブラリ読み込み
import express from 'express'
import expressListEndpoints from 'express-list-endpoints'
import cors from 'cors'
import passport from 'passport'
import session from 'express-session'

import router from './routes/'

const appConfig = require('../../appConfig.js')

const app = express()
app.use(cors())
const bodyParser = require('body-parser')

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || appConfig.serverPort // port番号を指定

app.use(
  session({
    secret: appConfig.secretKey,
    resave: false,
    saveUninitialized: false,
  })
)

app.use(passport.initialize())
app.use(passport.session())

// ------ ルーティング ------ //
app.use('/api', router)

//サーバ起動
app.listen(port)
console.log(expressListEndpoints(app))
console.log('listen on port ' + port)
