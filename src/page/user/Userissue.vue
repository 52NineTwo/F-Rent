<template>
<div>
        <mu-appbar :title="TopTitle" class="Top-Class" titleClass="titleClass">
            <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="RouterOne" />
        </mu-appbar>
        <mu-tabs style="margin-top:56px;" class="Top-Class" :value="activeTab" @change="handleTabChange">
            <mu-tab value="issue" title="我的"/>
            <mu-tab value="dotpraise" title="点赞"/>
            <mu-tab value="collect" title="收藏"/>
            <mu-tab value="attention" title="关注"/>
        </mu-tabs>
    <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
        <mu-list class="bottom-item-list-munu" @itemClick="closeBottomSheet">
            <mu-list-item class="bottom-item-list" title="删除" @click="delatOpen" />
            <mu-list-item class="bottom-item-list" title="隐藏" @click="hideOpen"/>
            <mu-list-item class="bottom-item-list" title="推广"/>
        </mu-list>
    </mu-bottom-sheet>
    <mu-dialog :open="delclose" title="" @close="delatClose">
        确定要删除这个帖子吗？(不可收回)
        <mu-flat-button slot="actions" @click="delatClose" primary label="取消"/>
        <mu-flat-button slot="actions" primary @click="delat_Close" label="确定"/>
    </mu-dialog>
    <mu-dialog :open="hidebottom" title="" @close="hideClose">
        确定要隐藏这个帖子吗？(自己可见别人不可见）
        <mu-flat-button slot="actions" @click="hideClose" primary label="取消"/>
        <mu-flat-button slot="actions" primary @click="hideClose" label="确定"/>
    </mu-dialog>
    <div v-if="activeTab === 'issue'">
        <div class="seize-seat-top"></div>
        <mu-card v-for="(item, index) in issue_data" :key="item.id">
            <mu-list-item class="Top-list-item" :title="item.name + ' | ' + '#' + item.type" :describeText="item.date">
                <mu-avatar :src="item.icon" slot="leftAvatar"/>
                <mu-icon value="keyboard_arrow_down" slot="right" @click="openBottomSheet(index)" />
            </mu-list-item>
            <mu-card-text>
                {{item.source}}
                <mu-badge  class="demo-badge-content">#{{item.label}}</mu-badge>
            </mu-card-text>
            <mu-flexbox>
                <mu-flexbox-item class="flex-demo" v-for="items in item.url" :key="items.id" >
                    <img class="mu-col-img" v-lazy="items.name + item.urlid" :zDepth="1">
                </mu-flexbox-item>
            </mu-flexbox>
            <mu-row  class="card-bottom">
                <mu-col width="60" tablet="50" desktop="50">
                    <div class="card-bottom-data">
                        <mu-icon value="remove_red_eye" class="card-bottom-icon" :size="20"/>
                        <p>{{item.see}}</p>
                    </div>
                </mu-col>
                <mu-col width="20" tablet="25" desktop="25">
                    <div class="card-bottom-data">
                        <mu-icon value="favorite_border" class="card-bottom-icon" :size="20"/>
                        <p>{{item.fabulous}}</p>
                    </div>
                </mu-col>
                <mu-col width="20" tablet="25" desktop="25">
                    <div class="card-bottom-data">
                        <mu-icon value="chat" class="card-bottom-icon" :size="20"/>
                        <p>{{item.comment}}</p>
                    </div>
                </mu-col>
            </mu-row>
        </mu-card>
    </div>
    <div v-if="activeTab === 'dotpraise'">
        <div class="seize-seat-top"></div>
        <mu-card v-for="item in dotpraise_data" :key="item.id">
            <mu-card-header :title="item.name + ' | ' + '#' + item.type" :subTitle="item.date">
                <mu-avatar :src="item.icon + item.urlid" slot="avatar"/>
            </mu-card-header>
            <mu-card-text>
                {{item.source}}
                <mu-badge  class="demo-badge-content">#{{item.label}}</mu-badge>
            </mu-card-text>
            <mu-flexbox>
                <mu-flexbox-item class="flex-demo" v-for="items in item.url" :key="items.id" >
                    <img class="mu-col-img" v-lazy="items.name + item.urlid" :zDepth="1">
                </mu-flexbox-item>
            </mu-flexbox>
            <mu-row  class="card-bottom">
                <mu-col width="60" tablet="50" desktop="50">
                    <div class="card-bottom-data">
                        <mu-icon value="remove_red_eye" class="card-bottom-icon" :size="20"/>
                        <p>{{item.see}}</p>
                    </div>
                </mu-col>
                <mu-col width="20" tablet="25" desktop="25">
                    <div class="card-bottom-data">
                        <mu-icon value="favorite" class="card-bottom-icon" :size="20"/>
                        <p>{{item.fabulous}}</p>
                    </div>
                </mu-col>
                <mu-col width="20" tablet="25" desktop="25">
                    <div class="card-bottom-data">
                        <mu-icon value="chat" class="card-bottom-icon" :size="20"/>
                        <p>{{item.comment}}</p>
                    </div>
                </mu-col>
            </mu-row>
        </mu-card>
    </div>
    <div v-if="activeTab === 'collect'">
        <div class="seize-seat-top"></div>
        <mu-card v-for="item in collect_data" :key="item.id">
            <mu-card-header :title="item.name + ' | ' + '#' + item.type" :subTitle="item.date">
                <mu-avatar :src="item.icon + item.urlid" slot="avatar"/>
            </mu-card-header>
            <mu-card-text>
                {{item.source}}
                <mu-badge  class="demo-badge-content">#{{item.label}}</mu-badge>
            </mu-card-text>
            <mu-flexbox>
                <mu-flexbox-item class="flex-demo" v-for="items in item.url" :key="items.id" >
                    <img class="mu-col-img" v-lazy="items.name + item.urlid" :zDepth="1">
                </mu-flexbox-item>
            </mu-flexbox>
            <mu-row  class="card-bottom">
                <mu-col width="60" tablet="50" desktop="50">
                    <div class="card-bottom-data">
                        <mu-icon value="remove_red_eye" class="card-bottom-icon" :size="20"/>
                        <p>{{item.see}}</p>
                    </div>
                </mu-col>
                <mu-col width="20" tablet="25" desktop="25">
                    <div class="card-bottom-data">
                        <mu-icon value="favorite_border" class="card-bottom-icon" :size="20"/>
                        <p>{{item.fabulous}}</p>
                    </div>
                </mu-col>
                <mu-col width="20" tablet="25" desktop="25">
                    <div class="card-bottom-data">
                        <mu-icon value="chat" class="card-bottom-icon" :size="20"/>
                        <p>{{item.comment}}</p>
                    </div>
                </mu-col>
            </mu-row>
        </mu-card>
    </div>
    <div v-if="activeTab === 'attention'" >
        <div class="seize-seat-top"></div>
        <mu-card v-for="item in attention_data" :key="item.id">
            <mu-card-header :title="item.name + ' | ' + '#' + item.type" :subTitle="item.date">
                <mu-avatar :src="item.icon + item.urlid" slot="avatar"/>
            </mu-card-header>
            <mu-card-text>
                {{item.source}}
                <mu-badge  class="demo-badge-content">#{{item.label}}</mu-badge>
            </mu-card-text>
            <mu-flexbox>
                <mu-flexbox-item class="flex-demo" v-for="items in item.url" :key="items.id" >
                    <img class="mu-col-img" v-lazy="items.name + item.urlid" :zDepth="1">
                </mu-flexbox-item>
            </mu-flexbox>
            <mu-row  class="card-bottom">
                <mu-col width="60" tablet="50" desktop="50">
                    <div class="card-bottom-data">
                        <mu-icon value="remove_red_eye" class="card-bottom-icon" :size="20"/>
                        <p>{{item.see}}</p>
                    </div>
                </mu-col>
                <mu-col width="20" tablet="25" desktop="25">
                    <div class="card-bottom-data">
                        <mu-icon value="favorite_border" class="card-bottom-icon" :size="20"/>
                        <p>{{item.fabulous}}</p>
                    </div>
                </mu-col>
                <mu-col width="20" tablet="25" desktop="25">
                    <div class="card-bottom-data">
                        <mu-icon value="chat" class="card-bottom-icon" :size="20"/>
                        <p>{{item.comment}}</p>
                    </div>
                </mu-col>
            </mu-row>
        </mu-card>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
        TopTitle: '我发布的',
        activeTab: JSON.parse(sessionStorage.getItem("UserTo")) || 'issue',
        issue_data: [],
        dotpraise_data: {},
        collect_data: {},
        attention_data: {},
        bottomSheet: false,
        delclose: false,
        hidebottom: false,
        delData: '',
    }
  },
  created() {
    this.UserissueLogin()
    this.TopTitle = (this.activeTab === 'issue' && '我发布的') || (this.activeTab === 'dotpraise' && '点赞的话题') || (this.activeTab === 'collect' && '收藏的话题') || (this.activeTab === 'attention' && '关注人话题')
  },
  methods: {
    handleTabChange (val) {
        this.activeTab = val
        this.UserissueLogin();
        sessionStorage.setItem("UserTo", JSON.stringify(val));
        this.TopTitle = (val === 'issue' && '我发布的') || (val === 'dotpraise' && '点赞的话题') || (val === 'collect' && '收藏的话题') || (val === 'attention' && '关注人话题')
    },
    UserissueLogin(){
        axios.get('user/' + this.activeTab)
        .then(res => {
            if(res.status === 200) {
                if(this.activeTab === 'issue'){
                    this.issue_data = res.data.data.list;
                }else if(this.activeTab === 'dotpraise'){
                    this.dotpraise_data = res.data.data.list;
                }else if(this.activeTab === 'collect'){
                    this.collect_data = res.data.data.list;
                }else{
                    this.attention_data = res.data.data.list;
                }
            }
        })
    },
    RouterOne(){
        this.$router.go(-1);
    },
    closeBottomSheet () {
        this.bottomSheet = false
    },
    openBottomSheet (index) {
        this.bottomSheet = true;
        this.delData = index;
    },
    delatOpen() {
        this.delclose = true
    },
    delatClose(){
        this.delclose = false
    },
    delat_Close(){
        const index = this.delData;
        this.issue_data.splice(index,1);
        this.delclose = false;
    },
    hideClose() {
        this.hidebottom = false
    },
    hideOpen(){
        this.hidebottom = true
    }
  }
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
    .mu-card-text{
        padding-top: 0;
    }
    .mu-flexbox{
        padding-left: 16px;
        padding-right: 16px;
    }
    .mu-flexbox-item img{
        max-width: 100%;
        height: auto;
    }
    .mu-card{
        margin-top: 0.5em;
    }
    .seize-seat-top{
        margin-top: 104px;
    }
    .card-bottom{
        border-top: 1px solid #eeeeee;
        padding: 5px 16px 5px 16px;
        color: #9e9e9e;
    }
    .card-bottom-data{
        display: -webkit-box; 
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
    }
    .card-bottom-data p{
        padding: 0;
        margin: 0px 0px 0px 5px;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        width: 0%;
    }
    .demo-badge-content{
        background-color: #ffab00;
        color: #ffffff;
        padding-left: 4px;
        padding-right: 4px;
    }
    .bottom-item-list{
        border-bottom: 1px solid #eeeeee;
    }
    .bottom-item-list-munu{
        padding: 0;
        text-align:center;
    }
    .seize-seat-top{
        height: 0;
    }
</style>