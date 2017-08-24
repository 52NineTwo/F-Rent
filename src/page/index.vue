<template>
<div>
    <router-view></router-view>
<mu-paper class="Bottom-Nav-Class">
  <mu-bottom-nav :value="bottomNav" @change="handleChange">
    <mu-bottom-nav-item value="home" title="主页" icon="home" to="/home" />
    <mu-bottom-nav-item value="favorites" title="图集" icon="collections" to="/atlas" />
    <mu-float-button icon="add" class="demo-float-button" @click="PuBliSh" />
    <mu-bottom-nav-item value="nearby" title="更多" icon="shop_two" @click="InItToast"  />
    <mu-bottom-nav-item value="user" title="我" icon="account_circle" to="/user" />
  </mu-bottom-nav>
</mu-paper>
<mu-snackbar v-if="IndexToast" message="正在努力码代码中....." action="确定" @actionClick="InDexhideToast" @close="InDexhideToast"/>
<div class="seize-seat-bottom"></div>
</div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'home',
      IndexToast: false,
    }
  },
  computed: {
      PhoneValue () {
          return this.$store.state.UserPhone;
      }
  },
  created() {
      const routePath = this.$route.path;
      this.bottomNav = (routePath === '/home' && 'home') || (routePath === '/favorites' && 'favorites') || (routePath === '/nearby' && 'nearby') || (routePath === '/user' && 'user')
      console.log(this.bottomNav)
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    },
    PuBliSh (){
        console.log(this.PhoneValue)
        if(this.PhoneValue.length < '11'){
            this.$router.push('/login')
            this.$router.go(0);
        }else{
            this.$router.push('/publish')
            this.$router.go(0);
        }
    },
    InDexhideToast () {
        this.IndexToast = false
            if (this.toastTimer) clearTimeout(this.toastTimer)
    },
    InItToast (){
        this.IndexToast = true
        if (this.toastTimer) clearTimeout(this.toastTimer)
        this.toastTimer = setTimeout(() => { this.IndexToast = false }, 2000)
    }
  }
}
</script>
<<style lang="less">
    .mu-bottom-item-active .mu-bottom-item-icon,.mu-bottom-item-active .mu-bottom-item-text{
        color: #ff5252;
    }
</style>

<style scoped lang="less">
    .Bottom-Nav-Class{
        position:fixed;
        width: 100%;
        bottom: 0;
        table-layout: fixed;
    }
    .mu-bottom-nav{
        background-color: #474a4f;
    }
    .seize-seat-bottom{
        margin-top: 56px;
        height: 0.5em;
    }
    .mu-buttom-item{
        color: #fff;
    }
</style>