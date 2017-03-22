var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var attSchema = new Schema({
 	name: String,
 	type: String,
 	groups: [{group: String}],
 	address: {
 		lat: Number,
 		lon: Number
 	},
 	time: Number,// should put it in agent register 
 	city: String,
 	area: String,
 	price: Number,
 	images: [{
 		src: String
 	}]
});


module.exports = mongoose.model("Attraction",attSchema);
