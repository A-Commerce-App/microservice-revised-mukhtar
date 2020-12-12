const fs = require('fs')
const path = require('path')

// const { db, schema, pgp, redisSet } = require("./connection");
const { db, schema, pgp } = require("./connection");
const fourRandImagesXTimes = require('./utils/fourRandImagesXTimes');
const randInclusive = require('./utils/randInclusive');
const xRandomProductNames = require('./utils/xRandomProductNames');
const parsedImages = JSON.parse(fs.readFileSync(path.resolve('imageUrls.json'), 'utf-8'))

const cachePath = path.resolve('caches')
const startDate = new Date()

let { START_PRIMARY_ID, END_PRIMARY_ID } = process.env
START_PRIMARY_ID = parseInt(START_PRIMARY_ID, 10)
END_PRIMARY_ID = parseInt(END_PRIMARY_ID, 10)
console.log(START_PRIMARY_ID, END_PRIMARY_ID)

const SEND_IMPORT_AT = 50000

let insertedContainer = {}
let toInsertContainer = []

const errHandler = (err) => {
  if (err) console.log(err)
}


const main = async () => {
  console.log(process.env.DB_HOST)
  const randImages = fourRandImagesXTimes(parsedImages, 125)

  const randomProductNames = xRandomProductNames(125)
  // db.any('select * from products')
  let accumulator = 0

  for (let primary_id = START_PRIMARY_ID; primary_id <= END_PRIMARY_ID; primary_id += 1) {
    // item.id = primary_id
    // item.images = randImages[randInclusive(0, randImages.length - 1)]
    const item = {
      images: randImages[randInclusive(0, randImages.length - 1)],
      id: primary_id,
      productName: randomProductNames[randInclusive(0, randImages.length - 1)]
    }
    // item.productName = randomProductNames[randInclusive(0, randImages.length - 1)]

    toInsertContainer.push(item)
    // redisSet(primary_id, JSON.stringify(item))

    insertedContainer[primary_id] = item
    accumulator++

    if (accumulator !== 0 && accumulator % SEND_IMPORT_AT === 0) {
      // fs.writeFile(`${cachePath}/${(primary_id - SEND_IMPORT_AT) + 1}-${primary_id}`, JSON.stringify(insertedContainer), errHandler)
      // const insert = pgp.helpers.insert(toInsertContainer, schema)
      await db.none(pgp.helpers.insert(toInsertContainer, schema)).catch(e => console.log(e))

      accumulator = 0
      toInsertContainer = []
      insertedContainer = {}
    }

    if (primary_id === END_PRIMARY_ID) {
      const endDate = new Date()
      console.log(endDate - startDate);
    }

  }


  console.log('done', toInsertContainer.length)


}

main()