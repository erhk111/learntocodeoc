var express = require('express');
var app = express();
var profile = express.Router();

profile.use(function(req, res, next) {
   console.log(req.url);
   next();
})

profile.get('/', function(req, res) {
  res.send('<h2>The profile.</h2>') 
})

profile.get('/list/:user', function(req, res) {
  var user = req.params.user;
  res.send('<h2>Here is the list for ' + user + '</h1>')
})

module.exports = profile;
