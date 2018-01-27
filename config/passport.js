var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Summoner = require('../models/summoner');
var bcrypt = require('bcryptjs');

// Passport config, required for passport
passport.serializeUser(function(summoner, done){
  done(null, summoner.id);
});

passport.deserializeUser(function(id, done){
  User.findById(id, function(err, summoner){
    done(err, summoner);
  });
});

passport.use('local-login',new LocalStrategy({
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true
}, function(req, email, password, done){
  Summoner.findOne({'email': email}, function(err, summoner){
    if(err) {
      return done(err);
    }
    if(!summoner){
      return done(null, false, { error: 'Your login details were wrong'})
    }
    return done(null, summoner);
  });
}));
