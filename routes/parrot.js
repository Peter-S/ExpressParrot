var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('parrot', {
    title: 'Parrot',
    name: req.query.name,
    fave: req.query.fave });
});

module.exports = router;
