const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use(express.static('public'));

let statuses = [];

// list of connected gateways
app.get('/', (req, res) => {
  res.send(statuses)
});

app.get('/nullify', (req, res) => {
  statuses.length = 0
  res.send(statuses)
});

// deployment hook
app.post('/deploy', (req, res) => {
  statuses.push(req.body);
  console.log("🎃", statuses);
  res.status(201).end();
  //res.send({})
});

/*
let nullifyStatus = () => {

}

const timer = setInterval(nullifyStatus, 1000)
*/


app.listen(port);
console.log(`🌍 Web Server is started - listening on ${port}`);
