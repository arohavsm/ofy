import bodyParser from 'body-parser'
export default globalMiddleWare = (app) => {
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
}