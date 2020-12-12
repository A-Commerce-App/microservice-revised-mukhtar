const pgp = require('pg-promise')()
// const redis = require('redis').createClient({
//   host: '3.16.165.163',
//   port: 6379
// })
const { promisify } = require('util')

const config = {
  host: '172.31.7.26',
  // host: 'localhost',
  port: 5432,
  database: 'sdc_carousel',
  // max: 1000000,
  user: 'postgres',
  // password: process.env.DB_PASSWORD
}

// console.log(config)
module.exports = {
  db: pgp(config),
  schema: new pgp.helpers.ColumnSet(['id', 'images', 'productName'], { table: 'products' }),
  pgp,
  // redis,
  // redisGet: promisify(redis.get).bind(redis),
  // redisSet: promisify(redis.set).bind(redis)
}