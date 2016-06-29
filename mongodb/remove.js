const mongoose = require('mongoose');

// 这个require是运行index.js文件，这样就不用去重复定义schema和model了
// 并且引用了db
const db = require('./index.js');

// 不传入schema参数，表示直接取得现有的model
const BookModel = db.model('Book');

// 先找到，再删除
// BookModel.findOne({author: 'william'}, (err, doc) => {
//   if(err){
//     console.log(err);
//   }
//   if(doc){
//     doc.remove();
//   }
// });

// 试一下内置的promise
BookModel.findOne({author: '有贺诚司'})
.then((doc) => {  // 成功
  doc.remove();
  console.log(doc);
}, () => console.log('没找到'))  // 失败
.catch((err) => console.log(err));  // 出错
