##前言
>本项目是基于Vue2、Vuex、Muse-UI、es6、webpack构建的一个租房社区Demo
>
>开发环境 Macos + Vs code + Chrome
>>项目的灵感最初是来源于 剑网三 - 海鳗插件社区(匿名游戏交友平台)
>>
>>由于我是一个宅男在杭州没什么朋友 加上刚来杭州时想租一个适合自己的房子很难 所以想到做这么一个Demo
>>
>>在做初型时由于没有UI设计稿和原型图，想到一部分做一部分 所以初版采用了Muse-UI框架先完成大体视图 后续再进行逐个代码重写以及组件开发 
>>
>>此Demo虽说不是什么复杂有高技术含量的项目，但也是我一点心中所想，所以此项目会长期跟进 不定期进行新功能添加和代码逻辑重构。
>>

##技术栈
*  Vue2			[GitHub地址](https://github.com/vuejs/vue)
*  Vuex			[GitHub地址](https://github.com/vuejs/vuex)
*	Vue-router	[GitHub地址](https://github.com/vuejs/vue-router)
*	axios			[GitHub地址](https://github.com/mzabriskie/axios)
*	Muse-ui		[GitHub地址](https://github.com/museui/muse-ui)
*	Mcok.js		[GitHub地址](https://github.com/nuysoft/Mock)
*	Vue-lazyload(图片懒加载组件)[GitHub地址](https://github.com/hilongjw/vue-lazyload)

  ###关于在线数据接口
  感谢大搜车团队开放的模拟数据的在线Mock服务：[Easy-Mock](http://www.easy-mock.com/)

##使用项目
```bash
1.克隆项目:		git clone git@github.com:52NineTwo/F-Rent.git
2.安装依赖:		npm install
3.启动服务:		npm run dev
4.发布代码:		npm run build
```

##目标功能
- [x] 首页
 	- [x] 列表，上拉加载
 	- [x] 求租列表(待改进)
 	- [x] 出租列表(待改进)
 	- [x] 闲置列表(待改进)
- [x] 主题详情，回复，点赞
- [x] 消息列表
- [x] 消息提醒
- [x] 消息标记为已读
- [x] 个人主页
- [x] 用户信息
- [x] 登录
- [x] 退出
- [x] 关于
- [x] 页面后退，数据还原
- [x] 页面后退，滚动位置还原
- [x] ajax请求拦截器
- [x] 页面跳转，不再执行此页面的ajax请求回调方法
- [x] 启动图
