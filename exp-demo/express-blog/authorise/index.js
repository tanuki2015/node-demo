// 检查登录，没有登录就跳转到登录页面
exports.mustLogin = function(req, res, next){
  if(req.session.user){
    next();
  }else{
    req.flash('error', '请登录');
    res.redirect('/users/login');
  }
}

// 检查登录， 已经登录就跳转到首页
exports.mustNotLogin = function(req, res, next){
  if(req.session.user){
    req.flash('error', '你已经登录');
    res.redirect('/');
  }else{
    next();
  }
}
