var cards = require("./cards.json");
var Card = require('.././app/models/card');
var cards_in_db;

Card.find({}, function(err, cards) {cards_in_db = cards;});
var misformated_keys = ['list','rollHeader','rolls']


// 	name: String,
// 	description: String,
// 	type: String,
// 	quote: String,
//  list: [ String ],
//  rollHeader: [ String ],
//  rolls: [ String ]

 var c = cards.cards[0];
 console.log(cards_in_db); 

//Card.insertMany([c], function() {})
// for(var i=0;i<cards.length;i++){
//   //key
//     cards[i][key] = cards[i][key]
//   //
// }
