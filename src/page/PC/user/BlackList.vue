<template>
<div>
    <mu-card style="width: 640px;margin: 0 auto;padding: 1rem;margin-bottom:1rem;">
        <mu-card-title title="绑定手机" subTitle="绑定手机号可增加账号安全"/>
        <mu-text-field class="KeyWord-TopInput" label="输入用户昵称或实名,按回车添加" @change="add" v-model="text" icon="person_add" labelFloat/>
        <mu-list style="background-color: #fff;padding:0 1em 0 1em">
            <mu-list-item v-for="(item, index) in todolist" :key="item.value" v-bind:title="item.value" style="border-bottom: 1px solid #eeeeee">
                <mu-avatar :src="'http://placeimg.com/80/80/any' + index" slot="leftAvatar"/>
                <mu-icon slot="right" value="cancel" color="rgb(244, 67, 54)" @click="del(index)"/>
            </mu-list-item>
        </mu-list>
    </mu-card>
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
    .KeyWord-TopInput{
        width: 100%;

    }
</style>