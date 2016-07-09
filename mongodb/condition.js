const mongoose = require('mongoose');

// 这个require是运行index.js文件，这样就不用去重复定义schema和model了
// 并且引用了db
const db = require('./index.js');

// 不传入schema参数，表示直接取得现有的model
const BookModel = db.model('Book');

// 试一下内置的promise
// BookModel.findOne({author: '有贺诚司'})
// .then((doc) => {  // 成功
//   doc.remove();
//   console.log(doc);
// }, () => console.log('没找到'))  // 失败
// .catch((err) => console.log(err));  // 出错

// 查询的条件是一个对象，以 或or 为例
const condition= {
  $or:[
    {author: 'a'},
    {author: 'b'},
  ]
};

BookModel.find(condition)
.then(docs => {
  if(docs){
    console.log(docs);
  }else{
    console.log('没有这样的数据');
  }
})
.catch(err => console.log(err));

// 这一段有问题，就是没有找到的时候也不返回消息。
// findOne没找到返回的是null，比较一下就可以if(doc != null){...}
// find没找到返回空数组，看一下数组的长度就知道是否找到

BookModel.find(condition)
.then(docs => {
  if(docs.length != 0){
    console.log(docs);
  }else{
    console.log('没有这样的数据');
  }
})
.catch(err => console.log(err));
