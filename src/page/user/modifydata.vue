<template>
<div>
    <mu-appbar title="个人资料" titleClass="titleClass">
        <mu-icon-button icon="keyboard_arrow_left" slot="left" to="/user" />
    </mu-appbar>
    <mu-sub-header>基本资料</mu-sub-header>
    <mu-text-field class="FyData-TopInput" label="昵称"  icon="contacts" labelFloat/>
    <mu-text-field class="FyData-TopInput" label="微信"  icon="comment" labelFloat/>
    <mu-list-item :title="gender" class="FyData-TopInput" @click="opengenderSheet">
      <mu-icon value="chevron_right" slot="right" />
      <mu-icon value="tag_faces" slot="left" />
    </mu-list-item>
    <mu-bottom-sheet :open="genderSheet" @close="closegenderSheet">
    <mu-list @itemClick="closegenderSheet">
      <mu-list-item title="男" @click="GenDerSheet('男')"/>
      <mu-list-item title="女" @click="GenDerSheet('女')"/>
    </mu-list>
  </mu-bottom-sheet>
  <mu-raised-button label="保存" class="BlackList-Btn" style="margin-top: 2em;" backgroundColor="rgb(244, 67, 54)" to="/user"  fullWidth/>
  <mu-raised-button label="返回个人中心" class="BlackList-Btn" to="/user" primary fullWidth/>
</div>
</template>
<script>
    export default {
    data () {
        return {
            value: '1',
            gender: '请选择性别',
            genderSheet: false,
        }
    },
    methods: {
        handleChange (value) {
            this.value = value
        },
        closegenderSheet () {
            this.genderSheet = !this.genderSheet
        },
        opengenderSheet () {
            this.genderSheet = true
        },
        GenDerSheet (gender) {
            this.gender = gender;
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
    .FyData-TopInput{
        margin: 0;
        width: 100%;
        background-color: #fff;
    }
    .BlackList-Btn{
        margin-top: 1em;
        width:96%;
        margin-left:2%;
    }
</style>