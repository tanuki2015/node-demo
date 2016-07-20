var express = require('express');
var router = express.Router();
const ArticleModel = require('../database/index.js').ArticleModel;
const authorise = require('../authorise/');


router.get('/add', authorise.mustLogin, function(req, res, next) {
  // res.send('respond with a article add');
  res.render('add', { title: '发表文章' });
});

router.post('/add', authorise.mustLogin, function(req, res, next) {
  const article = req.body;
  const user = req.session.user;
  article.author = user._id;

  const ArticleEntity = new ArticleModel(article);
  ArticleEntity.save((err, doc) => {
    if(err){
      req.flash('error', '保存失败');
      return res.redirect('back');
    }else{
      req.flash('success', '保存成功')
      return res.redirect('/');
    }
  });

});


module.exports = router;
