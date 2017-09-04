<template>
  <div>
    <img :src="others_data.background + others_data.id" style="width:100%;position:fixed">
    <div class="TempLate">
        <mu-icon-button style="color:#fff;position:fixed;top:0" icon="keyboard_arrow_left" @click="RouterOne" />
        <div class="User-Card-Zw"></div>
            <mu-card class="UserCard-Top">
                <mu-list-item class="Top-list-item" :title="others_data.name" :describeText="others_data.profile">
                    <mu-avatar :src="others_data.icon + others_data.id" slot="leftAvatar"/>
                </mu-list-item>
                <mu-flexbox>
                    <mu-flexbox-item >
                    <mu-flat-button v-if="others_data.attention === 'person_add'"  label="取关" icon="person_add" class="User-Top-Btn-Left" />
                    <mu-flat-button v-else  label="关注" icon="person_outline" class="User-Top-Btn-Left" />
                    </mu-flexbox-item>
                    <mu-flexbox-item>
                    <mu-flat-button  label="话题(努力码中！)" icon="grade" class="User-Top-Btn-Left"/>
                    </mu-flexbox-item>
                </mu-flexbox>
            </mu-card>
            <mu-card class="UserCard-Top">
                <div class="Others-list">
                    <p>性别</p>
                    <p style="margin-right:10%">{{others_data.gender}}</p>
                    <mu-icon style="line-height:48px" color="rgb(158, 158, 158)" value="wc"/>
                </div>
                <div class="Others-list">
                    <p>正在找</p>
                    <p style="margin-right:10%">{{others_data.label}}</p>
                    <mu-icon style="line-height:48px" color="rgb(158, 158, 158)" value="keyboard_arrow_right"/>
                </div>
            </mu-card>
            <mu-card class="UserCard-Top">
                <div class="Others-list">
                    <p>最近发布的话题</p>
                </div>
                <mu-list-item style="border-bottom:1px solid #eee;" v-for="item in others_data.recently" :key="item.title" :title="item.title" :describeText="'#' + item.label + ' ' +  item.time">
                    <mu-icon value="keyboard_arrow_right" slot="right"/>
                </mu-list-item>
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
      others_data: {},
    }
  },
  created() {
      axios.get('others/index?name=' + this.$route.params.name)
        .then(res => {
            if(res.status === 200) {
                this.others_data = res.data.data;
                console.log(this.others_data)
            }
        })
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
    RouterOne(){
            this.$router.go(-1);
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
    margin-top: 30%;
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
  .Others-list{
      padding: 0 1em 0 1em;
      display: flex;
      justify-content: space-between;
      height: 48px;
      border-bottom: 1px solid #eee;
  }
  .Discuss_bottom{
    border-left: 5px solid #474a4f;
    margin-left: 1em;
 }
</style>