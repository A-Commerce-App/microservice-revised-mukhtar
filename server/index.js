/* eslint-disable no-console */
const app = require('./app');

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Connected to ${port}`);
});
