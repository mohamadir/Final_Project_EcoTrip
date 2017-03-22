var express = require('express');
var router = express.Router();

<<<<<<< HEAD
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
=======
router.get('/search', function(req,res){
	res.json({
		success: true

	});
});



module.exports = router;
>>>>>>> af88a7dfedba96c6fb395c28ee84df30bc8809f0
