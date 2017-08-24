<template>
    <div>
        <mu-text-field :label="VeriCodeLaBel" v-model="VeriCode" @change="VeriCode_LaBel" type="number" icon="phonelink_lock" labelFloat fullWidth/>
        <mu-text-field :label="PassWordLaBel" v-model="PassWordValue" @change="PassWord_LaBel" type="number" icon="lock_outline" labelFloat fullWidth/>
        <mu-raised-button @click="login()" :label="LoginBtn" class="Login-Button-One" secondary fullWidth/>
        <mu-snackbar v-if="toast" message="验证码错误(demo输入六位即可)" action="确定" @actionClick="hideToast" @close="hideToast"/>
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
      toast: false,
      registertoast: false,
    }
  },
  mounted() {
  },
  computed: {
      PhoneValue () {
          return this.$store.state.UserPhone;
      },
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
          if(this.PhoneValue.length >= '11' && this.VeriCode.length > '1' && this.PassWordValue.length > '1'){
              if(this.VeriCode.length < '6'){
                  this.toast = true
                  if (this.toastTimer) clearTimeout(this.toastTimer)
                  this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
              }else{
                  this.$router.push('/user')
              }
          }else{
              this.registertoast = true
              if (this.toastTimer) clearTimeout(this.toastTimer)
              this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
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
<style>
</style>