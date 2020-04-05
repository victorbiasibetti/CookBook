const axios = require('axios')

const api = axios.create({
  base_url: process.env.API_RECIPE != null ? process.env.API_RECIPE : ''
})

module.exports = api;