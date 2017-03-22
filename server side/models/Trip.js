var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tripSchema = new Schema({
 	name: String,
 	attractions:[{
 		attractionId:  Schema.Types.ObjectId
 	}],
 	area: String,
 	pric: Number
 	
});

module.exports = mongoose.model("Trip",tripSchema);
