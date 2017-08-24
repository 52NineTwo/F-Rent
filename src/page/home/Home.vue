<template>
<div>
    <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="colligate" icon="domain" title="综合"/>
        <mu-tab value="seekrent" icon="visibility" title="求租"/>
        <mu-tab value="Arent" icon="cast" title="出租"/>
        <mu-tab value="roommate" icon="group" title="室友"/>
        <mu-tab :value="LaBel_Type" :icon="LaBel_Icon" ref="LaBel" :title="'#' + LaBel_Name" @click="open('bottom')" />
    </mu-tabs>
    <mu-popup position="bottom" :open="bottomPopup" @close="close('bottom')">
        <mu-appbar title="请选择标签">
        <mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')"/></mu-appbar>
        <mu-content-block>
            <mu-row>
                <mu-col width="33" tablet="33" desktop="33" class="Label-border" v-for="item in LaBel_Data" :key="item.id" :value="activeTab">
                    <mu-raised-button :label="item.name" class="demo-raised-button" :background-color="item.color" @click="LaBelName(item.name,item.type,item.icon)"/>
                </mu-col>
            </mu-row>
        </mu-content-block>
    </mu-popup>
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="PullTop"/>
        <div v-if="activeTab === 'colligate'" class="seize-seat-top">
            <mu-card v-for="item in colligate" :key="item.id">
                <mu-card-header :title="item.name + ' | ' + '#' + item.type" :subTitle="item.date">
                    <mu-avatar :src="item.icon + item.see" slot="avatar"/>
                </mu-card-header>
                <mu-card-text>
                    {{item.source}}
                    <mu-badge  class="demo-badge-content">#{{item.label}}</mu-badge>
                </mu-card-text>
                <mu-flexbox>
                    <mu-flexbox-item class="flex-demo" v-for="items in item.url" :key="items.id" >
                        <img class="mu-col-img" :src="items + item.urlid" :zDepth="1">
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
                        <div class="card-bottom-data" @click="CardFavorite(item.fabulous)">
                            <mu-icon v-if="card_bottom_favorite === item.fabulous" value="favorite" class="card-bottom-icon" :size="20"/>
                            <mu-icon v-else value="favorite_border" class="card-bottom-icon" :size="20"/>
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
        <div v-if="activeTab === 'seekrent'" class="seize-seat-top">
            <mu-card v-for="item in seekrent" :key="item.id">
                <mu-card-header :title="item.name + ' | ' + '#' + item.type" :subTitle="item.date">
                    <mu-avatar :src="item.icon + item.see" slot="avatar"/>
                </mu-card-header>
                <mu-card-text>
                    {{item.source}}
                    <mu-badge  class="demo-badge-content">#{{item.label}}</mu-badge>
                </mu-card-text>
                <mu-flexbox>
                    <mu-flexbox-item class="flex-demo" v-for="items in item.url" :key="items.id" >
                        <img class="mu-col-img" :src="items + item.urlid" :zDepth="1">
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
                        <div class="card-bottom-data" @click="CardFavorite(item.fabulous)">
                            <mu-icon v-if="card_bottom_favorite === item.fabulous" value="favorite" class="card-bottom-icon" :size="20"/>
                            <mu-icon v-else value="favorite_border" class="card-bottom-icon" :size="20"/>
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
        <div v-if="activeTab === 'Arent'" class="seize-seat-top">
            <mu-card v-for="item in Arent" :key="item.id">
                <mu-card-header :title="item.name + ' | ' + '#' + item.type" :subTitle="item.date">
                    <mu-avatar :src="item.icon + item.see" slot="avatar"/>
                </mu-card-header>
                <mu-card-text>
                    {{item.source}}
                    <mu-badge  class="demo-badge-content">#{{item.label}}</mu-badge>
                </mu-card-text>
                <mu-flexbox>
                    <mu-flexbox-item class="flex-demo" v-for="items in item.url" :key="items.id" >
                        <img class="mu-col-img" :src="items + item.urlid"  :zDepth="1">
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
                        <div class="card-bottom-data" @click="CardFavorite(item.fabulous)">
                            <mu-icon v-if="card_bottom_favorite === item.fabulous" value="favorite" class="card-bottom-icon" :size="20"/>
                            <mu-icon v-else value="favorite_border" class="card-bottom-icon" :size="20"/>
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
        <div v-if="activeTab === 'roommate'" class="seize-seat-top">
            <mu-card v-for="item in roommate" :key="item.id">
                <mu-card-header :title="item.name + ' | ' + '#' + item.type" :subTitle="item.date">
                    <mu-avatar :src="item.icon + item.see" slot="avatar"/>
                </mu-card-header>
                <mu-card-text>
                    {{item.source}}
                    <mu-badge  class="demo-badge-content">#{{item.label}}</mu-badge>
                </mu-card-text>
                <mu-flexbox>
                    <mu-flexbox-item class="flex-demo" v-for="items in item.url" :key="items.id" >
                        <img class="mu-col-img" :src="items + item.urlid"  :zDepth="1">
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
                        <div class="card-bottom-data" @click="CardFavorite(item.fabulous)">
                            <mu-icon v-if="card_bottom_favorite === item.fabulous" value="favorite" class="card-bottom-icon" :size="20"/>
                            <mu-icon v-else value="favorite_border" class="card-bottom-icon" :size="20"/>
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
        <div v-if="activeTab === LaBel_Type" class="seize-seat-top">
            <mu-card v-for="item in type_Data" :key="item.id">
                <mu-card-header :title="item.name + ' | ' + '#' + item.type" :subTitle="item.date">
                    <mu-avatar :src="item.icon + item.see" slot="avatar"/>
                </mu-card-header>
                <mu-card-text>
                    {{item.source}}
                    <mu-badge  class="demo-badge-content">#{{item.label}}</mu-badge>
                </mu-card-text>
                <mu-flexbox>
                    <mu-flexbox-item class="flex-demo" v-for="items in item.url" :key="items.id" >
                        <img class="mu-col-img" :src="items + item.urlid" :zDepth="1">
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
                        <div class="card-bottom-data" @click="CardFavorite(item.fabulous)">
                            <mu-icon v-if="card_bottom_favorite === item.fabulous" value="favorite" class="card-bottom-icon" :size="20"/>
                            <mu-icon v-else value="favorite_border" class="card-bottom-icon" :size="20"/>
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
      activeTab: '' ,
      bottomNav: 'Home',
      bottomNavColor: 'Home',
      colligate: {},
      seekrent: {},
      Arent: {},
      roommate: {},
      type_Data: {},
      bottomPopup: false,
      LaBel_Name: '',
      LaBel_Type: '',
      LaBel_Data: {},
      LaBel_Icon: '',
      refreshing: false,
      trigger: null,
      card_bottom_favorite: '',
    }
  },
  created() {
        axios.get('label')
            .then(res => {
            if(res.status === 200) {
                this.LaBel_Data = res.data.data.list;
                sessionStorage.setItem("Lab_Type", JSON.stringify(this.LaBel_Data));
                console.log(this.PhoneValue);
            }
            })
  },
  computed: {
      PhoneValue () {
          return this.$store.state.UserPhone;
      }
  },
  mounted () {
    this.trigger = this.$el;
    this.activeTab = JSON.parse(sessionStorage.getItem("Tab_Label")) || 'colligate';
    if(this.activeTab != 'colligate' && this.activeTab != 'seekrent' && this.activeTab != 'Arent' && this.activeTab != 'roommate'){
        this.LaBel_Type = this.activeTab;
    }
    this.LaBel_Name = (this.LaBel_Type === 'singwei' && '独卫') || (this.LaBel_Type === 'manchum' && '男室友') || (this.LaBel_Type === 'girlchum' && '女室友')
                         || (this.LaBel_Type === 'sumroom' && '晒房') || (this.LaBel_Type === 'feedback' && '反馈') || (this.LaBel_Type === 'gossip' && '闲聊')
                         || (this.LaBel_Type === 'lieidle' && '闲置') || (this.LaBel_Type === 'makefriends' && '交友') || '标签';
    this.LaBel_Icon = {'singwei': 'accessibility','manchum': 'sentiment_satisfied','girlchum': 'face','sumroom': 'account_balance','feedback': 'library_books','gossip': 'public','lieidle': 'remove_shopping_cart','makefriends': 'supervisor_account'}[this.LaBel_Type] || 'view_comfy'; 
    this.LoginData();
  },
  watch: {
      activeTab(curVal,oldVal){
          sessionStorage.setItem("Tab_Label", JSON.stringify(this.activeTab));
          console.log(this.activeTab);
          this.LoginData();
        },
      topPopup (val) {
        if (val) {
            setTimeout(() => {
            this.topPopup = false
            }, 2000)
        }
      }
  },
  methods: {
      PullTop () {
          this.refreshing = true;
          setTimeout(() => {
            this.LoginData()
            }, 1000)
      },
      LoginData () {
          const active_Tab = this.activeTab;
          axios.get(this.activeTab)
            .then(res => {
            if(res.status === 200) {
                const Home_Api = this.activeTab;
                console.log(res.data.data.list);
                if(Home_Api === 'colligate'){
                    this.colligate = res.data.data.list;
                }else if(Home_Api === 'seekrent'){
                    this.seekrent = res.data.data.list;
                }else if(Home_Api === 'Arent'){
                    this.Arent = res.data.data.list;
                    console.log(this.Arent);
                }else if(Home_Api === 'roommate'){
                    this.roommate = res.data.data.list;
                }else{
                    this.type_Data = res.data.data.list;
                }
                this.refreshing = false;
            }
            })
            .catch(res => {
            console.log('err');
            });
      },
    handleTabChange (val) {
        this.activeTab = val;
    },
    handleChange (val) {
        this.bottomNav = val;
    },
    open (position) {
        this[position + 'Popup'] = true;
    },
    close (position) {
    this[position + 'Popup'] = false;
    },
    LaBelName (name,type,icon) {
        this.LaBel_Name = name;
        this.LaBel_Type = type;
        this.activeTab = type;
        this.LaBel_Icon = icon;
        this['bottom' + 'Popup'] = false;
    },
    CardFavorite(fabulous) {
        this.card_bottom_favorite = fabulous;
    },
  }
}
</script>
<<style lang="less">
    .mu-popup, .mu-popup-bottom{
        margin-bottom: 56px;
        width:100%;
    }
</style>
<style scoped lang="less">
    .mu-tabs{
        position:fixed;
        top: 0;
    }
    .mu-paper{
        position:fixed;
        width: 100%;
        bottom: 0;
        table-layout: fixed;
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
    .Label-border{
        padding: 15px;
        text-align: center;
    }
    .mu-card{
        margin-top: 0.5em;
    }
    .seize-seat-top{
        margin-top: 78px;
    }
    .demo-badge-content{
        background-color: #ffab00;
        color: #ffffff;
        padding-left: 4px;
        padding-right: 4px;
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
</style>