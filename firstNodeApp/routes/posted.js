var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('post_template', { title: 'Response page' });
});




module.exports = router;
