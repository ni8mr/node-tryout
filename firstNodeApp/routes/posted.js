var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

// /* GET home page. */
router.get('/after-post', function(req, res, next) {
	var user = {
		authorised: false
	};
	res.render('post_template', user);
});

router.get('/', function(req, res, next) {
	res.redirect('/index');
});

module.exports = router;
