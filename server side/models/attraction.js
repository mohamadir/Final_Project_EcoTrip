var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var attSchema = new Schema({
 	name: String,
 	types: String,
 	groups:String,
 	address: {
 		lat: Number,
 		lon: Number
 	},
// should put it in agent register 
 	city: String,
 	phone: Number,
 	area: String,
 	time: String,
 	timerating: Number,
 	engoyrating: Number,
 	price: Number,
 	images: [{
 		src: String
 	}]
});


module.exports = mongoose.model("Attraction",attSchema);
