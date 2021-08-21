const express = require('express')
const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended : false} ))

//Routes
app.use(require('./routes/index'))

port = 4000
app.listen(port)
console.log('El servidor está en el puerto ' + 'http://localhost:'+port)