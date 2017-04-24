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

router.get('/attraction/getall2', function(req, res, next) {
  Attraction.find({},function(err, data){
    res.json(data);
  });
});

router.post('/attraction/search', function(req, res, next) {
  	Attraction.find({},function(err,data){
  		    if(err) throw err;
  		res.json(data);
  	});
});

router.post('/attraction/special_attractions', function(req, res, next) {
		let finalResult = {};
		let area=req.body.area;
		let type=req.body.type;
		let path=req.body.path;
		for(var i=0;i<type.length;i++){
			var type2=type[i];
  		Attraction.find({"type":type2,"area":area},function(err,data){
  		    if(err) throw err;
  		    finalResult.push(data);
  		      		res.json(JSON.parse(finalResult));

  		
  		});
  		}
  		
});





module.exports = router;


