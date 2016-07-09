var express = require('express');
var router = express.Router();
const UserModel = require('../database/index.js');
const crypto = require('crypto');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/reg', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('reg', { title: '用户注册' });
});

router.post('/reg', function(req, res, next) {
  // 处理表单数据
  const user = req.body;

  if(user.password != user.repeatPassword){
    req.flash('error', '两次输入密码不一致');
    return res.redirect('back'); // back参数 回退到上一个页面 记得return，后面操作都不需要了
  }
  delete user.repeatPassword;
  user.password = crypto.createHash('md5').update(user.password).digest('hex');

  const avatarEmail = crypto.createHash('md5').update(user.email).digest('hex')
  user.avatar = `https://secure.gravator.com/avator/${avatarEmail}?s=48`;

  // 通过model的实例操作数据库 就是 entity 其中user是press解析好的对象可以直接用
  const UserEntity = new UserModel(user);
  UserEntity.save((err, doc) => {
    if(err){
      req.flash('error', '保存失败');
      return res.redirect('back');
    }else{
      // save session
      req.session.user = doc;
      req.flash('success', '注册成功')
      return res.redirect('/');
    }
  });
});

router.get('/login', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('login', { title: '用户登录' });
});

router.post('/login', function(req, res, next) {
  const user = req.body;
  user.password = crypto.createHash('md5').update(user.password).digest('hex');
  UserModel.findOne(user, (err, doc) => {
    if(err){
      console.log(err);
      return res.redirect('back');
    }else if(doc != null){
      req.session.user = doc;
      req.flash('success', '登陆成功');
      return res.redirect('/');
    }else{
      req.flash('error', '登陆失败');
      return res.redirect('back');
    }
  })
});

router.get('/logout', function(req, res, next) {
  req.session.user = null;
  res.redirect('/');
});

module.exports = router
