node练习
## tcp/ip 三次握手四次挥手
- syn synchronize 同步
- ack acknowledge 确认
- fin finsh       结束

### 三次握手
1. client端提出请求，有些东西要给server，于是发出syn。
2. sever端收到请求，说同意，并且为了计数拿到的东西，说我们同步一下，我收到一个就跟你对一下，于是发出ack和syn。
3. client收到应答后，说好，就开始发送ack和syn。
......之后开始数据传送。

### 四次挥手
1. client说断开吧，我没话说了， 发出 fin
2. server说好吧，等我把话说完了就断开，发出 ack
3. server说，我话都说完了， 发出 fin
4. client说，好的，bye， 发出ack

本来打算深入的学习一下node，在看了朴灵的《深入浅出node》后，算了，要关注的技术细节太多了，
一个不慎就可能产生重大bug，责任太重，还是前端好点，可以更专注于业务逻辑上，函数式的抽象也能派上用场，
也不太容易出大的bug。

小网站可以用js从前写到后，但如果用一些框架和中间件处理cms和user管理这一块，可以更快速的开发，而且更健壮。

----------------
nodeWords中的express blog项目移到这里，（因为搞忘记用gitignore,把modules都搞上去了，就不再更新了。）
