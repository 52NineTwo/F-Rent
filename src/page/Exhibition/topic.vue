<template>
    <div>
        <mu-icon-button icon="keyboard_arrow_left" class="Top-Class"  @click="RouterOne"/>
        <div class="topic">
            <span class="text">
                <p style="font-size: 1.5em;color:#fff"># 我和杭州有个约会 #</p>
                <p style="color:#9e9e9e">我和杭州有个约会我和杭州有个约会我和杭州有个约会我和杭州有个约会</p>
            </span>
        </div>
        <div class="text-decoration">
            <mu-sub-header>{{topic_num}} 条互动</mu-sub-header>
            <mu-divider />
            <mu-list-item v-for="topic in topic_data" :key="topic.id" :title="topic.name" style="border-bottom: 1px solid rgba(0,0,0,0.12)">
                <mu-avatar :src="topic.icon + topic.urlid" slot="leftAvatar"/>
                <span slot="describe"> {{topic.describe}}</span>
            </mu-list-item>
        </div>
        <div class="topic-bottom">
            <mu-icon-button icon="favorite"/>
            <mu-icon-button @click="Topic_Input" icon="chat"/>
            <mu-text-field v-show="topic_input" style="margin-top: -1em" hintText="请输入你的评论"/>
            <mu-flat-button v-show="topic_input" label="发送" style="margin-top: -0.7em" icon="send" color="rgb(244,67,54)"/>
        </div>
    </div>

</template>

<script>
export default {
  data () {
    return {
        topic_data: {},
        topic_num: '',
        topic_input: false,
    }
  },
  created() {
    axios.get('exhibition/topic')
    .then(res => {
    if(res.status === 200) {
        this.topic_data = res.data.data.list;
        this.topic_num = this.topic_data.length;
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
        background-image: url(http://placeimg.com/828/414/any);
        background-size: 100% 100%;  
        -moz-background-size: 100% 100%;  
        -webkit-background-size: 100% 100%;
        height: 13em;
        padding: 1em;
    }
    .topic .text{
        position:absolute;
        bottom: 0;
    }
    .text-decoration{
        background-color: #fff;
        margin-top: .5em;
        padding: 0em 0 1em 0;
    }
    .topic-bottom{
        background-color:#fff;
        height: 3em;
        display: flex;
        position: fixed;
        bottom: 0;
        border-top: 1px solid rgba(0,0,0,0.12);
        width: 100%;
        padding: 1em;
    }
    .topic-bottom .mu-icon-button{
        margin-top: -.7em;
    }
</style>