const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening port on localhost:${port}`);
})

app.get('/', (req, res) => {
  res.send('hola mundo')
})
