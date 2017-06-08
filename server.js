var express = require("express");
var app = express();
var path = require('path');
var port = 3500;

app.use(express.static(path.join(__dirname, "public")));


app.listen(port, function(){
  console.log("Server is listening on port " + port);
})
