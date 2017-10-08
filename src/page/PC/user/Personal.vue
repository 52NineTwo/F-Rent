<template>
<div>
    <mu-card style="width: 640px;margin: 0 auto;padding: 1rem;margin-bottom:1rem;">
        <mu-card-title title="基本资料" subTitle="在个人主页中展示"/>
        <div class="Data-Input-class">
            <span class="Title">昵称</span>
            <input class="Input" placeholder="请输入你的昵称" @click="Show_Input_Click" value="溯翎" :readonly="focusStatus"/>
            <div class="Right">
                <mu-icon-button v-show="!Button_Show" @click="Show_Button_Click" icon="edit"/>
                <mu-flat-button v-show="Button_Show" @click="Show_Button_Click" label="保存" secondary/>
                <mu-flat-button v-show="Button_Show" @click="Show_Button_Click" label="取消"/>
            </div>
        </div>
        <div class="Data-Input-class">
            <span class="Title">微信号</span>
            <input class="Input" placeholder="请输入你的微信号" @click="Show_Input_Click" value="溯翎" :readonly="focusStatus"/>
            <div class="Right">
                <mu-icon-button v-show="Edit_Show" @click="Show_Button_Click" icon="edit"/>
                <mu-flat-button v-show="Button_Show" @click="Show_Button_Click" label="保存" secondary/>
                <mu-flat-button v-show="Button_Show" @click="Show_Button_Click" label="取消"/>
            </div>
        </div>
        <div class="Data-Input-class" style="height: 73px;">
            <span class="Title">性别</span>
            <div class="Input">
                <mu-radio label="男" name="group" nativeValue="simple1" v-model="value"/>
                <mu-radio label="女" name="group" nativeValue="simple2" v-model="value"/>
                <mu-radio label="保密" name="group" nativeValue="simple2" v-model="value"/>
            </div>
        </div>
        <mu-card-title style="margin-top:1rem;" title="个性签名" subTitle="让别人快速了解你"/>
        <div class="Data-Input-Big">
            <mu-text-field class="Input" hintText="不超过6行..." multiLine :rows="3" :rowsMax="6"/>
        </div>
        <mu-card-title title="实名认证" subTitle="实名唯一且不可更改"/>
        <div class="Data-Input-class">
            <span class="Title">友租实名</span>
            <input class="Input" placeholder="请进行实名认证" @click="Show_Input_Click" value="溯翎" :readonly="focusStatus"/>
            <div class="Right">
                <mu-icon-button v-show="Edit_Show" @click="Show_Button_Click" icon="edit"/>
                <mu-flat-button v-show="Button_Show" @click="Show_Button_Click" label="保存" secondary/>
                <mu-flat-button v-show="Button_Show" @click="Show_Button_Click" label="取消"/>
            </div>
        </div>
        <mu-card-title style="margin-top:1rem;" title="想找什么" subTitle="可在发现 - 寻找Ta中展示"/>
        <div class="Data-Input-Big" style="border-bottom:1px solid #eee">
            <div class="Radio">
                <mu-radio label="室友" name="group" nativeValue="simple1" v-model="value"/>
                <mu-radio label="朋友" name="group" nativeValue="simple2" v-model="value"/>
            </div>
        </div>
        <mu-raised-button style="margin-top:2rem;" label="保存" secondary fullWidth/>
        
    </mu-card>
</div>  
</template>
<script>
export default {
  data () {
    return {
      Edit_Show: true,
      Button_Show: false,
      focusStatus: true,
    }
  },
  methods: {
      Show_Input_Click(){
          if(this.focusStatus === true){
            this.Show_Button_Click()
          }
      },
      Show_Button_Click(){
          this.focusStatus = !this.focusStatus;
          this.Edit_Show = !this.Edit_Show;
          this.Button_Show = !this.Button_Show;
      }
  }
}
</script>
<style scoped lang="less">
    .Data-Input-class{
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem 0.5rem 1rem;
        border-bottom: 1px solid #eee;
    }
    .Data-Input-Big{
        padding: 0.5rem 1rem 0 1rem;
    }
    .Data-Input-Big .Input{
        width: 100%;
    }
    .Data-Input-Big .Radio{
        display: flex;
        justify-content: space-around;
        padding: 0 1rem 1rem 1rem;
    }
    .Data-Input-class .Title{
        font-size: 1rem;
        color: #9e9e9e;
        width: 100px;
    }
    .Data-Input-class .Input{
        width: 400px;
        font-size: 1rem;
        border: 0px;
    }
    .Data-Input-class .Input .mu-radio{
        margin-right: 1rem;
    }
    .Data-Input-class .Input:focus{
        outline:medium;
    }
    .Data-Input-class .Right{
        width: 120px;
        height: 56px;
        display: flex;
    }
    .Data-Input-class .Right .mu-flat-button{
        min-width:1px;
        margin-top:10px
    }
    .Data-Input-class .Right .mu-icon-button{
        margin-top:4px;
        color: #ff5252
    }
</style>
