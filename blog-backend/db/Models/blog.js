/**
 * Created by user on 16/6/4.
 */
var mongoose = require('mongoose'),
  db = require('../database'),
  Schema = mongoose.Schema,
  ObjectId = mongoose.Types.ObjectId;

// http://mongoosejs.com/docs/schematypes.html
//
var BlogSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
    index: true,
    default: 'ffoo'
  },
  body: Schema.Types.Mixed
});


var Blog = mongoose.model('Blog', BlogSchema);

exports = module.exports = Blog;
