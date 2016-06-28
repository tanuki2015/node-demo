var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://127.0.0.1:27017/xf");

db.connection.on("error", err => console.log("数据库连接失败" + err));
db.connection.on("open", () => console.log("数据库连接成功"));

//定义schema
var PersonSchema = new mongoose.Schema({
    name : {type: String},
    age : {type: Number, default:0},
    time: {type: Date, default:Date.now},
    email: {type: String, default: ''}
});

//定义model
var PersonModel = db.model("Person", PersonSchema);

//实例化model，得到一个Entity
//
var personEntity = new PersonModel({
    name: "George Ornbo",
    age: 28,
    email: "aaa@bbb.com"
});

// console.log(personEntity.name);
// console.log(personEntity.age);
// console.log(personEntity.time);
// console.log(personEntity.email);

//保存记录
// personEntity.save((error, doc) => {
//     if(error){
//         console.log("error" + error)
//     }else{
//         console.log(doc)
//     }
// });

//查询
PersonModel.find({}, (error, docs) => {
    console.log(docs);
})

//model的保存方法
// PersonModel.create({name:"Mike Cantelon", age: 36}, (error, doc) => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log(doc);
//     }
// });

//model数据更新
 // var conditions = {name:"Mike Cantelon"};
 // var data = {$set: {age: 136}};
 // PersonModel.update(conditions, data, error => {
 //     if (error) {
 //         console.log(error);
 //     } else {
 //         console.log("update success");
 //     }
 // });

//model的删除
var condition = {name:"Mike Cantelon"};
PersonModel.remove(condition, error => {
    if(error){
        console.log(error);
    }else{
        console.log("remove success");
    }
})

//给schema添加公共方法
//PersonSchema.method('greet', function(){console.log("how are you")});
//这个版本报错，不知道怎么回事
// personEntity.greet();
