## 前言
>本项目是基于Vue2、Vuex、Muse-UI、es6、webpack构建的一个租房社区Demo
>
>[项目更新历史] (##更新)
>
>开发环境 Macos + Vs code + Chrome
>>项目的灵感最初是来源于 剑网三 - 海鳗插件社区(匿名游戏交友平台)
>>
>>由于我是一个宅男在杭州没什么朋友 加上刚来杭州时想租一个适合自己的房子很难 所以想到做这么一个Demo
>>
>>在做初型时由于没有UI设计稿和原型图，想到一部分做一部分 所以初版采用了Muse-UI框架先完成大体视图 后续再进行逐个代码重写以及组件开发 
>>
>>此Demo虽说不是什么复杂有高技术含量的项目，但也是我一点心中所想，所以此项目会长期跟进 进行新功能添加和代码逻辑重构。
>>

## 技术栈
*  Vue2			[GitHub地址](https://github.com/vuejs/vue)
*  Vuex			[GitHub地址](https://github.com/vuejs/vuex)
*	Vue-router	[GitHub地址](https://github.com/vuejs/vue-router)
*	axios			[GitHub地址](https://github.com/mzabriskie/axios)
*	Muse-ui		[GitHub地址](https://github.com/museui/muse-ui)
*	Mcok.js		[GitHub地址](https://github.com/nuysoft/Mock)
*	Vue-lazyload(图片懒加载组件)[GitHub地址](https://github.com/hilongjw/vue-lazyload)

  ### 关于在线数据接口
  感谢大搜车团队开放的模拟数据的在线Mock服务：[Easy-Mock](http://www.easy-mock.com/)

## 使用项目
```bash
1.克隆项目:		git clone git@github.com:52NineTwo/F-Rent.git
2.安装依赖:		npm install
3.启动服务:		npm run dev
4.发布代码:		npm run build
```

## 功能
- [x] 首页
 	- [x] 列表，上拉加载(完成)
 	- [x] 求租列表(待改进)
 	- [x] 出租列表(待改进)
 	- [x] 闲置列表(待改进)
- [x] 图集(此模块待更新)
- [ ] 详情页(未完成)
- [x] 发布(待改进)
- [ ] 更多
	- [x] 收到的评论(完成)
	- [x] 分类及标签(完成)
	- [x] 数据排行榜(完成)
	- [ ] 发现(未完成)
	- [ ] 更多模块(等待脑细胞复活)
- [ ] 个人中心(无后台功能受限)
	- [ ] 逻辑需改进
	- [x] 修改资料(待改进)
	- [x] 关注(完成)
	- [x] 收藏(完成)
	- [x] 点赞(完成)
	- [x] 发布的帖子(完成)
	- [x] 发布的评论(完成)
	- [x] 手机绑定(完成)
	- [x] 黑名单(完成)
	- [x] 关键词过滤(完成)
	- [ ] 发布权限(未完成)
- [x] 登录注册(无后台功能受限)
	- [x] 登录首页(完成)
	- [x] 登录(完成)
	- [x] 注册(完成)

	
## 目标
>构建一个前后端、WebApp、微信公众号完整项目
>
>敬请期待！！！

## 截图

## 项目目录说明
<pre>
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // 图片资源
│   ├── components     // 各种组件
│   ├── page	       // 页面
│   │   ├── atlas
│   │   │   ├── index.vue                  // 图集
│   │   ├── home
│   │   │   ├── home.vue                   // 主页
│   │   ├── more                 
│   │   │   └── discover.vue               // 发现
│   │   │   └── index.vue                  // 更多 - 主页
│   │   │   └── information.vue            // 收到的评论
│   │   │   └── label.vue                  // 类别及标签
│   │   │   └── ranking.vue                // 数据排行榜
│   │   ├── publish                 
│   │   │   └── index.vue                  // 发布
│   │   ├── user                 
│   │   │   └── blacklist.vue              // 黑名单
│   │   │   └── cellphone.vue              // 绑定手机
│   │   │   └── discuss.vue                // 发布的评论
│   │   │   └── follow.vue                 // 我关注的人
│   │   │   └── index.vue                  // 个人中心 - 主页
│   │   │   └── keyword.vue                // 关键词过滤
│   │   │   └── login.vue                  // 登录注册 - 主页
│   │   │   └── loginpassword.vue          // 登录注册 - 登录
│   │   │   └── modifydata.vue             // 修改资料
│   │   │   └── register.vue               // 登录注册 - 注册
│   │   │   └── Userissue.vue              // 发布的帖子、点赞、收藏、关注人的话题
│   │   ├── index.vue                      // 底部四栏
│   ├── router	        // 路由配置文件
│   ├── vuex	       	// vuex配置文件
│   ├── App.vue         // 主页面 
│   └── main.js         // Webpack 预编译入口
</pre>

## 更新
#### 2017-8-30
>首次将此项目代码更新到GitHub
>>开发周期: 一周(晚上饭后到睡前码)
>>
>>由于是初型代码逻辑以及结构比较乱，已经有下次的更新规划了。
>>> 1.使用Vuex进行登录状态验证.
>>> 
>>> 2.将项目中使用率较高的组件比如地区选择等封装成单组件.
>>> 
>>> 3.图集页更换新的模块以及呈现方式.
>>> 
>>> 4.代码逻辑以及结构优化.
