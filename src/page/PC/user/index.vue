<template>
<div>
    <div class="User_Index_Top pc-content" :style="{ backgroundImage: User_Background_Image }" >
        <div class="background"  style="text-align:center;position:relative">
            <mu-paper class="demo-paper-two" circle :zDepth="1">
                <mu-avatar src="http://image.heitem.com/20170831150415508632988.jpg" style="height:123px;width:123px"/>
            </mu-paper>
            <span class="User-Top-Name">溯翎</span>
            <span class="User-Top-profile" v-show="font_input_show">这个人很懒，还什么都没有留下！<mu-icon value="edit" :size="20" @click="Input_Show"/></span>
            <span class="User-Top-profile" v-show="!font_input_show" ><mu-text-field class="input_class_top" value="111" hintText="提示文字"/><mu-flat-button style="margin-left: -88px;color:rgba(255, 255, 255, 0.6)" label="确定" @click="Input_Show"/></span>
        </div>
    </div>
    <div class="User-content-class">
        <div class="User-content-top">
            <mu-float-button icon="edit" @click="User_Content_Button('edit')" :class="['User-Content-Button',{'User-Content-Button-Color': User_Content_Button_Edit }]"/>
            <mu-float-button icon="settings" @click="User_Content_Button('settings')" :class="['User-Content-Button',{'User-Content-Button-Color': User_Content_Button_Settings }]" />
        </div>
        <router-view></router-view>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
        font_input_show: true,
        User_Content_Button_Edit: false,
        User_Content_Button_Settings: false,
        User_Background_Image: 'url(http://image.heitem.com/bg5.jpg)'
    }
  },
  mounted(){
      const path = this.$route.path;
      console.log(path)
      if(path.indexOf('Release') > 0){
          console.log('1')
          this.User_Content_Button_Edit = true;
          this.User_Content_Button_Settings = false;
      }else if(path.indexOf('Setting') > 0){
          console.log('2')
          this.User_Content_Button_Edit = false;
          this.User_Content_Button_Settings = true;
      }
  },
  methods: {
      Input_Show(){
          this.font_input_show = !this.font_input_show;
      },
      User_Content_Button(icon){
          if(icon === 'edit'){
              this.User_Content_Button_Edit = true;
              this.User_Content_Button_Settings = false;
              this.$router.push('/PcUser/Release')
          }else if(icon === 'settings'){
              this.User_Content_Button_Edit = false;
              this.User_Content_Button_Settings = true;
              this.$router.push('/PcUser/Setting')
          }
      }
  }
}
</script>
<style lang="css">
    .input_class_top .mu-text-field-content .mu-text-field-input{
        color: rgba(255, 255, 255, 0.6) !important;
    }
</style>
<style scoped lang="css">
    .input_class_top{
        margin-top: -10px;
    }
    .demo-paper-two {
        display: inline-block;
        height: 123px;
        width: 123px;
        text-align: center;
        background-color: rgba(44, 44, 44, 0.9)
    } 
    .User-Content-Button{
        margin-left: 212px;
        margin-top: -28px;
    }
    .User-Top-Name{
        font-size: 24px;
        display: block;
        margin-top: .5rem;
        color: #fff
    }
    .User-Top-profile{
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6);
        margin-top: .5rem;
        display:block;
    }
    .User_Index_Top{
        height: 350px;
        position:relative;
        background-position:center center;
        background-size: cover;
    }
    .input_class_top .mu-text-field-content .mu-text-field-input{
        color: #fff !important;
    }
    .background{
            background-image: linear-gradient(0deg, rgba(44, 44, 44, 0.2), rgba(44, 44, 44, 0.9));
            height: 350px;
            padding-top: 55px;
    }
    .User-content-top{
        background-color: #474a4f;
        padding: 0px 106px 0px 106px;
        height: 35px;
    }
    .User-Content-Button-Color{
        background-color: #ff5252 !important;
    }
</style>