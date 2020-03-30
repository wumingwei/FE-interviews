## FE-interviews

### 面试指南系列文章

#### 写在前面

##### 从事前端开发 4 年有余，越发感觉到前端知识的快速更新，特总结以下常考的高频面试题，一方面用于自己总结巩固；另一方面希望帮到大家。

#### JS 面试系利目录：

- [x] [常用数据类型](./docs/1.md)
- [ ] [类型隐式转换有哪些？](./docs/2.md)
- [ ] [Symbol 是什么，具体如何使用?](./docs/3.md)
- [ ] [如何消除魔术字符串现象？](./docs/4.md)
- [ ] [数组常用方法](./docs/5.md)
- [ ] [手写数组去重的几种实现](./docs/6.md)
- [ ] [如何将多维数组转换为一维数组，手写几种实现？](./docs/7.md)
- [ ] [filter(),map(),forEach(),sort(),reduce(),some(),every()的使用以及区别](./docs/8.md)
- [ ] [bind 与 apply 的实现以及具体应用](./docs/9.md)
- [ ] [实现对象的浅拷贝与深拷贝](./docs/10.md)
- [ ] [object 继承、原型、原型链](./docs/fe-interview2/11.md)
- [ ] [构造函数与普通函数的区别？](./docs/12.md)
- [ ] [原生 ajax 的实现](./docs/13.md)
- [ ] [什么是 Promise?](./docs/14.md)
- [ ] [手写 Promise 的实现](./docs/15.md)
- [ ] [实现 Promise 的 ajax、Promise.all()、Promise.race()](./docs/16.md)
- [ ] [使用过 axios 吗？简述常用几种 axios 请求方式？](./docs/17.md)
- [ ] [axios 的拦截器的具体应用](./docs/18.md)
- [ ] [简述 Async 与 Await 的原理，以及具体使用](./docs/19.md)
- [ ] [如何解决跨域问题？](./docs/20.md)
- [ ] [什么是防抖与节流？](./docs/21.md)
- [ ] [手写防抖与节流函数](./docs/22.md)
- [ ] [什么是模块化与组件化？](./docs/23.md)
- [ ] [简述模块化的发展历程？](./docs/24.md)
- [ ] [AMD、CMD、CommonJS、ES6 模块化的区别，以及如何使用？](./docs/25.md)
- [ ] [export 是什么？](./docs/26.md)
- [ ] [模块化在项目中如何使用？](./docs/27.md)
- [ ] [使用过设计模式吗？](./docs/28.md)
- [ ] [常用的设计模式有哪些？](./docs/29.md)
- [ ] [简述工厂模式与建造者模式的区别？](./docs/30.md)
- [ ] [如何实现单例模式？](./docs/31.md)
- [ ] [简述什么是函数式编程？](./docs/32.md)
- [ ] [什么是柯里化？手写柯里化函数的实现](./docs/33.md)
- [ ] [什么是迭代器？](./docs/34.md)
- [ ] [Iterator 的遍历与 for 循环遍历还有什么区别？](./docs/35.md)
- [ ] [递归与迭代有什么区别？](./docs/36.md)
- [ ] [什么是 Generator?](./docs/37.md)
- [ ] [ES6 有哪些特性？具体使用过哪些？](./docs/38.md)
- [ ] [介绍 ES6 中 set 与 map](./docs/39.md)
- [ ] [什么是尾递归？](./docs/40.md)
- [ ] [手写尾递归的实现](./docs/41.md)
- [ ] [尾递归的优点？](./docs/42.md)
- [ ] [常用的几种鉴权方式？](./docs/43.md)
- [ ] [简述微信的 OAuth 2.0](./docs/44.md)
- [ ] [简述微信网页鉴权原理，以及具体实现](./docs/45.md)
- [ ] [什么是单点登陆，如何实现单点登陆？](./docs/46.md)
- [ ] [简述几种浏览器的缓存，以及基本应用](./docs/47.md)
- [ ] [Vue 的响应式原理](./docs/48.md)
- [ ] [Vue 的数据绑定](./docs/49.md)
- [ ] [项目中的数据是如何管理的？](./docs/50.md)
- [ ] [简述 flux 原理](./docs/51.md)
- [ ] [Vuex 的原理什么？如何把实现一个简单的 store 模式](./docs/52.md)
- [ ] [常用的打包工具？简述 webpack 的原理，以及基本配置](./docs/53.md)
- [ ] [如何解决 webpack 打包慢问题？](./docs/54.md)
- [ ] [webpack 的 loader 与 plugins 有什么区别？](./docs/55.md)
- [ ] [常用的 webpack 插件 plugins 有哪些？](./docs/56.md)
- [ ] [web 端的权限，技术如何实现？](./docs/57.md)
- [ ] [Vue-router 有哪些 api,如何在项目中使用 Vue-router 以及相关配置？](./docs/58.md)
- [ ] [Vue-router 的 hash 模式与 history 模式是什么?两者的区别？如何分别使用两种模式？](./docs/59.md)
- [ ] [如何优化项目？具体有哪些策略？](./docs/60.md)
- [ ] [什么是 ssr 与 csr?如何实现 ssr？](./docs/61.md)
- [ ] [实现一个 node 中间件](./docs/62.md)
- [ ] [express 源码读过吗？express 的具体代码实现](./docs/63.md)
- [ ] [介绍 koa 原理，手写 koa 最小服务](./docs/64.md)
- [ ] [web 与小程序的区别？](./docs/65.md)
- [ ] [在项目中,是如何组织路由管理的？](./docs/66.md)

> 上述面试题原文文档按序在 ./docs/ 下面；
>
> 文中代码在./codes/ 下，如有需要，欢迎 fork,下载；
>
> 欢迎关注我，辛苦小手送个 star 吧！🙂😊😊

### 微信公众号：前端开发那些事儿，欢迎关注！

![微信开发那些事儿](https://s1.ax1x.com/2020/03/30/GnwTeI.gif)
