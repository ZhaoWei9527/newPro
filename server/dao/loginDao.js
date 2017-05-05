
//引入
var mongoose = require('mongoose');
//使用
mongoose.connect("mongodb://127.0.0.1:27017/userInfo");

var connection = mongoose.connection;
//on    当...的时候
connection.on('error', function(err){
    console.error(err);
});

connection.on('open', function() {
    // we're connected!
    console.log('we are connected!');
});

//建立 schema
var userSchema = new mongoose.Schema({
    userName: {type: String},
    password: {type: String},
});


//建立 model
var userModel = mongoose.model('userInfo', userSchema);

function find(userName, callback) {
    userModel.findOne({userName: userName}, function (err, doc) {
        if(err){
            callback(err, null)
        }else {
            callback(null, doc)
        }
    })
}

module.exports.find = find
// var user1 = {
//     userName: 'liujianqian',
//     password: 'xiaojian123'
// }
// userModel.create(user1)
find('liujianqian', function (err, data) {
    console.log(typeof data)
})
//写入数据  //model 写入数据        //entity 写入数据
// var niu = {
//     name: 'niu',
//     address: 'huo',
//     skill: 'daniu',
//     gender: 1
// };
// var hong = {
//     name: 'hong',
//     address: 'huoyun',
//     skill: '吐火',
//     gender: 1
// };

//model层
// MonsterModel.create(niu, function (err, doc) {
//     if(err){
//         console.error(err);
//     }else {
//         console.log(doc);   //entity 对象
//     }
// });
// userModel.create(niu)
//entity 写入数据
// var userEntity = new userModel(niu);
// // console.log(niuEntity);
// userEntity.save(function () {
//     //IO 异步     回调函数在IO结束之后执行
//     console.log('niu yijing bei cun le');
//
// });
