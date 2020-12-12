const pgp = require('pg-promise')()
const redis = require('redis').createClient({
  host: '3.17.63.110',
  port: 6379
})
const { promisify } = require('util')

const config = {
  host: process.env.DB_HOST,
  // host: 'localhost',
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  // max: 1000000,
  user: process.env.DB_USERNAME,
  // password: process.env.DB_PASSWORD
}

// console.log(config)
module.exports = {
  db: pgp(config),
  schema: new pgp.helpers.ColumnSet(['id', 'images', 'productName'], { table: 'products' }),
  pgp,
  // redis,
  redisGet: promisify(redis.get).bind(redis),
  redisSet: promisify(redis.set).bind(redis)
}