const apiRecipe = require('../services/recipeApi');
const apiGiphy = require('../services/giphyApi');

class RecipesController {
  async index(req, res) {
    const { query } = req;
    const recipes = [];
    const keywords = query.i.split(',').sort();

    if (keywords.length > process.env.MAX_INGREDIENTS) {
      return res
        .status(400)
        .send({ error: 'Utilize no máximo 3 ingredientes' });
    }

    try {
      let recipesGet = await apiRecipe.get(`/?i=${query.i}`);
      recipesGet = recipesGet.data.results;

      for (let i = 0; i < recipesGet.length; i++) {
        const giphy = await apiGiphy(
          `${recipesGet[i].title.trim()}&limit=1&offset=0&rating=G&lang=en`
        );
        recipes.push({
          title: recipesGet[i].title.trim(),
          ingredients: recipesGet[i].ingredients.split(', ').sort(),
          link: recipesGet[i].href,
          gif: giphy.data.data[0] != null ? giphy.data.data[0].url : null,
        });
      }

      return res.status(200).send({ keywords, recipes });
    } catch (err) {
      return res.status(500).send({ error: err });
    }
  }
}

module.exports = new RecipesController();
