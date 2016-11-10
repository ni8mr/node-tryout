var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'First Node App' });
});


router.post('/after-post', function(req, res){
	var message = req.body.text_field;
	var user = {};
	user.authorised = message == '' ? false : true;
	res.render('post_template', user);
});


module.exports = router;
