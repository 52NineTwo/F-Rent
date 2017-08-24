<template>
<div>
    <mu-appbar title="设置手机号" titleClass="titleClass">
        <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="RouterOne" />
    </mu-appbar>
    <mu-sub-header>绑定手机号可增加账号安全</mu-sub-header>
    <mu-raised-button label="保存" class="BlackList-Btn" to="/user" backgroundColor="rgb(244, 67, 54)" fullWidth/>
</div>
</template>
<script>
    export default {
    data () {
        return {
        }
    },
    methods: {
        RouterOne(){
            this.$router.go(-1);
        },
    },
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
        background-color: #fff;
    }
    .BlackList-Btn{
        margin-top: 2em;
        width:96%;
        margin-left:2%;
    }
</style>