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

// 通过model的实例操作数据库 就是 entity
const book = new BookModel({
  name: '肌肉力量基础训练',
  author: '有贺诚司',
  publishTime: new Date(),
})

book.save((err) => {
  console.log(err? err: 'save success');
});

// 查询一下， 第一个参数是查询条件, 注意：只能在model上操作（BookModel）， 而不是实例book上
BookModel.find({}, (err, docs) => {
  if(err){
    console.log(err);
  }else{
    console.log(docs);
  }
});

module.exports = db;
/*
* 可以这样理解：
* schema对应于关系数据库中的表结构，mongo是无模式的，没有表结构的概念
* model对应于collection，相当于关系数据库中的 表
* entity对应于document， 相当于关系数据库中 表的一条记录
*/
