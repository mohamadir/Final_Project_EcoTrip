var express = require('express');
var router = express.Router();

var Attraction = require('../models/attraction');

/* GET users listing. */
router.get('/attraction/getall', function(req, res, next) {
  Attraction.find({}, function(err, data){
    if(err) throw err;
    res.json(data);
  })
});

router.get('/attraction/search', function(req, res, next) {
  console.log(req.body);
});



module.exports = router;


