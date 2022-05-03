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

app.get('/v1/explorers', (req, res) => {
  console.log(`API Explorers: GET ALL request ${new Date()}`);
  const explorer1 = {id: 1, name: "mabvmex" }
  const explorer2 = {id: 2, name: "mabvmet" }
  const explorer3 = {id: 3, name: "mabvdev" }
  const explorer4 = {id: 4, name: "mabvskom" }
  const explorer5 = {id: 5, name: "mabvmet" }

  const explorers = [explorer1, explorer2, explorer3, explorer4, explorer5, ];
  res.status(200).json(explorers);
})