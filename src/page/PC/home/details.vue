<template>
<div>
    <mu-back-top :bottom="80" :right="15" :duration="1000">
        <mu-float-button icon="arrow_upward"/>
    </mu-back-top>
    <mu-card style="margin-top: 1rem;max-width: 700px;float:left">
        <mu-card-header :title="Details_Data.name" :subTitle="Details_Data.date">
            <mu-avatar :src="Details_Data.icon + Details_Data.id" slot="avatar"/>
            <mu-icon @click="RouterOne" value="clear" :size="24" style="position: absolute;right:16px;"/>
        </mu-card-header>
        <mu-card-title :title="Details_Data.title"/>
        <mu-card-text>
            {{Details_Data.article}}
        </mu-card-text>
        <mu-card-actions>
            <mu-icon-button icon="thumb_up" style="color: #ff5252"/>
            <mu-badge :content="'#' + Details_Data.label" style="position: absolute;top:35%;right:1rem" secondary/>
        </mu-card-actions>
        <div class="Interactive-class">
            <span class="Interactive-length">{{Details_Data.list.length}}条评论</span>
            <div style="border-top:1px solid #eee;padding-bottom:1rem" v-for="Interactive in Details_datas" :key="Interactive.name">
                <mu-card-header :title="Interactive.name" :subTitle="Interactive.date">
                    <mu-avatar :src="Interactive.icon + Interactive.urlid" slot="avatar"/>
                    <mu-flat-button label="点赞" style="position: absolute;right:144px;color:#9e9e9e;" icon="thumb_up" />
                    <mu-flat-button :label="'回复' + '(' + Interactive.thumbup + '条' + ')'" style="position: absolute;right:16px;color:#9e9e9e;" icon="chat" />
                </mu-card-header>
                <mu-card-text style="padding: 0 1rem 1rem 1rem">
                    {{Interactive.describe}}
                </mu-card-text>
                <div class="Interactive-children" v-for="children in Interactive.list" :key="children.name">
                    <div class="Interactive-children-Top">
                        <mu-avatar :src="children.icon + children.urlid" style="width:30px;height:30px;" slot="avatar"/>
                        <p class="Interactive-Name">{{children.name}}</p>
                    </div>
                    <p class="Interactive-children-Bottom">{{children.describe}}</p>
                </div>
            </div>
        </div>
    </mu-card>
    <mu-card style="margin-top: 1rem;max-width: 244px;float:right;text-align:Center;padding:16px;">
        <mu-paper class="demo-paper-two" circle :zDepth="1">
            <mu-avatar :src="Details_Data.icon + Details_Data.id" style="height:100px;width:100px"/>
        </mu-paper>
        <mu-card-title class="User-Card" :title="Details_Data.name" :subTitle="Details_Data.profile"/>
        <mu-raised-button class="demo-raised-button" label="关注" icon="add" secondary style="border-radius: 20px;width:50%;margin-top:1rem"/>
    </mu-card>
</div>
</template>
<script>
export default {
  data () {
    return {
        Details_Data: {},
        Details_Data_children: [],
    }
  },
  created() {
    axios.get('details?name=' + this.$route.params.article_id)
    .then(res => {
    if(res.status === 200) {
        this.Details_Data = res.data.data;
        this.Details_Data_children = res.data.data.list
    }
    })
  },
  computed: {
      Details_datas(){
            return this.Details_Data_children.sort((a,b)=>b.thumbup-a.thumbup);
        },
  },
  methods: {
      RouterOne(){
            this.$router.go(-1);
        },
  }
}
</script>
<style scoped lang="less">
    .demo-paper-two {
        display: inline-block;
        height: 100px;
        width: 100px;
        text-align: center;
    }
    .User-Card{
        padding: 0 16px 0 16px;
    }
    .Interactive-class{
        padding: 1rem;
    }
    .Interactive-length{
        font-size: 16px;
        font-weight:bold;
        color: #000;
    }
    .Interactive-children{
        border-left: 2px solid #474a4f;
        max-width: 550px;
        margin: 0 auto;
        padding: 1rem;
        border-top:1px dashed #eee;
    }
    .Interactive-children-Top{
        display:flex;
    }
    .Interactive-children-Top .Interactive-Name{
        margin:0;
        font-size: 1rem;
        line-height:30px;
        margin-left: 1rem;
    }
    .Interactive-children-Bottom{
        margin: 0;
        font-size: 14px;
        margin-left: 46px;
    }
</style>