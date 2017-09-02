<template>
    <div>
        <mu-text-field :label="PassWordLaBel" v-model="PassWordValue" @change="PassWord_LaBel" type="number" icon="lock_outline" labelFloat fullWidth/>
        <mu-raised-button @click="login()" :label="LoginBtn" class="Login-Button-One" secondary fullWidth/>
        <mu-snackbar v-if="toast" message="请输入密码(demo随便输入)" action="确定" @actionClick="hideToast" @close="hideToast"/>
    </div>
</template>

<script>
export default {
  data () {
    return {
      PassWordValue: '',
      PassWordLaBel: '请输入您的密码',
      LoginBtn: '登录',
      toast: false,
      PhoneNumber: '',
    }
  },
  mounted() {
  },
  created() {
      this.PhoneNumber = JSON.parse(sessionStorage.getItem("PhoneNumber"));
  },
  methods: {
      PassWord_LaBel () {
          this.PassWordLaBel = ' ';
      },
      RouterOne(){
          this.$router.go(-1);
      },
      login() {
          if(this.PassWordValue.length < '1'){
              this.toast = true
              if (this.toastTimer) clearTimeout(this.toastTimer)
              this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
          }else{
              this.$store.commit('LoginPhone',this.PhoneNumber)
              this.$router.push('/user');
          }
      },
      hideToast () {
        this.toast = false
            if (this.toastTimer) clearTimeout(this.toastTimer)
        }
  }
}
</script>
<style>
</style>