require('dotenv').config()

const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'yourusername',
    password: process.env.DB_PASSWORD || 'yourpassword',
    database: process.env.DB_DATABASE || 'yourdatabasename'
  }
})

// WAY 1
const getUsers = async () => {
  const rows = await knex.select().from('users')
  console.log(rows)
}
getUsers()

// WAY 2
knex('users').then(rows => {
  console.log(rows)
})
