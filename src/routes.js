const Router = require('express/lib/router')
const RecipesController = require('./controllers/RecipesController')
const routes = new Router()


routes.get('/recipes', RecipesController.index)

module.exports = routes;