<template>
<div style="display:flex;justify-content:space-between;padding-bottom:1rem;">
    <div>
    <mu-card style="width: 470px;margin-top: 1rem;">
        <mu-sub-header>我的关注 <b class="Card-Header-Length">{{Focus_Data.length}}</b></mu-sub-header>
        <mu-divider/>
        <mu-list-item v-for="focus in Focus_Data" :key="focus.id" style="background-color:#fff;margin: 0 auto;border-top: 1px solid #eee" :title="focus.name">
            <mu-avatar style="margin-top:12px" :src="focus.icon + focus.urlid" slot="leftAvatar"/>
            <span slot="describe">
                <span style="color: rgba(0, 0, 0, .87)">粉丝{{focus.fans}} | 关注{{focus.focus}} | 帖子{{focus.post}}</span><br/> {{focus.profile}}
            </span>
            <mu-icon-button style="margin-top:20px" icon="cancel" slot="right"/>
        </mu-list-item>
    </mu-card>
    </div>
    <div>
    <mu-card style="width: 470px;margin-top: 1rem;min-height:1px">
        <mu-sub-header>我的粉丝 <b class="Card-Header-Length">{{Fans_Data.length}}</b></mu-sub-header>
        <mu-divider/>
        <mu-list-item v-for="fans in Fans_Data" :key="fans.id" style="background-color:#fff;margin: 0 auto;border-top: 1px solid #eee" :title="fans.name">
            <mu-avatar :src="fans.icon + fans.urlid" slot="leftAvatar"/>
            <span slot="describe">
                <span style="color: rgba(0, 0, 0, .87)">粉丝{{fans.fans}} | 关注{{fans.focus}} | 帖子{{fans.post}}</span><br/> {{fans.profile}}
            </span>
            <mu-icon style="margin-top:20px" value="arrow_forward" slot="right"/>
        </mu-list-item>
    </mu-card>
    </div>
</div>
</template>
<script>
    export default {
    data () {
        return {
            Fans_Data: {},
            Focus_Data: {},
        }
    },
    created(){
        this.Login_Fans()
        this.Login_Focus()
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
        },
        Login_Fans(){
          axios.get('user/fans')
            .then(res => {
                if(res.status === 200) {
                    this.Fans_Data = res.data.data.list;
                }
            })
        },
        Login_Focus(){
          axios.get('user/focus')
            .then(res => {
                if(res.status === 200) {
                    this.Focus_Data = res.data.data.list;
                }
            })
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
    .Card-Header-Length{
        color:rgb(244, 67, 54);
        font-size:1rem;
    }
</style>