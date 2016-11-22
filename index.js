var express = require('express'),
    app = express(),
    fs = require('fs'),
    // Mongoose is our mongodb interface
    mongoose = require('mongoose'),

    // Make your own config.js contaning: module.exports = {'database': 'mongodb://localhost:27017/lmao_cardgen'};
    config = require('./config'), 

    // "Promises" are a programming pattern that makes ansynchornous programming code cleaner
    // Bluebird is a nice, well-maintained promise library
    mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

mongoose.connect(config.database);

var Card = require("./app/models/card");

var load_file = function(path){
    return fs.readFile(path, function(error, data) {
        if (error) {throw error;}
        return data;
    });
}

// ROUTES ---------------------------------------
var apiRoutes = express.Router(); 

app.get("/", function(request, response){
    response.send(global.process.env["PWD"]);
    var file = load_file(global.process.env["PWD"]
 + './public/cardprint/index.html');
    console.log(file);
    response.send(file);
});

app.get("/cards", function(request, response){
    Card.find({}, function(err, cards) {
        response.json(cards);
    });
});


app.listen(3000, function(){
    console.log("it works");
});