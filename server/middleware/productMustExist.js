const {Product} = require('../database/index')

module.exports = async (req, res, next) => {
  try {
    const {id:_id} = req.params
    const product = await Product.findOne({_id})
    if(!product) return res.status(404).send('Item does not exist')

    req.product = product
    next()
  } catch (error) {
    res.status(500).send(error)
  }
}