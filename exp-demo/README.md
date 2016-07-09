上一个版本在`router = express.Router()`这里出错，TypeError: Cannot read property 'use' of undefined。

到google才找到问题，Generator版本是3.x.x, express版本4.x.x，明显不兼容，重新安装来过。

- sudo npm install -g express-generator
- express demo
- cd demo && npm install
- npm start

- 安装bower和bootstrap
- bower init
- touch .bowerrc
- 添加这一行，让bower的组件都安装到这个目录：
- {"directory": "./public/lib"}

删除public下的javascripts和stylesheets文件夹 。

在views中建立header和footer模板

## 调试的时候，有时候会出现模板修改后没有显示没有变化，需要重新启动服务器才行。

------

在reg页面提交的表单数据会放在http报文的entity-body中，而header中的content-type表示了表单数据
的格式，通常是 application/x-www-form-urlencoded。

express会用bodyParser模块解析，然后把消息体放到req.body中，所以我们用req.body就可以得到表单
提交的数据。

## 使用会话中间件
app.js中需要
```
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// use session after bodyParser
app.use(session({
  secret: 'myblog',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    host: 'localhost',
    port: 27017,
    db: 'test',
    url: 'mongodb://localhost/test',
  })
}))
```
