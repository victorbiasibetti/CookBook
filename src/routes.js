const Router = require('express/lib/router')

const routes = new Router()


routes.get('/', (req,res) => {
  return res.status(200).send({msg: 'hello world'})
})

module.exports = routes;