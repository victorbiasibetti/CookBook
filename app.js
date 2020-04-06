const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')
require('dotenv/config')
const app = express();


app.use(cors())
app.use(routes)

module.exports = app;
