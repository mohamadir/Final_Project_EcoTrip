var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
  name: String,
  website: String,
  telephone: Number,
  type: String,
  userid: Schema.Types.ObjectId
});

module.exports = mongoose.model("Company",companySchema);
