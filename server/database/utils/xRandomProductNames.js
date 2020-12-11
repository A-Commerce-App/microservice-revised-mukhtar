const faker = require('faker')

module.exports = (times) => {
  return Array.from({length:times}).map(() => faker.commerce.productName())
}