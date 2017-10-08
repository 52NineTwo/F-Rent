<template>
  <div class="layout">
    <div class="header">
        <div class="header-content">
            <div class="logo">
                友租
            </div>
            <div class="nav">
                <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
                <mu-tab value="Pcindex" title="首页"/>
                <mu-tab value="PcExhibition" title="展集"/>
                <mu-tab value="tab4" title="发现"/>
                </mu-tabs>
            </div>
            <mu-icon-button style="color:#fff;top:4px;margin-right:1rem" icon="notifications"/>
            <mu-avatar @click="handleHover" ref="mumenu" style="position:absolute;top:7px;" slot="left" src="http://image.heitem.com/20170831150415508632988.jpg">
              <mu-menu v-show="TopMenu" class="TopMenu" >
                <mu-menu-item leftIconColor="#fff" to="/PcUser" title="个人中心" leftIcon="account_circle"/>
                <mu-menu-item leftIconColor="#fff" title="我的关注" leftIcon="person_add"/>
                <mu-menu-item leftIconColor="#fff" title="我发布的" leftIcon="edit"/>
                <mu-divider />
                <mu-menu-item leftIconColor="#fff" title="个人设置" leftIcon="settings"/>
                <mu-menu-item leftIconColor="#fff" title="退出登录" leftIcon="power_settings_new"/>
              </mu-menu>
            </mu-avatar>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeTab: 'Pcindex',
      activeList: 'list1',
      TopMenu: false,
      TopMenuClassLeft: '',
      content_class: 'content',
    }
  },
  mounted(){
  },
  methods: {
    handleHover () {
      this.TopMenu = !this.TopMenu;
    },
    handleTabChange (val) {
      this.activeTab = val
      this.$router.push('/' + val);
    },
    handleListChange (val) {
      this.activeList = val
    }
  }
}
</script>
<style lang="less">
.mu-menu-item-wrapper{
  color: #fff !important;
}
</style>
<style scoped lang="css">
html,body{height: 100% !important;}
.layout{
    height:100%;
}
.header-content{
    max-width: 960px;
    margin: 0 auto;
}
.header{
    background-color: #474a4f;
    position: fixed;
    top: 0px;
    width:100%;
    z-index: 100;
}
.logo{
  font-size: 24px;
  color: white;
  display: inline-block;
  padding: 5px 20px;
  width: 150px;
  text-align:center;
}

.nav{
  display: inline-block;
  width: calc(100% - 278px);
  margin: 0 auto;
}

.tab{
  margin: 0 auto;
  width: 400px;
}
.breadcrumb{
  margin: 10px 0;
}
.TopMenu{
  background-color: #474a4f;
  position: absolute;
  top: 48px;
}
hr{
  background-color: #9e9e9e
}
</style>