var express = require('express');
var app = express();

app.use(function(req, res, next) {
  console.log(req.url);
  next();
})

app.use(express.static('public'));

app.listen(1337, function() {
  console.log('Service Started on 1337.')
})