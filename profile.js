var express = require('express');
var app = express();
var profile = express.Router();

profile.use(function(req, res, next) {
   console.log(req.url);
   next();
})

profile.get('/', function(req, res) {
  res.send('The profile.') 
})

module.exports = profile;
