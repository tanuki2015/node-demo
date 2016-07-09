const mongoose = require('mongoose');
const dbSetting = require('../dbSetting.js');

const db = mongoose.connect(dbSetting.dbUrl);
db.connection.on('open', () => console.log('数据库连接成功'));
db.connection.on('error', err => console.log('数据库连接失败'));

const UserSchema = new mongoose.Schema({
  username: {type: String, require: true},
  email: {type: String, require: true},
  password: {type: String, require: true},
  avatar: {type: String, require: true},
});

// 使用当前数据库，也就是mongoose.connect连接后返回的对象 db
const UserModel = db.model('User', UserSchema);

// 发表文章的schema
const ObjectId = mongoose.Schema.Types.Objectid;
const ArticleSchema = new mongoose.Schema({
  title: {type: String, require: true},
  content: {type: String, require: true},
  createAt: {type: Date, default: Date.now},
  // author: {type: ObjectId, ref:'User'}
});
const ArticleModel = db.model('Article', ArticleSchema);
module.exports.UserModel = UserModel;
module.exports.ArticleModel = ArticleModel;
