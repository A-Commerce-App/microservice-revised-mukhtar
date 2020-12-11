const randInclusive = require("./randInclusive")


module.exports = (images, times ) => {


  return Array.from({length: times}).map(() => JSON.stringify([images[randInclusive(0, images.length - 1)], images[randInclusive(0, images.length - 1)],images[randInclusive(0, images.length - 1)], images[randInclusive(0, images.length - 1)]]))
}