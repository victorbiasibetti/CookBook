
const apiRecipe = require('../services/recipeApi')
const apiGiphy = require('../services/giphyApi')

class RecipesController {

  async index(req, res){
    const { query } = req;
    let recipes = []
    const keywords = query.i.split(",").sort()

    if(keywords.length > process.env.MAX_INGREDIENTS)
    return res.status(400).send({error: "Utilize no máximo 3 ingredientes"})

    try{
      let recipes_get = await apiRecipe.get(`/?i=${query.i}`)
      recipes_get = recipes_get.data.results
    
  
      for(var i = 0; i < recipes_get.length; i++){
        const giphy = await apiGiphy(
          `${recipes_get[i].title.trim()}&limit=1&offset=0&rating=G&lang=en`
          )
        recipes.push({
          title: recipes_get[i].title.trim(),
          ingredients: recipes_get[i].ingredients.split(", ").sort(),
          link: recipes_get[i].href,
          gif: giphy.data.data[0] != null ? giphy.data.data[0].url : null
        })
      }
  
      return res.status(200).send({keywords, recipes})
    }catch(err){
      return res.status(500).send({error: err})
    }
    
  }
}

module.exports = new RecipesController()