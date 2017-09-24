<template>
<div>
      <div class="content-left" ref="leftmenu">
        <mu-list @change="handleListChange" :value="activeList">
          <mu-raised-button label="发布" icon="create" secondary style="border-radius: 20px;width:80%;margin-left:10%;margin-bottom: .5rem;"/>
          <mu-list-item titleClass="Index-Title-Class" title="综合" value="colligate" >
            <mu-icon slot="left" value="domain" />
          </mu-list-item>
          <mu-list-item titleClass="Index-Title-Class" title="求租" value="seekrent" >
            <mu-icon slot="left" value="visibility" />
          </mu-list-item>
          <mu-list-item titleClass="Index-Title-Class" title="出租" value="Arent" >
            <mu-icon slot="left" value="cast" />
          </mu-list-item>
          <mu-list-item titleClass="Index-Title-Class" title="室友" value="roommate" >
            <mu-icon slot="left" value="group" />
          </mu-list-item>
          <mu-list-item titleClass="Index-Title-Class" v-for="label in LaBel_Data" :key="label.type" :title="label.name" :value="label.type" >
            <mu-icon slot="left" :value="label.icon" />
          </mu-list-item>
        </mu-list>
      </div>
      <div class="content-right">
        <mu-back-top :bottom="80" :right="15" :duration="1000">
            <mu-float-button icon="arrow_upward"/>
        </mu-back-top>
        <router-view></router-view>
      </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      activeList: 'colligate',
      LaBel_Data: {},
    }
  },
  mounted() {
    this.Login_Label();
    this.scroller = this.$el;
    this.activeList = JSON.parse(sessionStorage.getItem("Lab_Type")) || 'colligate';
  },
  methods: {
      Login_Label(){
          axios.get('label')
            .then(res => {
                if(res.status === 200) {
                    this.LaBel_Data = res.data.data.list;
                }
            })
      },
    handleListChange (val) {
      this.activeList = val;
      this.$router.push('/Pcindex/' + val);
      sessionStorage.setItem("Lab_Type", JSON.stringify(val));
    },
  }
}
</script>
<style lang="less">
  .mu-item.selected .mu-item-left{
      color: #ff5252 !important;
  }
  .mu-item.selected{
      color: #ff5252 !important;
      border-bottom: 2px solid #ff5252;
      background-color: rgba(255,255,255,0.05)
  }
  .Index-Title-Class{
    color: #fff;
  }
  ::-webkit-scrollbar {  
    width: 10px;  
    height: 4px;  
    background-color: #F5F5F5;  
  }  
  ::-webkit-scrollbar-track {  
      background: #fff ;  
  }  
  ::-webkit-scrollbar-thumb {  
      background-color:#474a4f;  
  }  
  ::-webkit-scrollbar-thumb:hover {  
      background-color:#474a4f;  
  }
</style>
<style scoped lang="less">
.header-content{
    max-width: 960px;
    margin: 0 auto;
}
.header{
    background-color: #474a4f;
}
.logo{
  font-size: 24px;
  color: white;
  display: inline-block;
  padding: 10px 20px;
  background-color: red;
}

.nav{
  display: inline-block;
  width: calc(100% - 150px);
  margin: 0 auto;
}

.tab{
  margin: 0 auto;
  width: 400px;
}

.content{
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
}

.content-left{
  width: 150px;
  float: left;
  margin-bottom: -4000px;
  padding-bottom: 4000px;
  background-color: #474a4f;
  position: fixed;
  top: 55px;
}
.content-right{
  width: 810px;
  display: inline-block;
  float: right;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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