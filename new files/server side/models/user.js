var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs')

var Schema = mongoose.Schema;

var userSchema = new Schema({
  email:  String,
  password: String,
  role:   String,
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User",userSchema);
