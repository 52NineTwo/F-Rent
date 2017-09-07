<template>
    <div>
        <mu-text-field style="color:#fff" :label="VeriCodeLaBel" v-model="VeriCode" @change="VeriCode_LaBel" type="number" icon="phonelink_lock"  labelFloat fullWidth />
        <mu-flat-button  :label="VeriCodeBtnLaBel" class="VeriCodeBtn" @click="getCode()" primary fullWidth />
        <mu-text-field style="color:#fff" :label="PassWordLaBel" v-model="PassWordValue" @change="PassWord_LaBel" type="password" icon="lock_outline" labelFloat fullWidth/>
        <mu-raised-button @click="login()" :label="LoginBtn" class="Login-Button-One" secondary fullWidth/>
        <mu-snackbar v-if="VeriCodetoast" message="验证码错误(demo输入六位即可)" action="确定" @actionClick="hideToast" @close="hideToast"/>
        <mu-snackbar v-if="registertoast" message="请填入所有信息(demo随便输入)" action="确定" @actionClick="hideToast" @close="hideToast"/>
    </div>
</template>

<script>
export default {
  data () {
    return {
      PassWordValue: '',
      VeriCode: '',
      VeriCodeLaBel: '请输入您的验证码',
      PassWordLaBel: '请输入您的密码',
      LoginBtn: '注册',
      VeriCodetoast: false,
      registertoast: false,
      show: true,
      count: '',
      VeriCodeBtnLaBel: '获取验证码',
      timer: null,
      PhoneNumber: '',
    }
  },
  created(){
      this.PhoneNumber = JSON.parse(sessionStorage.getItem("PhoneNumber"));
      setTimeout(() => {this.getCode()},1000)
  },
  methods: {
      PassWord_LaBel () {
          if(this.PassWordLaBel.length > '1'){
              this.PassWordLaBel = ' ';
          }else{
              this.PassWordLaBel = '请输入您的密码';
          }
      },
      VeriCode_LaBel () {
          if(this.VeriCodeLaBel.length > '1'){
              this.VeriCodeLaBel = ' ';
          }else{
              this.VeriCodeLaBel = '请输入您的验证码';
          }
      },
      RouterOne(){
          this.$router.go(-1);
      },
      login() {
          console.log(this.PhoneNumber.length)
          if(this.PhoneNumber.length >= '11' && this.VeriCode.length > '1' && this.PassWordValue.length > '1'){
              if(this.VeriCode.length < '6'){
                  this.VeriCodetoast = true
                  if (this.toastTimer) clearTimeout(this.toastTimer)
                  this.toastTimer = setTimeout(() => { this.VeriCodetoast = false }, 2000)
              }else{
                  this.$store.commit('LoginPhone',this.PhoneNumber)
                  this.$router.push('/user')
              }
          }else{
              this.registertoast = true
              if (this.toastTimer) clearTimeout(this.toastTimer)
              this.toastTimer = setTimeout(() => { this.registertoast = false }, 2000)
          }
      },
      getCode(){
          if(this.show === true){
              this.$toast.center('验证码发送成功！');
                const TIME_COUNT = '60';
                    if (!this.timer) {
                        this.count = TIME_COUNT;
                        this.show = false;
                        this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                            this.VeriCodeBtnLaBel = this.count + '秒后重试'
                        } else {
                            this.VeriCodeBtnLaBel = '重新获取'
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                        }, 1000)
                    }
              }
        },
      hideToast () {
        this.registertoast = false
        this.toast = false
            if (this.toastTimer) clearTimeout(this.toastTimer)
      }
  }
}
</script>
<style scoped lang="less">
    .VeriCodeBtn{
        margin-top: -3.7em;
        float:right;
    }
    .Login-Button-One{
        margin-top: 2em;
        width:96%;
        margin-left:4%;
    }
</style>