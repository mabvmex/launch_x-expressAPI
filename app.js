const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening port on localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.get("/v1/explorers", (req, res) => {
  console.log(`API Explorers: GET ALL request ${new Date()}`);
  const explorer1 = { id: 1, name: "mabvmex" };
  const explorer2 = { id: 2, name: "mabvmet" };
  const explorer3 = { id: 3, name: "mabvdev" };
  const explorer4 = { id: 4, name: "mabvskom" };
  const explorer5 = { id: 5, name: "mabvmet" };

  const explorers = [explorer1, explorer2, explorer3, explorer4, explorer5];
  res.status(200).json(explorers);
});

app.get("/v1/explorers/:id", (req, res) => {
  console.log(`API Explorers: GET request ${new Date()}`);
  console.log(`GET an explorer by Id ${req.params.id}`);
  const explorer = { id: 1, name: "mabvmex" };
  res.status(200).json(explorer);
});

app.post('/v1/explorers', (req, res) => {
  console.log(`API Explorers: POST request ${new Date()}`);
  const requestBody = req.body;
  res.status(201).json({message: 'Created'})
})

app.put('/v1/explorers/:id', (req, res) => {
  console.log(`API Explorers PUT request ${new Date()}`);
  console.log(`Update explorer with Id ${req.params.id}`);
  const requestBody = req.body;
  res.status(200).json({messsage: 'Updated!'});
})  