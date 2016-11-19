var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Card', new Schema({
	name: String,
	description: String,
	type: String,
	quote: String,
    list: [{ li: String }],
    rollHeader: [{ h: String }],
    rolls: [{ no: String, outcome: [{ o: String }] }]
}));
