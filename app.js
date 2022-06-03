const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.send("<h1>Hello world!</h1>");
});

app.listen(port, function() {
  console.log("Server started on port " + port);
});
