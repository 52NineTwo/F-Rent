<template>
    <div style="width:100%;display:flex;flex-wrap: wrap;justify-content: space-between;padding: 0 1rem 0 1rem">
        <mu-card style="width: 49%;margin-top:1rem;" v-for="(content, index) in Content_Data" :key="content.id">
          <mu-list-item :title="content.name" :describeText="content.date">
            <mu-avatar :src="content.icon" slot="leftAvatar"/>
            <mu-icon-menu
      icon="more_vert"
      :anchorOrigin="leftTop"
      :targetOrigin="leftTop"
      slot="right">
      <mu-menu-item titleClass="Mu-list-class" @click="delatOpen(index)" title="删除" />
      <mu-menu-item titleClass="Mu-list-class" @click="hideOpen(index)" title="隐藏" />
      <mu-menu-item titleClass="Mu-list-class" title="推广" />
    </mu-icon-menu>
          </mu-list-item>
          <div @click="GoTo_Detalis(content.name)">
            <mu-card-title :title="content.title"/>
            <mu-card-text>
                {{content.source}}
                <img style="padding-top:0.5rem" :src="content.url[0].name + content.urlid">
            </mu-card-text>
            <mu-card-actions>
                <mu-badge :content="' # ' +  content.label" secondary/>
                <div class="card-bottom-data">
                    <mu-icon value="remove_red_eye" class="card-bottom-icon" :size="20"/>
                    <p>{{content.see}}</p>
                </div>
                <div class="card-bottom-data">
                    <mu-icon value="favorite_border" class="card-bottom-icon" :size="20"/>
                    <p>{{content.fabulous}}</p>
                </div>
                <div class="card-bottom-data">
                    <mu-icon value="chat" class="card-bottom-icon" :size="20"/>
                    <p>{{content.comment}}</p>
                </div>
            </mu-card-actions>
          </div>
        </mu-card>
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
    </div>
</template>
<script>
export default {
  data () {
    return {
      Content_Data: [],
      loading: false,
      scroller: null,
      list_data_login_data: {},
      leftTop: {horizontal: 'left', vertical: 'top'},
      delData: '',
      delclose: false,
      hidebottom: false,
    }
  },
  mounted() {
    this.Login_Data();
    this.scroller = this.$el;
  },
  methods: {
      Login_Data(){
          axios.get('user/issue')
            .then(res => {
                if(res.status === 200) {
                        this.Content_Data = res.data.data.list;
                }
            })
      },
      GoTo_Detalis(name){
        this.$router.push('/PcDetails/' + name);
      },
    loadMore () {
      this.loading = true;
      const list_data_login = '00';
      this.Login_Data(list_data_login);
      setTimeout(() => {
        for (let i = 0; i < this.list_data_login_data.length; i++) {
          this.Content_Data.push(this.list_data_login_data[i])
        }
        this.loading = false
      }, 2000)
    },
    delatOpen(id) {
        this.delclose = true
        this.delData = id;
    },
    delatClose(){
        this.delclose = false
    },
    delat_Close(){
        const index = this.delData;
        console.log(index)
        this.Content_Data.splice(index,1);
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
<style lang="less">
.Mu-list-class{
    color: #474a4f !important;
}
</style>
<style scoped lang="less">
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
    margin-left: .5rem;
    color: #9e9e9e;
}
.card-bottom-data p{
    padding: 0;
    margin: 0px 0px 0px 5px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 0%;
}
.topic-class{
    width: 100%;
    background-color: #fff;
    background-image: url(http://placeimg.com/828/196/any);
    background-size: 100% 100%;  
    -moz-background-size: 100% 100%;  
    -webkit-background-size: 100% 100%;
  }
  .topic-class-left{
    width: 10%;
    color: #fff;
    text-align:center;
  }
  .topic-class-right{
    width: 10%;
    text-align: center;
    color: #fff;
    padding-top: 0.5em;
    line-height: 5em;
  }
  .topic-class-content{
    width: 80%;
    border-left: 3px solid #fff;
    padding-left: 1em;
    color: #fff;
  }
  .topic-class-content p{
    margin: 0;
    padding: 0;
  }
  .topic-class-background{
    background-color: rgba(0,0,0,0.5);
    display: flex;
    width: 100%;
    height: 7em;
    padding: 1em 0 .5em 0;
  }
  .mu-card-header{
    padding: 1rem 1rem 0 1rem;
  }
  .mu-card-title-container,.mu-card-text{
    padding: 0 1rem 0 1rem;
  }
  .mu-card-actions{
    display: flex;
    padding: .5rem 1rem .5rem 1rem;
  }
</style>
