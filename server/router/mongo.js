const express = require('express')
const router = express.Router()
const {Product} = require('../database/index')
const productMustExist = require('../middleware/productMustExist')

router.post('/items/:id', async (req, res) => {
  const {id: _id} = req.params
  const {images, productName} = req.body

  try {
    if (await Product.findOne({_id})) return res.status(400).send('Item alread exists')

    const product = new Product({
      _id,
      productName,
      images
    })

    await product.save()
    res.status(201).send('Item created')
  } catch (error) {
    console.log(error)
  }
})

router.get('/items/:id', productMustExist, (req, res) => {
  const {product} = req
  res.send(product)
})


router.patch('/items/:id', productMustExist, async (req, res) => {
  try {
    const allowedProperties = ['productName', 'images']
    const attemptedUpdates = Object.keys(req.body)

    const allowedOperation = attemptedUpdates.every((bodyProp) => allowedProperties.includes(bodyProp))
    if (!allowedOperation) return res.status(400).send('Invalid operation!')

    const {product} = req
    attemptedUpdates.forEach(update => product[update] = req.body[update])

    await product.save()
    res.send(product)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.delete('/items/:id', productMustExist, async (req, res) => {
  const {product} = req

  try {
    await product.remove()
    res.send(req.product)
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router