<template>
<div>
    <mu-card style="width: 640px;margin: 0 auto;padding: 1rem;margin-bottom:1rem;">
        <mu-card-title title="绑定手机" subTitle="绑定手机号可增加账号安全"/>
        <mu-text-field :label="phoneLaBel" v-model="PhoneValue" @change="Phone_LaBel" type="number" icon="phone_iphone" labelFloat fullWidth/>
        <mu-text-field :label="VeriCodeLaBel" v-model="VeriCode" @change="VeriCode_LaBel" type="number" icon="phonelink_lock"  labelFloat fullWidth />
        <mu-flat-button  :label="VeriCodeBtnLaBel" class="VeriCodeBtn" @click="getCode()" primary fullWidth />
        <mu-raised-button label="保存" class="BlackList-Btn" to="/user" backgroundColor="rgb(244, 67, 54)" fullWidth/>
    </mu-card>
</div>
</template>
<script>
    export default {
    data () {
        return {
            phoneLaBel: '请输入手机号码',
            VeriCodeLaBel: '请输入验证码',
            VeriCode: '',
            PhoneValue: '',
            show: true,
            count: '',
            VeriCodeBtnLaBel: '获取验证码',
            timer: null,
        }
    },
    methods: {
        Phone_LaBel () {
          if(this.PhoneValue.length > '1'){
              this.phoneLaBel = ' ';
          }else{
              this.phoneLaBel = '请输入手机号码';
          }
        },
        VeriCode_LaBel () {
            if(this.VeriCodeLaBel.length > '1'){
                this.VeriCodeLaBel = ' ';
            }else{
                this.VeriCodeLaBel = '请输入您的验证码';
            }
        },
        getCode(){
          if(this.show === true){
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
    },
    }

</script>
<style scoped lang="less">
    .KeyWord-TopInput{
        width: 100%;
        background-color: #fff;
    }
    .BlackList-Btn{
        margin-top: 2em;
        width:96%;
        margin-left:2%;
    }
    .VeriCodeBtn{
        margin-top: -4em;
        float:right;
    }
</style>