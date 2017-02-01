const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use(express.static('public'));

var status = {
  state: null,
  action: null,
  event: null
};

// list of connected gateways
app.get('/', (req, res) => {
  res.send(status)
});

app.get('/nullify', (req, res) => {
  status = {
    state: null,
    action: null,
    event: null
  }
  res.send(status)
});

// deployment hook
app.post('/deploy', (req, res) => {
  status = {
    state: req.body.data.state,
    action: req.body.data.action,
    event: req.body.event
  };
  console.log("🎃", status);
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
