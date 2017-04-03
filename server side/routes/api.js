var express = require('express');
var router = express.Router();

var Attraction = require('../models/attraction');

/* GET users listing. */
router.post('/attraction/getall', function(req, res, next) {
  Attraction.find({}, function(err, data){
    if(err) throw err;
    res.json(data);
  })
});

router.get('/attraction/getall2', function(req, res, next) {
  Attraction.find({}, function(err, data){
    if(err) throw err;
    res.json(data);
  }).sort({engoyrating:-1});
});

router.post('/attraction/search', function(req, res, next) {
  	Attraction.find({},function(err,data){
  		    if(err) throw err;
  		res.json(data);
  	});
});
router.post('/attraction/attraction_detail', function(req, res, next) {

      let id=req.body.id;
      console.log(req.body);
      Attraction.findById(id,function(err,data){
          if(err) throw err;
                console.log(data);

      res.json(data);
    });

});

router.post('/attraction/favorite', function(req, res, next) {

      let id=req.body.favorite;
      console.log(req.body);
      console.log("==="+id+"===");
          Attraction.find({ 'id': { $in: id }}, function(err, result){ 
                    res.json(result);
                         });

});


router.post('/attraction/special_attractions', function(req, res, next) {
		let finalResult = {};
		let area=req.body.area;
		let type=req.body.type;
		let path=req.body.path;
    let groups=req.body.groups;

      Attraction.find({ 'type': { $in: type },'groups': {$in: groups},'area': area,'time':path }, function(err, result){ 
                    console.log("hi"+result);
                    res.json(result);
                         }).sort({engoyrating:-1}).limit(8);

});



router.post('/attraction/set_rating',function(req,res,next){
      let id=req.body.id;
      let rate=req.body.erating;
     /* Attraction.findById(id, function(err,result){
        let rating= result.rating;
        rating.push(rate);
        Attraction.update({})

      });
      */
            Attraction.findByIdAndUpdate(id,{"$push":{"rating":rate}},{"new":true,"upsert":true},function(err,data){
                if(err)
                  throw err;
                res.json(data);
            });


});
router.post('/attraction/set_engoyrating',function(req,res,next){
      let er=req.body.rateAvg;
      let id=req.body.id;
      console.log(er +","+id);
      Attraction.findByIdAndUpdate(id,{$set:{"engoyrating":er}},function(err,data){
                if(err)
                  throw err;
                console.log("success");
                res.json(data);
              });
});

module.exports = router;


