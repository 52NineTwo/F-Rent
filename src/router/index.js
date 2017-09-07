import Home          from '@/page/home/Home'
import User          from '@/page/user/index'
import Login         from '@/page/user/login'
import Loginpassword from '@/page/user/loginpassword'
import Power         from '@/page/user/power'
import Register      from '@/page/user/register'
import Publish       from '@/page/publish/index'
import Atlas         from '@/page/atlas/index'
import More          from '@/page/more/index'
import keyWord       from '@/page/user/keyword'
import BlackList     from '@/page/user/blacklist'
import ModifyData    from '@/page/user/modifydata'
import CellPhone     from '@/page/user/cellphone'
import Follow        from '@/page/user/follow'
import HomeIndex     from '@/page/index'
import UserIssUe     from '@/page/user/Userissue'
import DiscUss       from '@/page/user/discuss'
import DiscoVer      from '@/page/more/discover'
import MoreLaBel     from '@/page/more/label'
import InforMation   from '@/page/more/information'
import RanKing       from '@/page/more/ranking'
import OthErs        from '@/page/others/index'

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
        {path: '/home',name: '主页', component: Home},
        {path: '/atlas',name: '图集',component: Atlas},
        {path: '/more',name: '更多',component: More},
        {path: '/user',name: '个人中心',component: User,},
        {path: '/others/:name', name: '其他人的资料' ,component: OthErs}
      ]
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
    {path: '/user/power',       name: '发布权限',    component: Power},
    {path: '/user/keyword',     name: '关键词过滤',  component: keyWord},
    {path: '/user/blacklist',   name: '黑名单',      component: BlackList},
    {path: '/user/modifydata',  name: '修改资料',    component: ModifyData},
    {path: '/user/cellphone',   name: '手机绑定',    component: CellPhone},
    {path: '/user/follow',      name: '关注的人',    component: Follow},
    {path: '/publish',          name: '发布',       component: Publish},
    {path: '/user/userissue',   name:'我相关的',     component: UserIssUe,},
    {path: '/user/discuss',     name: '我的评论',    component: DiscUss},
    {path: '/more/discover',    name: '发现',        component: DiscoVer},
    {path: '/more/information', name: '收到的评论',   component: InforMation},
    {path: '/more/label',       name: '分类及标签',   component: MoreLaBel},
    {path: '/more/ranking',     name: '数据排行榜',   component: RanKing},
  ]