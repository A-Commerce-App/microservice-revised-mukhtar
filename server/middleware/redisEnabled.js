const { redisGet } = require('../database/connection.js')

module.exports = async (req, res, next) => {
  const item = req.params.id;


  if (!process.argv.includes('cache')) {
    next()
  } else {
    return res.send(await redisGet(item))
  }
}