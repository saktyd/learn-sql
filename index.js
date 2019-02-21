require('dotenv').config()

const express = require('express')
const sqlite = require('sqlite')

const app = express()
const port = process.env.PORT || 8000
const dbPromise = sqlite.open(process.env.DB_PATH, { Promise })

app.get('/users', async (req, res) => {
  const db = await dbPromise
  const user = await db.all(`SELECT * FROM users`)

  if (user) {
    res.send({
      message: 'Get one user',
      user: user
    })
  } else {
    res.send({
      message: 'Failed to get one user'
    })
  }
})

app.listen(port, () => {
  console.log(`Express app is listening on localhost:${port}`)
})
