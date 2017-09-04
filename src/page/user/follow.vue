<template>
<div>
    <mu-appbar title="我关注的人" titleClass="titleClass">
        <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="RouterOne" />
    </mu-appbar>
    <mu-list-item @click="ToUser_issue('attention')" class="follow-TopInput" title="去看他们的帖子">
      <mu-icon slot="left" value="arrow_forward"/>
    </mu-list-item>
    <mu-list-item style="background-color:#fff" title="溯翎" describeText="这个人很懒，什么也没有写" @click="GoOthers('溯翎')">
      <mu-avatar src="http://www.heitem.com/wp-content/uploads/2016/11/icon.jpg" slot="leftAvatar"/>
      <mu-icon value="cancel" color="rgb(244, 67, 54)" slot="right"/>
    </mu-list-item>
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
        ToUser_issue(label){
            sessionStorage.setItem("UserTo", JSON.stringify(label))
            this.$router.push('/user/Userissue');
        },
        GoOthers(name){
            this.$router.push('/others/' + name);
        }
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
    .follow-TopInput{
        margin-top: 1em;
        border-bottom: 1px solid #eeeeee;
        width: 100%;
        background-color: #fff;
    }
    .BlackList-Btn{
        margin-top: 2em;
        width:96%;
        margin-left:2%;
    }
</style>