var express = require('express');
var router = express.Router();
var Company = require('../models/company');

/* GET users listing. */


router.get('/', isAdmin, function(req, res){
  Company.find({}, function(err, data){
    res.render('admin',{companies: data});

  });

});
/*

outer.get('/', isAuthenticated, function(req, res){
  id = req.query.id || res.locals.user._id;
  Company.findOne({userid: id}, function(err, data){
    if(err) throw err;
    User.findById(id, function(err, user){
      if(err) throw err;
      Attraction.find({}, function(err, attractions){
        res.render('agent', {
          company: data, 
          user: user,
          attractions: attractions 
        });
      })
      
    })
   
  });
});


*/
function isAdmin(req, res, next){
  if(req.isAuthenticated())
    if(res.locals.user.role == 'admin')
      return next();

  res.redirect('/');
}

module.exports = router;
