$(function() {
  // 给导航按钮添加焦点事件
  var oLi = document.querySelector('#nav-btn').querySelectorAll('li');
  var oA = document.querySelector('#nav-btn').querySelectorAll('a');
  // 因为页面每次都从服务器刷新，造成设置active无效，所以只有用下面的办法：
  var urlstr = location.href;
  oA[0].href = oA[0].href + '/'; // 首页href没有‘/’,所以要自己加上

  for(var i=0 ; i<oA.length; i++){
    if(urlstr == oA[i].href){
      oLi[i].className = 'active';
    }
  }

  // 给所有img添加lazy必要的类名和属性
  $("img").addClass("lazy")
  .attr("data-original", function(){ return this.src; })
  .removeProp("src");

  // 执行lazyLoad
  $("img.lazy").lazyload({
    effect : "fadeIn"
  });
});
// 缩略图和lazyLoad一起用的时候jquery会报错，找不到某个图片
