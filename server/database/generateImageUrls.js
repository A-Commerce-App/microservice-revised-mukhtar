const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')



const generateImages = async () => {
  const terms = ['fruit', 'nut', 'desk', 'chair', 'shirt', 'pants', 'burger', 'pizza', 'guitar', 'piano', 'candy', 'dress', 'shoe', 'hat', 'cereal', 'product', 'coffee', 'shorts', 'gloves', 'glasses', 'sunglasses', 'jacket']
  const set = {}
  const container = []
  let i = 0

  let failedCounter = 0

  while (container.length < 500) {
    const {url} = await fetch(`https://source.unsplash.com/random/800x600?${terms[i]}`)
    failedCounter++

    if (!set[url]) {
      failedCounter = 0

      set[url] = true
      container.push(url)
    }
    i++
    console.log(i)
    if (!(i < terms.length)) i = 0
    if (failedCounter > 50) break
  }

  console.log(container)
  fs.writeFileSync(path.resolve('imageUrls.json'), JSON.stringify(container))
}
generateImages()

/* eslint-disable no-unused-vars */

// const mongoose = require('mongoose');
// const faker = require('faker');
// const { Product } = require('./index');

// for (let i = 0; i < 100; i += 1) {
//   const imageArray = [];
//   const randomLEN = Math.floor(Math.random() * Math.floor(7)) + 1;
//   for (let j = 0; j < randomLEN; j += 1) {
//     const randomIMG = Math.floor(Math.random() * Math.floor(50));
//     imageArray.push(`https://zainfecservice.s3.amazonaws.com/Random+Images/${randomIMG}.jpg`);
//   }
//   const product = new Product({
//     _id: i,
//     productName: faker.commerce.productName(),
//     images: imageArray,
//   }).save((result) => {
//     if (i === 100) {
//       mongoose.disconnect();
//     }
//   });
// }