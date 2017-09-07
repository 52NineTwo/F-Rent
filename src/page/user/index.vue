<template>
  <div>
    <img :src="User_Datas.background" style="width:100%;position:fixed">
    <div class="TempLate">
      <div class="User-Card-Zw"></div>
          <mu-card class="UserCard-Top">
              <mu-list-item to="/user/modifydata" class="Top-list-item" :title="User_Datas.nickname + '(' + User_Datas.name + ')'" :describeText="User_Datas.profile">
                <mu-avatar :src="User_Datas.icon + User_Datas.id" slot="leftAvatar"/>
                <mu-icon value="account_circle" slot="right"/>
              </mu-list-item>
              <mu-flexbox>
                <mu-flexbox-item >
                  <mu-flat-button @click="User_Follow" label="关注" icon="person_add" class="User-Top-Btn-Left" />
                </mu-flexbox-item>
                <mu-flexbox-item>
                  <mu-flat-button @click="ToUser_issue('collect')" label="收藏" icon="grade" class="User-Top-Btn-Left"/>
                </mu-flexbox-item>
                <mu-flexbox-item>
                  <mu-flat-button @click="ToUser_issue('dotpraise')" label="点赞" icon="thumb_up" class="User-Top-Btn"/>
                </mu-flexbox-item>
              </mu-flexbox>
          </mu-card>
          <mu-card class="UserCard-Top">
              <mu-list-item title="我发布的帖子" @click="ToUser_issue('issue')">
                <mu-icon slot="right" value="chevron_right" color="#9e9e9e"/>
              </mu-list-item>
              <mu-list-item title="我发布的评论" to="/user/discuss" style="border-top: 1px solid #eeeeee">
                <mu-icon slot="right" value="chevron_right" color="#9e9e9e"/>
              </mu-list-item>
          </mu-card>
          <mu-card class="UserCard-Top">
              <mu-list-item title="手机绑定" to="/user/cellphone">
                <mu-icon slot="right" value="chevron_right" color="#9e9e9e"/>
              </mu-list-item>
              <mu-list-item title="修改资料" to="/user/modifydata" style="border-top: 1px solid #eeeeee">
                <mu-icon slot="right" value="chevron_right" color="#9e9e9e"/>
              </mu-list-item>
          </mu-card>
          <mu-card class="UserCard-Top">
            <mu-flexbox>
              <mu-flexbox-item style="border-right:1px solid #eeeeee">
                <mu-bottom-nav-item title="黑名单" to="/user/blacklist"  class="User-Bottom-Btn" icon="block"/>
              </mu-flexbox-item>
              <mu-flexbox-item style="border-right:1px solid #eeeeee">
                <mu-bottom-nav-item title="关键词过滤" to="/user/keyword" class="User-Bottom-Btn" icon="format_align_center"/>
              </mu-flexbox-item>
              <mu-flexbox-item>
                <mu-bottom-nav-item title="发布权限" to="/user"  class="User-Bottom-Btn" icon="assignment_turned_in"/>
              </mu-flexbox-item>
            </mu-flexbox>
          </mu-card>
          <mu-card class="UserCard-Top">
              <mu-flat-button label="退出当前账号" @click="End_User" class="User-Top-Btn" color="rgb(244, 67, 54)"/>
          </mu-card>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'user',
      bottomNavColor: 'user',
      User_Datas: {},
    }
  },
  created() {
      this.User_Datas = JSON.parse(sessionStorage.getItem("User_Data"));
      console.log(this.PhoneValue.length)
      if(this.PhoneValue.length < '11'){
        this.UserLoginBtn = true;
      }
  },
  computed: {
      PhoneValue () {
          return this.$store.state.UserPhone;
      }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    },
    End_User (){
      this.$store.commit('LoginPhone','');
      sessionStorage.removeItem('userphone')
      console.log(this.PhoneValue.length)
      this.$router.push('/home');
    },
    ToUser_issue(label){
      sessionStorage.setItem("UserTo", JSON.stringify(label))
      this.$router.push('/user/Userissue');
    },
    User_Follow(){
      this.$router.push('/user/follow')
    },
  }
}
</script>
<style scoped lang="less">
  .TempLate{
    padding: 1em;
    width: 100%;
    height: 100%;
  }
  .mu-paper{
    position:fixed;
    width: 100%;
    bottom: 0;
    table-layout: fixed;
  }
  .User-Card-Zw{
    margin-top: 60%;
  }
  .mu-card{
    border-radius: 0.3em;
    margin-top: 5%;
    width: 100%;
    background-color: rgba(255,255,255,0.7);
  }
  .UserCard-Top{
    border-radius: 0.3em;
    margin-top: 5%;
    width: 100%;
    background-color: rgba(255,255,255,0.7);
  }
  .Top-list-item{
    border-bottom: 1px solid #eeeeee;
  }
  .demo-paper {
    display: inline-block;
    height: 100px;
    width: 100px;
    margin: 20px;
    text-align: center;
    background-color: #474a4f;
  }
  .demo-paper .mu-avatar{
      height: 100px;
      width: 100px;
  }
  .mu-avatar-inner img{
    width: 3em;
    height: 3em;
  }
  .User-Top-Btn-Left{
    width: 100%;
    height: 3em;
    border-right: 1px solid #eeeeee;
  }
  .User-Top-Btn{
    width: 100%;
    height: 3em;
  }
  .User-Bottom-Btn{
    width: 100%;
    height: 5em;
    padding: 1em;
    line-height: 2em;
  }
</style>