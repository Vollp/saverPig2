var express = require('express');
var router = express.Router();

/* GET home */
router.get('/', function (req, res) {
	res.render('index', { title: 'teste' })
});

module.exports = router