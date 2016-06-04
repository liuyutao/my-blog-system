/**
 * Created by user on 16/6/4.
 */
var mongoose = require('mongoose'),
  db = require('../database'),
  Schema = mongoose.Schema,
  ObjectId = mongoose.Types.ObjectId;

var UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    index: true,
    default: 'user'
  },
  password: {
    type: String,
    require: true,
    default: '111111'
  }
});


var User = mongoose.model('User', UserSchema);

exports = module.exports = User;
