<template>
<div>
    <mu-appbar :title="Title_Data" class="Top-Class" titleClass="titleClass">
        <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="RouterOne" />
    </mu-appbar>
    <mu-tabs class="Top-Class-tabs" :value="activeTab" @change="handleTabChange">
        <mu-tab value="active" title="活跃"/>
        <mu-tab value="attention" title="关注"/>
        <mu-tab value="comment" title="评论"/>
        <mu-tab value="dotpraise" title="点赞"/>
    </mu-tabs>
    <div class="seize-seat-top"></div>
    <div v-if="activeTab === 'active'">
        <mu-sub-header>排行榜每日更新，每日0点可看到最新数据！</mu-sub-header>
        <ol class="Ranking_ol">
            <li v-for="item in active_datas" :key="item.name">
                <mu-list-item :title="item.name" @click="GoOthers(item.name)">
                    <mu-avatar :src="item.icon + item.urlid" slot="leftAvatar"/>
                    <span slot="describe">
                        截止{{item.time}}发布了{{item.number}}条帖子
                    </span>
                    <mu-icon value="chevron_right" slot="right"/>
                </mu-list-item>
            </li>
        </ol>
    </div>
    <div v-if="activeTab === 'attention'">
        <mu-sub-header>排行榜每日更新，每日0点可看到最新数据！</mu-sub-header>
        <ol class="Ranking_ol">
            <li v-for="item in attention_datas" :key="item.name">
                <mu-list-item :title="item.name" @click="GoOthers(item.name)">
                    <mu-avatar :src="item.icon + item.urlid" slot="leftAvatar"/>
                    <span slot="describe">
                        截止{{item.time}}被{{item.number}}位小伙伴关注
                    </span>
                    <mu-icon value="chevron_right" slot="right"/>
                </mu-list-item>
            </li>
        </ol>
    </div>
    <div v-if="activeTab === 'comment'">
        <mu-sub-header>排行榜每日更新，每日0点可看到最新数据！</mu-sub-header>
        <ol class="Ranking_ol">
            <li v-for="item in comment_datas" :key="item.name">
                <mu-list-item :title="item.name" @click="GoOthers(item.name)">
                    <mu-avatar :src="item.icon + item.urlid" slot="leftAvatar"/>
                    <span slot="describe">
                        截止{{item.time}}发布了{{item.number}}条评论
                    </span>
                    <mu-icon value="chevron_right" slot="right"/>
                </mu-list-item>
            </li>
        </ol>
    </div>
    <div v-if="activeTab === 'dotpraise'">
        <mu-sub-header>排行榜每日更新，每日0点可看到最新数据！</mu-sub-header>
        <ol class="Ranking_ol">
            <li v-for="item in dotpraise_datas" :key="item.name">
                <mu-list-item :title="item.name" @click="GoOthers(item.name)">
                    <mu-avatar :src="item.icon + item.urlid" slot="leftAvatar"/>
                    <span slot="describe">
                        截止{{item.time}}被{{item.number}}位小伙伴点赞
                    </span>
                    <mu-icon value="chevron_right" slot="right"/>
                </mu-list-item>
            </li>
        </ol>
    </div>
</div>
</template>
<script>
    export default {
    data () {
        return {
            Title_Data: '社区活跃榜',
            activeTab: 'active',
            active_data: [],
            attention_data: [],
            comment_data: [],
            dotpraise_data: [],
        }
    },
    created(){
        this.RanKing_Login();
    }, 
    computed: {
        active_datas(){
            return this.active_data.sort((a,b)=>b.number-a.number);
        },
        attention_datas(){
            return this.attention_data.sort((a,b)=>b.number-a.number);
        },
        comment_datas(){
            return this.comment_data.sort((a,b)=>b.number-a.number);
        },
        dotpraise_datas(){
            return this.dotpraise_data.sort((a,b)=>b.number-a.number);
        }
    },
    methods: {
        RouterOne(){
            this.$router.go(-1);
        },
        handleTabChange (val) {
            this.RanKing_Login();
            this.Title_Data = (val === 'active' && '社区活跃榜') || (val === 'attention' && '社区被关注榜') || (val === 'comment' && '社区评论榜') || (val === 'dotpraise' && '社区被点赞榜')
            this.activeTab = val
        },
        RanKing_Login(){
            axios.get('more/ranking/' + this.activeTab)
            .then(res => {
                if(res.status === 200) {
                    if(this.activeTab === 'active'){
                        this.active_data = res.data.data.list;
                    }else if(this.activeTab === 'attention'){
                        this.attention_data = res.data.data.list;
                    }else if(this.activeTab === 'comment'){
                        this.comment_data = res.data.data.list;
                    }else{
                        this.dotpraise_data = res.data.data.list;
                    }
                }
            })
        },  
        GoOthers(name){
            this.$router.push('/others/' + name);
        }
    },
    }

</script>
<style lang="less">
    .titleClass{
        text-align:center;
        font-size: 1.15em;
        margin-right: 15.2%;
    }
</style>
<style scoped lang="less">
    .Top-Class{
        position:fixed;
        top: 0;
    }
    .Top-Class-tabs{
        position:fixed;
        top: 0;
        margin-top: 55px;
    }
    .seize-seat-top{
        height: 104px;
    }
    .mu-sub-header{
        padding: 0 1em 0 1em;
    }
    .Ranking_ol{
        background-color:#fff;
        margin-top:-0.2em;
    }
    .Ranking_ol li{
        border-bottom: 1px solid #eeeeee;
        vertical-align: middle;
    }
</style>