<template>
    <div>
        <mu-icon-button icon="keyboard_arrow_left" class="Top-Class"  @click="RouterOne"/>
        <div class="topic" :style="'background-image: url(' + Details_Data.background + Details_Data.id + ')' ">
            <span class="text">
                <p style="font-size: 1.5em;color:#fff">{{Details_Data.title}}</p>
            </span>
        </div>
        <div class="text-decoration">
            <mu-list-item :title="Details_Data.name" :describeText="Details_Data.profile">
                <mu-avatar :src="Details_Data.icon + Details_Data.id" slot="leftAvatar"/>
                <mu-icon value="person_add" slot="right"/>
            </mu-list-item>
            <mu-divider />
            <mu-content-block>{{Details_Data.article}}
                <mu-badge  class="demo-badge-content">#{{Details_Data.label}}</mu-badge>
            </mu-content-block>
            <mu-divider />
        </div>
        <div class="comments-container" v-for="comment in Details_Data.list" :key="comment.name">
            <mu-list-item :title="comment.name" :describeText="comment.date">
                <mu-avatar :src="comment.icon + comment.urlid" slot="leftAvatar"/>
            </mu-list-item>
            <span style="padding: 1em">{{comment.describe}}</span>
            <mu-divider />
        </div>
        <div class="topic-bottom">
            <mu-icon-button icon="favorite"/>
            <mu-icon-button @click="Topic_Input" icon="chat"/>
            <mu-text-field v-show="topic_input" v-model="topic_type" style="margin-top: -.8em" hintText="请输入你的评论"/>
            <mu-flat-button v-show="topic_input" label="发送" style="margin-top: -0.6em" icon="send" color="#fff"/>
        </div>
    </div>

</template>

<script>
export default {
  data () {
    return {
        Details_Data: {},
        Comments:  false,
    }
  },
  created() {
    axios.get('details?name=郭维鹤')
    .then(res => {
    if(res.status === 200) {
        this.Details_Data = res.data.data;
    }
    })
  },
  methods: {
      RouterOne(){
        this.$router.go(-1);
      },
      Topic_Input(){
          this.topic_input = !this.topic_input
      }
  }
}
</script>
<style scoped lang="less">
    .Top-Class{
        position:fixed;
        top: 0;
        color: rgba(255,255,255,0.9);
        z-index: 2;
    }
    .topic{
        position: relative;;
        top: 0;
        background-size: 100% 100%;  
        -moz-background-size: 100% 100%;  
        -webkit-background-size: 100% 100%;
        height: 13em;
        padding: 1em;
    }
    .demo-badge-content{
        background-color: #ffab00;
        color: #ffffff;
        padding-left: 4px;
        padding-right: 4px;
    }
    .topic .text{
        position:absolute;
        bottom: 0;
    }
    .text-decoration{
        background-color: #fff;
        margin-bottom:.5em;
    }
    .comments-container{
        background-color: #fff;
    }
    .topic-bottom{
        background-color:#474a4f;
        height: 3.5em;
        display: flex;
        position: fixed;
        bottom: 0;
        border-top: 1px solid rgba(0,0,0,0.12);
        width: 100%;
        padding: 1em;
        color: #fff;
    }
    .topic-bottom .mu-icon-button{
        margin-top: -.5em;
    }
</style>