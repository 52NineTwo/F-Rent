import Home          from '@/page/home/Home'
import User          from '@/page/user/index'
import Login         from '@/page/user/login'
import Loginpassword from '@/page/user/loginpassword'
import Power         from '@/page/user/power'
import Register      from '@/page/user/register'
import Publish       from '@/page/publish/index'
import Atlas         from '@/page/Exhibition/atlas'
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
import exhibition    from '@/page/Exhibition/home'
import Topic         from '@/page/Exhibition/topic'
import DetaIls       from '@/page/home/details'

import PCindex         from '@/page/PC/index'
import PcHome          from '@/page/PC/home/home'
import PcHomeColligate from '@/page/PC/home/colligate'
import PcHomeArent     from '@/page/PC/home/Arent'
import PcHomeroommate  from '@/page/PC/home/roommate'
import PcHomeseekrent  from '@/page/PC/home/seekrent'
import PcHomeDetails   from '@/page/PC/home/details'
import PcExhibition    from '@/page/PC/Exhibition/Home'
import PcUser          from '@/page/PC/user/index'
import PcUserRelease   from '@/page/PC/user/Release'
import PcReleaseTpl    from '@/page/PC/user/postTplData'
import PcReleaseColl   from '@/page/PC/user/collection'
import PcReleaseComm   from '@/page/PC/user/comments'
import PcReleaseSupp   from '@/page/PC/user/supported'
import PcUserSetting   from '@/page/PC/user/setting'
import PcSettingData   from '@/page/PC/user/Personal'
import PcSettingPhone  from '@/page/PC/user/PhoneContry'
import PcSettingBlack  from '@/page/PC/user/BlackList'
import PcSettingKey    from '@/page/PC/user/keyword'
import PcReleaseFocus  from '@/page/PC/user/Focus'

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
        {path: '/more',name: '更多',component: More},
        {path: '/user',name: '个人中心',component: User,},
        {path: '/others/:name', name: '其他人的资料' ,component: OthErs},
        {path: '/exhibition', name: '展集',component: exhibition}
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
    {path: '/exhibition/atlas', name: '图集',        component: Atlas},
    {path: '/exhibition/topic', name: '本周话题',    component: Topic},
    {path: '/details/:name',    name: '详情页',      component: DetaIls},

    {
      path: '/PCHOME',
      component: PCindex,
      name: '顶部导航',
      children: [
        {
          path: '/Pcindex', 
          redirect:{ path:'/Pcindex/colligate' },
          component: PcHome,
          name: 'IndexLeft',
          children:[
            {path: '/Pcindex/colligate', name: '首页综合', component: PcHomeColligate},
            {path: '/Pcindex/Arent', name: '首页出租', component: PcHomeArent},
            {path: '/Pcindex/roommate', name: '首页室友', component: PcHomeroommate},
            {path: '/Pcindex/seekrent', name: '首页求租', component: PcHomeseekrent},
          ]
        },
        {path: '/PcDetails/:article_id', name: '文章详情页', component: PcHomeDetails},
        {path: '/PcExhibition', name: 'Pc展集页', component: PcExhibition},
        {
          path: '/PcUser',
          name: 'PC个人中心', 
          component: PcUser,
          children: [
            {
              path: '/PcUser/Release', 
              name: '我发布的', 
              redirect:{ path:'/PcUser/Release/Tpl' },
              component: PcUserRelease,
              children: [
                {path: '/PcUser/Release/Tpl', name: '我的文章', component: PcReleaseTpl},
                {path: '/PcUser/Release/Coll', name: '我的收藏', component: PcReleaseColl},
                {path: '/PcUser/Release/Comm', name: 'PC我的评论', component: PcReleaseComm},
                {path: '/PcUser/Release/Supp', name: '我的点赞', component: PcReleaseSupp},
                {path: '/PcUser/Release/Focus', name: '我的关注', component: PcReleaseFocus}
              ]},
            {
              path: '/PcUser/Setting',
              name: '个人设置',
              redirect:{ path:'/PcUser/Setting/data' },
              component: PcUserSetting,
              children:[
                {path: '/PcUser/Setting/data', name: '个人资料', component: PcSettingData},
                {path: '/PcUser/Setting/Phone', name: '修改手机', component: PcSettingPhone},
                {path: '/PcUser/Setting/Black', name: 'PC黑名单', component: PcSettingBlack},
                {path: '/PcUser/Setting/Key', name: 'PC关键词过滤', component: PcSettingKey}
              ],
            }

          ]
        },
      ]
    }
  ]