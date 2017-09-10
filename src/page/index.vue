<template>
<div>
    <router-view></router-view>
    <mu-popup position="bottom" popupClass="Login-popup-bottom" :open="LoginBottom" @close="LoginBottomClose">
        <mu-content-block class="Login-Bottom">
            <mu-flat-button label="关闭" icon="clear" class="Login-Bottom-Close" @click="LoginBottomClose" /><Br />
            <div class="Login-Bottom-Icon">
                <img src="http://image.heitem.com/20170831150415275915317.png">
            </div>
            <mu-sub-header style="color:#ff5252">系统检测您暂未登录，请输入手机号进行下一步操作！</mu-sub-header>
            <mu-sub-header>输入11位进入登录页，输入12位进入注册页！</mu-sub-header>
            <mu-text-field iconClass="Phone-Input" v-model="PhoneNumber" type="number" icon="phone_iphone" labelFloat fullWidth/>
            <mu-raised-button label="下一步" @click="login" secondary fullWidth />
        </mu-content-block>
    </mu-popup>
    <mu-snackbar v-if="toast" :message="indexToast" action="确定" @actionClick="hideToast" @close="hideToast"/>
    <mu-paper class="Bottom-Nav-Class">
    <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="home" title="主页" icon="home" to="/home" />
        <mu-bottom-nav-item value="exhibition" title="展集" icon="collections" to="/exhibition" />
        <mu-float-button icon="add" @click="PuBliSh" />
        <mu-bottom-nav-item value="more" title="更多" icon="explore" to="more"  />
        <mu-bottom-nav-item value="user" title="我" icon="account_circle" />
    </mu-bottom-nav>
    </mu-paper>
    <div class="seize-seat-bottom"></div>
</div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'home',
      LoginBottom: false,
      PhoneNumber: '',
      toast: false,
      indexToast: '',
    }
  },
  computed: {
      PhoneValue () {
          return this.$store.state.UserPhone;
      }
  },
  watch: {
      "$route": "BottomActive",
  },
  created() {
      this.BottomActive();
  },
  methods: {
    handleChange (val) {
        if(val === 'user'){
            this.GoUser();
        }else{
            this.bottomNav = val
        }
    },
    PuBliSh (){
        console.log(this.PhoneValue)
        if(this.PhoneValue.length < '11'){
            this.LoginBottom = true;         
        }else{
            this.$router.push('/publish')
        }
    },
    GoUser (){
        if(this.PhoneValue.length < '11'){
            this.LoginBottom = true;
        }else{
            this.$router.push('/user')
        }
    },
    login () {
        axios.get('/login?phone=' + this.PhoneNumber)
        .then(res => {
            if(res.status === 200){
                console.log(res.data.data)
                sessionStorage.setItem("User_Data", JSON.stringify(res.data.data));
            }
        })
        if(this.PhoneNumber.length >= '11'){
            if(this.PhoneNumber.length > '11'){
                this.indexToast = '您还未注册，即将前往注册页';
                this.IndexToastOpen();
                sessionStorage.setItem('PhoneNumber', JSON.stringify(this.PhoneNumber))
                setTimeout(() => { this.$router.push('/register');}, 2000)
            }else{
                this.indexToast = '欢迎回来，即将前往登录页';
                this.IndexToastOpen();
                sessionStorage.setItem('PhoneNumber', JSON.stringify(this.PhoneNumber))
                setTimeout(() => {this.$router.push('/loginpassword');}, 2000)
                
            }
        }else{
            this.indexToast = '请输入正确手机号';
            this.IndexToastOpen();
        }
    },
    IndexToastOpen(){
        this.toast = true
        if (this.toastTimer) clearTimeout(this.toastTimer)
        this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
    },
    BottomActive(){
        const routePath = this.$route.path;
        this.bottomNav = (routePath === '/home' && 'home') || (routePath === '/exhibition' && 'exhibition') || (routePath === '/more' && 'more') || (routePath === '/user' && 'user')
        console.log(this.bottomNav)
    },
    LoginBottomOpen(){
        this.LoginBottom = true
    },
    LoginBottomClose(){
        this.LoginBottom = false
    },
    hideToast () {
        this.toast = false
            if (this.toastTimer) clearTimeout(this.toastTimer)
    },
  }
}
</script>
<<style lang="less">
    .mu-text-field-content input{
        color: #fff;
    }
    .mu-bottom-item-active .mu-buttom-item-wrapper .mu-bottom-item-icon,.mu-bottom-item-active .mu-buttom-item-wrapper .mu-bottom-item-text{
        color: #ff5252;
    }
    .Login-popup-bottom{
        margin-bottom: 56px;
        width:100%;
        background-color: #474a4f !important;
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
    .Login-Bottom{
        text-align: center;
    }
    .Login-Bottom-Close{
        position:fixed;
        top: 0;
        right: 0;
        table-layout: fixed;
        color: #9e9e9e;
    }
    .Login-Bottom-Icon{
        display: inline-block;
        margin: 0.5em;
        height: 5em;
        width: 5em;
        border-radius:100px;
        border:2px solid #fff;
        background-color: #fff
    }
    .Login-Bottom-Icon img{
        width: 100%;
    }
    .mu-sub-header{
        line-height: 1.5em !important;
        padding: 1em 0 1em 0;
    }
</style>