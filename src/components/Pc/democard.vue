<template>
  <div>
      <mu-card style="margin-top:1rem;" >
          <div @click="_click">
            <mu-card-header :title="headername" :subTitle="headerdate">
              <mu-avatar :src="headerimg" slot="avatar"/>
            </mu-card-header>
            <mu-card-title :title="contenttitle"/>
            <mu-card-text>
              {{content}}
              <img style="padding-top:0.5rem;" v-lazy="contentimg">
            </mu-card-text>
            <mu-card-actions>
                <mu-badge :content="contentlabel" secondary/>
                <div class="card-bottom-data">
                    <mu-icon value="remove_red_eye" class="card-bottom-icon" :size="20"/>
                    <p>{{bottomsee}}</p>
                </div>
                <div class="card-bottom-data">
                    <mu-icon value="favorite_border" class="card-bottom-icon" :size="20"/>
                    <p>{{bottomfabulous}}</p>
                </div>
                <div class="card-bottom-data">
                    <mu-icon value="chat" class="card-bottom-icon" :size="20"/>
                    <p>{{bottomcomment}}</p>
                </div>
            </mu-card-actions>
          </div>
        </mu-card>
  </div>
</template>
<script>
export default {
  name: 'inputlsit',
  props: ['headername', 'headerdate',"headerimg","contenttitle","content","contentimg","bottomsee","bottomfabulous","bottomcomment","contentlabel"],
  methods: {
      _click: function () {
        this.$emit('click', function () {
        })
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
