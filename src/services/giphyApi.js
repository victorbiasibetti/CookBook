const axios = require('axios')

const api = axios.create({
  base_url: process.env.API_GIPHY != null ? process.env.API_GIPHY : ''
})

module.exports = api;