const mongoose=require('mongoose');
const Schema=mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

let UserSchema = new Schema({
  userId: {type: String,default: "",index: true,unique: true},
  firstName: {type: String,default: ""},
  lastName: { type: String, default: ""},
  countryName: {type: String,default: ""},
  mobileNumber: {type: String,default: ""},
  password: {type: String,default: ""},
  email: { type: String,default: ""},
  validationToken: {type: String,default: ""},
  emailVerified: {type: String,default: "No"},
  hash: String,
  salt: String
});

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

module.exports=mongoose.model('User',UserSchema);


