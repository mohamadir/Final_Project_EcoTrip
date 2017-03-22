var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var attSchema = new Schema({
 	name: String,
 	address: {
 		lat: Number,
 		lon: Number
 	},
 	city: String,
 	price: Number,
 	images: [{
 		src: String
 	}]
});


module.exports = mongoose.model("Attraction",attSchema);
