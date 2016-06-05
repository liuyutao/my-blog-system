var express = require('express');
var router = express.Router();
var User = require("../db/Models/user");
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


/* GET users listing. */
router.post('/login', function (req, res, next) {
  var username = req.username;
  var password = req.password;
  passport.use(new LocalStrategy(
    function (username, password, done) {
      User.findOne({username: username}, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {message: 'Incorrect username.'});
        }
        if (!user.validPassword(password)) {
          return done(null, false, {message: 'Incorrect password.'});
        }
        return done(null, user);
      });
    }
  ));

  res.send('respond with a resource');
});


/* GET users listing. */
router.get('/checkSession', function (req, res, next) {
  passport.use(new BasicStrategy(
    function (username, password, done) {

    }
  ));

  res.send('respond with a resource');
});


module.exports = router;
