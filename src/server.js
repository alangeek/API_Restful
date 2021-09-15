const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

// conexão com o banco de dados
db.connect()

const allowedOrigins = ['http://127.0.0.1:5500', 'https:alanchristian.co']

// habilita CORS
app.use(
  cors({
    origin: function (origin, callback) {
      let allowed = true

      // mobile app
      if (!origin) allowed = true

      if (!allowedOrigins.includes(origin)) allowed = false

      callback(null, allowed)
    }
  })
)

// habilita server para receber dados json
app.use(express.json())

// definindo as rotas
app.use('/api', routes)

// executando o servidor
const PORT = process.env.PORT || 8080
const HOSTNAME = 'localhost'

app.listen(PORT, HOSTNAME, () =>
  console.log(`Server started on http://${HOSTNAME}:${PORT}`)
)
