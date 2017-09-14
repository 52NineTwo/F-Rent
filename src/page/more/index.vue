<template>
<div>
    <mu-appbar title="更多" class="Top-Class"  />
    <div class="seize-seat-top"></div>
    <mu-list-item to="/more/information" class="More_list" title="收到的评论" describeText="来自大佬们对你话题的评论">
      <mu-badge style="margin-top:1em" content="10" slot="left" class="demo-icon-badge" circle secondary>
        <mu-icon value="notifications" color="black"/>
      </mu-badge>
      <mu-icon value="chevron_right" slot="right"/>
    </mu-list-item>
    <br />
    <mu-list-item to="/more/label" class="More_list_bottom" title="分类及标签" describeText="选读">
      <mu-icon value="search" color="black" slot="left" :size="30" />
      <mu-icon value="chevron_right" slot="right"/>
    </mu-list-item>
    <mu-list-item to="/more/discover" class="More_list_bottom" title="发现" describeText="快速定位你的需求(寻找室友或者朋友)">
      <mu-icon value="group_add" color="black" slot="left" :size="30" />
      <mu-icon value="chevron_right" slot="right"/>
    </mu-list-item>
    <mu-list-item to="/more/ranking" class="More_list" title="数据排行榜" describeText="发现大佬">
      <mu-icon value="poll" color="black" slot="left" :size="30" />
      <mu-icon value="chevron_right" slot="right"/>
    </mu-list-item>
</div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods: {

    }
}
</script>
<style scoped lang="less">
    .More_list{
        background-color: #fff;
    }
    .More_list_bottom{
        background-color: #fff;
        border-bottom: 1px solid #eeeeee;
    }
    .Top-Class{
        position:fixed;
        top: 0;
        padding: 0;
        text-align: center;
        font-size: 1.2em;
    }
    .seize-seat-top{
        height: 56px;
    }
</style>