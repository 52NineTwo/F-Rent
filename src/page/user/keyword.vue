<template>
<div>
    <mu-appbar title="关键词过滤" titleClass="titleClass">
        <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="RouterOne" />
    </mu-appbar>
    <mu-text-field class="KeyWord-TopInput" label="输入屏蔽词,按回车添加" @change="add" v-model="text" icon="format_align_center" labelFloat/>
    <mu-list style="background-color: #fff;padding:0 1em 0 1em">
        <mu-list-item v-for="(item, index) in todolist" :key="item.value" v-bind:title="item.value" style="border-bottom: 1px solid #eeeeee">
            <mu-icon slot="right" value="cancel" color="rgb(244, 67, 54)" @click="del(index)"/>
        </mu-list-item>
  </mu-list>
  <mu-raised-button label="返回个人中心" class="BlackList-Btn" to="/user" primary fullWidth/>
</div>
</template>
<script>
    export default {
    data () {
        return {
            todolist:[], 
            text:'',
            state: false,
        }
    },
    methods: {
        RouterOne(){
            this.$router.go(-1);
        },
        add(){
            if(this.text == ''){
                return 
            }else{
                this.todolist.push ({
                value:this.text,
                state: false,
            })
            }  
            this.text='';
        },
        //删除
        del(index){
            this.todolist.splice(index,1);
        },
    },
    computed: {
        select() {
            return this.todolist.filter((index) => index.state == true)
        }
    }
    }

</script>
<style scoped lang="less">
    .Top-Class{
        position:fixed;
        top: 0;
    }
    .titleClass{
        text-align:center;
        font-size: 1.15em;
        margin-right: 15.2%;
    }
    .top_class{
        display: flex;
        justify-content: space-around;
        margin-bottom: 1em;
        padding: 1em;
    }
    .KeyWord-TopInput{
        width: 100%;
        background-color: #474a4f;
    }
    .BlackList-Btn{
        margin-top: 2em;
        width:96%;
        margin-left:2%;
        background-color: #474a4f;
    }
</style>