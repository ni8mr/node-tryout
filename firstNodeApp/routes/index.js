var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'First Node App' });
});


module.exports = router;
