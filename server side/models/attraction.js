var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var attSchema = new Schema({
 	name: String,
 	type: String,
 	groups:[String],
 	address: {
 		lat: Number,
 		lon: Number
 	},
// should put it in agent register 
 	city: String,
 	phone: Number,
 	area: String,
 	time: String,
 	details: String,
 	timerating: Number,
 	engoyrating: Number,
 	rating: [Number],
 	price: Number,
 	images: [{
 		src: String
 	}]
});


module.exports = mongoose.model("Attraction",attSchema);
