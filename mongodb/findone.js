const mongoose = require('mongoose');

const dbUri = 'mongodb://localhost/test';
const db = mongoose.connect(dbUri);
db.connection.on('open', () => console.log('数据库连接成功'));
db.connection.on('error', err => console.log('数据库连接失败'));

const BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  publishTime: Date,
});

// 使用当前数据库，也就是mongoose.connect连接后返回的对象 db
const BookModel = db.model('Book', BookSchema);

// BookModel.findOne({author: '有贺诚司'}, (err, doc) => {
//   if(err){
//     console.log(err);
//   }else{
//     console.log(doc);
//   }
// });

// 在回调中修改下
BookModel.findOne({author: '有贺诚司'}, (err, doc) => {
  if(err){
    console.log(err);
  }else{
    doc.author = 'william';
    doc.save();
    console.log(doc);
  }
});
