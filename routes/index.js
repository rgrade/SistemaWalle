var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/teste', function(req, res, next) {
  res.render('teste');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/denuncias', function(req, res, next) {
  res.render('denuncias');
});

router.get('/agendar', function(req, res, next) {
  res.render('agendar');
});

router.get('/locais', function(req, res, next) {
  res.render('locais',{});
});

module.exports = router;
