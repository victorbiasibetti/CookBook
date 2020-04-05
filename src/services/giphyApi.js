require('dotenv/config')
const axios = require('axios').default

const api = axios.create({
  baseURL: process.env.API_GIPHY
})

module.exports = api;