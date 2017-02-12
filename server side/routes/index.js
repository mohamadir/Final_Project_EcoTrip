var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Company = require('../models/company');
/* GET home page. */
router.get('/', function(req, res){
	res.render('index', {title: "app"});
});

router.get('/agent', function(req, res){
  res.render('agent');
});

router.get('/admin', isAdmin, function(req, res){
  res.render('admin');
});

function isAuthenticated(req, res, next){
  if(req.isAuthenticated())
    return next();

  res.redirect('/');
}

function isAdmin(req, res, next){
  if(req.isAuthenticated())
    if(res.locals.user.role == 'admin')
      return next();

  res.redirect('/');
}

module.exports = router;