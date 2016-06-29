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
    {author: 'abc'},
    {author: 'efg'},
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
