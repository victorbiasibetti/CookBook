const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')

const app = express();



app.use(cors())
app.use(routes)



app.listen(3333)

