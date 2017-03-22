var express = require('express');
var router = express.Router();

var Attraction = require('../models/attraction');

/* GET users listing. */
router.get('/attration/getall', function(req, res, next) {
  Attraction.find({}, function(err, data){
    if(err) throw err;
    res.json(data);
  })
});

router.get('/attration/getone', function(req, res, next) {
  res.send('respond with a resource');
});


