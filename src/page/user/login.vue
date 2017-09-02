<template>
    <div class="Login-Body">
        <mu-appbar :title="Title_Data" class="Top-Class" titleClass="titleClass">
            <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="RouterOne" />
        </mu-appbar>
        <div class="input-class">
            <mu-paper v-bind:class="['demo-paper-two',{'demo-paper-one': UserIcon}]" circle :zDepth="3">
                <mu-avatar v-bind:class="[{'Login-Button-Two': UserIcon}]" src="http://image.heitem.com/20170902150430709426046.jpg" />
            </mu-paper>
            <mu-text-field iconClass="Phone-Input" style="color:#fff" :label="phoneLaBel" v-model="PhoneValue" @change="PhoneLaBel" type="number" icon="phone_iphone" labelFloat fullWidth/>
            <router-view></router-view>
            <mu-raised-button @click="login()" :label="LoginBtn" v-bind:class="['Login-Button-One',{'Login-Button-Two': LoginEnd}]" secondary fullWidth/>
        </div>  
        <mu-snackbar v-if="toast" message="请输入正确手机号(demo输入11位即可)" action="确定" @actionClick="hideToast" @close="hideToast"/>
    </div>
</template>

<script>
export default {
  data () {
    return {
      PhoneValue: '',
      phoneLaBel: '请输入您的手机号',
      LoginBtn: '下一步',
      LoginEnd: false,
      UserIcon: true,
      toast: false,
      Title_Data: '',
    }
  },
  created(){
      this.LoginEnd = (this.$route.path != '/login' && true) || false;
      if(this.$route.path === '/loginpassword'){
          this.Title_Data = '登录';
      }else if(this.$route.path === '/loginpassword'){
          this.Title_Data = '注册';
      }
      this.PhoneValue = JSON.parse(sessionStorage.getItem("PhoneNumber"));
      this.phoneLaBel = '';
  },
  watch: {
      PhoneValue(curVal,oldVal){
          console.log(this.PhoneValue.length)
          if(this.PhoneValue.length >= '11'){
              this.UserIcon = false;
          }else{
              this.UserIcon = true;
          }
      }
  },
  methods: {
      PhoneLaBel () {
          this.phoneLaBel = ' ';
      },
      login () {
          if(this.PhoneValue.length >= '11'){
              if(this.PhoneValue.length > '11'){
                    this.LoginEnd = true;
                    this.$store.commit('LoginPhone',this.PhoneValue)
                    this.$router.push('/register');
                }else{
                    this.LoginEnd = true;
                    this.$store.commit('LoginPhone',this.PhoneValue)
                    this.$router.push('/loginpassword');
                }
          }else{
              this.toast = true
              if (this.toastTimer) clearTimeout(this.toastTimer)
              this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
          }
      },
      hideToast () {
        this.toast = false
            if (this.toastTimer) clearTimeout(this.toastTimer)
      },
      RouterOne(){
          this.UserIcon = true;
          this.LoginEnd = false;
          this.$router.go(-1);
      },
  }
}
</script>
<style lang="less">
    .mu-text-field-content input{
        color: #fff;
    }
    .titleClass{
        text-align:center;
        font-size: 1.15em;
        margin-right: 15.2%;
    }
</style>
<style scoped lang="less">
    .Login-Body{
        background-color:#474a4f;
        height: 100vh;
    }
    .input-class{
        text-align:center;
        padding: 0 2em 0 1em;
        background-color:#474a4f;
    }
    .Phone-Input{
        color: #ffffff;
    }
    .top-button-icon{
        background-color:#474a4f;
        color: #ffffff;
    }
    .Login-Button-One{
        margin-top: 2em;
        width:96%;
        margin-left:4%;
    }
    .Login-Button-Two{
        display: none;
    }
    .demo-paper-two {
        display: inline-block;
        height: 100px;
        width: 100px;
        margin: 20px;
        text-align: center;
        background-color: #474a4f;
    }
    .demo-paper-one{
        display: inline-block;
        height: 100px;
        width: 100px;
        margin: 20px;
        text-align: center;
        background-color: #474a4f;
        display: none;
    }
    .demo-paper-two .mu-avatar{
        height: 100px;
        width: 100px;
    }
</style>