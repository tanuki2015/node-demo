var express = require('express');
var router = express.Router();

router.get('/add', function(req, res, next) {
  // res.send('respond with a article add');
  res.render('add', { title: '发表文章' });
});

router.post('/add', function(req, res, next) {
  // const article = req.body;
  // const user = req.session.user;
  // article.author = user._id;


});


module.exports = router;
