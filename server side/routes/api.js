var express = require('express');
var router = express.Router();

router.get('/search', function(req,res){
	res.json({
		success: true

	});
});



module.exports = router;