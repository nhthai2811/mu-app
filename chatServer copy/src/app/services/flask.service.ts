import axios from 'axios'

const appConfig = require('../../../appConfig.js')
const pythonApiUrl = `${appConfig.pythonApi.host}:${appConfig.pythonApi.port}`

export class FlaskService {
  public async ask(req: any): Promise<any> {
    try {
      const res = await axios.post(
          pythonApiUrl + '/ask', req.body,
          {
            headers: { 'X-Forwarded-For': req.headers['x-forwarded-for'] || req.connection.remoteAddress }
          }
      )

      return res.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  public async clear(req: any): Promise<any> {
    try {
      const res = await axios.get(
          pythonApiUrl + '/clear',
          {
            headers: { 'X-Forwarded-For': req.headers['x-forwarded-for'] || req.connection.remoteAddress }
          }
      )

      return res.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default FlaskService
