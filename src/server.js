const express = require('express')
// const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

// conexão com o banco de dados
db.connect()

// habilita server para receber dados via post
app.use(express.urlencoded({ extended: true }))

// definindo as rotas
app.use('/api', routes)

// executando o servidor
const PORT = process.env.PORT || 8080
const HOSTNAME = 'localhost'

app.listen(PORT, HOSTNAME, () =>
  console.log(`Server started on http://${HOSTNAME}:${PORT}`)
)
