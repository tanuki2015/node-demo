var express = require('express');
var router = express.Router();
const ArticleModel = require('../database/index.js').ArticleModel;


/* GET home page. */
router.get('/', function(req, res, next) {
  ArticleModel.find({}).populate('user').exec((err, docs) => {
    res.render('index', { title: 'wellcome my blog!', articles: docs });
  })
});

module.exports = router;
