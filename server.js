var express = require("express");
var app = express();
var path = require('path');
const PORT = process.env.PORT || 3000;


app.use(function(req, res, next){
    if(req.headers['x-forwarded-proto' === 'http']){
      next();
    }else{
      res.redirect('http://' + req.hostname + req.url);
    }
});



app.use(express.static(path.join(__dirname, "public")));


app.listen(PORT, function(){
  console.log("Server is listening on port " + PORT);
})
