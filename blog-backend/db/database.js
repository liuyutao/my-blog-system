/**
 * Created by user on 16/6/4.
 */
var db = require('mongoose');
db.connect('mongodb://localhost:27017/blogdemo');
exports = module.exports = db;
