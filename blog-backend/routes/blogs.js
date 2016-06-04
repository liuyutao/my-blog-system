/**
 * Created by user on 16/6/4.
 */
var express = require('express');
var router = express.Router();
var Blog = require("../db/Models/blog");

function check_user(req, res, next){

  if (req.user){
    return next();
  }else{
    res.status = 401;
    res.json({
      "error": "need auth"
    })
  }

}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add', check_user, function(req, res, next) {
  var blog = new Blog();
  blog.title = req.title;
  blog.body = req.body;
  blog.save();
  res.json({
    status:true,
    message:"创建成功"
  });
});

router.get('/list', function(req, res, next) {

  Blog.find().exec().then(function(docs){
      console.log(docs);
      return res.json({data:docs})

  }, function(err){
      console.log(err);
      res.status = 406;
      return res.json(err);
  });
});

router.delete('/delete/:id', function (req,res,next) {
  Blog.remove({_id:req.id});
});

module.exports = router;
