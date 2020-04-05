const axios = require('axios')

const api = axios.create({
  base_url: 'http://www.recipepuppy.com/api'
})

module.exports = api;