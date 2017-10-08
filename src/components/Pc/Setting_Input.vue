<template>
<div>
        <div class="Data-Input-class">
            <span class="Title">{{title}}</span>
            <input class="Input" :placeholder="label" @click="Show_Input_Click" v-model="inputValue" :readonly="focusStatus"/>
            <div class="Right">
                <mu-icon-button v-show="Edit_Show" @click="Show_Button_Click" icon="edit"/>
                <mu-flat-button v-show="Button_Show" @click="Show_Button_Click" label="保存" secondary/>
                <mu-flat-button v-show="Button_Show" @click="Show_Button_Click" label="取消"/>
            </div>
        </div>
</div>  
</template>
<script>
export default {
  props: ['title', 'label',"value"],
  data () {
    return {
      Edit_Show: true,
      Button_Show: false,
      focusStatus: true,
      inputValue: this.value
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
        border-top: 1px solid #eee;
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
