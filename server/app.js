/* eslint-disable no-console */
const express = require('express');
// require('newrelic')

const { db, redis } = require('./database/connection')
const path = require('path');
const redisEnabled = require('./middleware/redisEnabled');
const app = express();


app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());




app.get('/api/product/:id', redisEnabled, async (req, res) => {
  const item = req.params.id;
  console.log(item)
  try {
    const data = await db.one('select * from products where id = $1', [item])
    // console.log(data.images[0])
    res.send(JSON.stringify(data))
  } catch (error) {
    console.log(error)
    res.status(500).send({ error })
  }

});

app.get('/hello', async (req, res) => {
  const data = await asyncGet('hello')
  console.log(data)
  res.send('hello world')
})



app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('client/dist/index.html'))
})
module.exports = app;
