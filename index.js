var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.database);

var Card = require('./app/models/card');

app.listen(3000, function(){
  console.log("it works");
})

// ROUTES ---------------------------------------
var apiRoutes = express.Router(); 

apiRoutes.get('/', function(request, response){
  Card.find({}, function(err, cards) {
    res.json(cards);
  });
});

