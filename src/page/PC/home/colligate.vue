<template>
    <div style="width:100%;display:flex;flex-wrap: wrap;justify-content: space-between;">
        <div class="topic-class">
            <div class="topic-class-background">
                <span class="topic-class-left"></span>
                <span class="topic-class-content">
                    <mu-badge style="float:right;margin-top:0.3em" content="本周话题" secondary  slot="after"/>
                    <p style="font-size: 1.2em">#我和杭州有个约会！#</p>
                    <p style="color: #C9C9C9">我和杭州有个约会！我和杭州有个约会我和杭州有个约会</p>
                </span>
                <span class="topic-class-right">
                    <mu-icon value="keyboard_arrow_right"/>
                </span>
            </div>
        </div>
        <demo-card @click="GoTo_Detalis(content.name)" v-for="content in Content_Data" :key="content.id" style="width: 49%;"
        :headername="content.name"
        :headerdate="content.date"
        :headerimg="content.icon + content.id"
        :contenttitle="content.title"
        :content="content.source"
        :contentimg="content.url[0].name + content.urlid"
        :bottomsee="content.see"
        :bottomfabulous="content.fabulous"
        :bottomcomment="content.comment"
        :contentlabel="'#' + content.label"></demo-card>
        <mu-infinite-scroll :scroller="scroller" :loading="loading"  @load="loadMore"/>
    </div>
</template>
<script>
import DemoCard from '@/components/Pc/democard'
export default {
  data () {
    return {
      Content_Data: {},
      loading: false,
      scroller: null,
      list_data_login_data: {},
    }
  },
  components:{
    DemoCard,
  },
  created() {
    this.Login_Data();
    this.scroller = this.$el;
  },
  methods: {
      Login_Data(list_data_login){
          axios.get('colligate')
            .then(res => {
                if(res.status === 200) {
                    if(!list_data_login){
                        this.Content_Data = res.data.data.list;
                    }else{
                        this.list_data_login_data = res.data.data.list;
                    }
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
    }
  }
}
</script>
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
