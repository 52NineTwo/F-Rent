import Home from '@/page/home/Home'
import User from '@/page/user/index'
import Login from '@/page/user/login'
import Loginpassword from '@/page/user/loginpassword'
import Power from '@/page/user/power'
import Register from '@/page/user/register'
import Publish from '@/page/publish/index'
import Atlas from '@/page/atlas/index'
import More from '@/page/more/index'
import keyWord from '@/page/user/keyword'
import BlackList from '@/page/user/blacklist'
import ModifyData from '@/page/user/modifydata'
import CellPhone from '@/page/user/cellphone'
import Follow from '@/page/user/follow'
import HomeIndex from '@/page/index'


export default [
    {
      path: '/',
      redirect:{ path:'/home' },
      component: Home,
    },
    {
      path: '/index',
      name: '首页四栏',
      component: HomeIndex,
      children: [
        {
          path: '/home',
          name: '主页',
          component: Home
        },
        {
          path: '/atlas',
          name: '图集',
          component: Atlas
        },
        {
          path: '/more',
          name: '更多',
          component: More
        },
        {
          path: '/user',
          name: '个人中心',
          component: User,
        },
      ]
    },
    {
      path: '/user/power', 
      component: Power, 
      name: '发布权限'
    },
    {
      path: '/user/keyword', 
      component: keyWord, 
      name: '关键词过滤'
    },
    {
      path: '/user/blacklist', 
      component: BlackList, 
      name: '黑名单'},
    {
      path: '/user/modifydata', 
      component: ModifyData, 
      name: '修改资料'
    },
    {
      path: '/user/cellphone', 
      component: CellPhone, 
      name: '手机绑定'
    },
    {
      path: '/user/follow', 
      component: Follow, 
      name: '关注的人'
    },
    { 
      path: '/login', 
      component: Login, 
      name: '登录',
      children: [
        {path: '/loginpassword', component: Loginpassword, name: '登录-密码'},
        {path: '/register', component: Register, name: '注册'}
      ]
    },
    {
      path: '/publish',
      name: '发布',
      component: Publish
    },
  ]