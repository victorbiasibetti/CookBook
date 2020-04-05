

class RecipesController {

  async index(req, res){
    const query = req.query;
    const keywords = query.i.split(",")

    return res.status(200).send({keywords})

  }
}

module.exports = new RecipesController()