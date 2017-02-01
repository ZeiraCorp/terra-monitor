const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use(express.static('public'));

var status = null

// list of connected gateways
app.get('/', (req, res) => {
  res.send({status: status})
});

// deployment hook
app.post('/deploy', (req, res) => {
  status = req.body.data.event;
  console.log("🎃", status);
  res.status(201).end();
  //res.send({})
});


app.listen(port);
console.log(`🌍 Web Server is started - listening on ${port}`);
