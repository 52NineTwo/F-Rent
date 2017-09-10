<template>
  <div>
      <mu-appbar title="展集" class="Top-Class" titleClass="titleclass" />
      <div class="seize-seat-top"></div>
      <slider
      :pagination-visible="true"
      :slides="swiper_data"
      :auto="0">

      <div style="position: relative" v-for="(slide,index) in swiper_data" :key="index">
        <a>
          <img width="100%" style="margin-top: 3em" :src="slide.url + slide.id" />
          <span class="title-mask" v-if="slide.title">
            <p>by {{slide.name}}</p>
            <p>{{slide.title}}</p>
            <mu-flat-button to="/exhibition/atlas" class="more-btn" labelPosition="before"  label="更多" icon="more_vert" primary/>
          </span>
        </a>
      </div>
    </slider>
    <div class="topic-class" @click="To_Potic">
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
    <div class="topped">
        <span class="topped-header">
            <mu-icon value="whatshot" style="float:left;margin-top:0.35em;margin-left:.5em" color="rgb(244,67,54)"/>热帖互动</span>
        <mu-divider />
        <div class="topped-content" v-for="topped in Topped_Data" :key="topped.urlid">
            <span class="topped-content-text">
                {{topped.describe}}<mu-badge class="demo-badge-content">#{{topped.label}}</mu-badge>
            </span>
            <span class="topped-content-img">
                <img v-lazy="topped.icon + topped.urlid" width="100%">
            </span>
        </div>
    </div>
  </div>
</template>

<script>
import slider from '../../components/slide.vue'
export default {
  data () {
    return {
      swiper_data: [],
      Topped_Data: {},
      img: 'http://placeimg.com/828/414/any',
    }
  },
  created() {
    axios.get('Attlas')
    .then(res => {
      if(res.status === 200) {
          this.swiper_data = res.data.data.list;
      }
    })
    axios.get('exhibition/topped')
    .then(res => {
      if(res.status === 200) {
          this.Topped_Data = res.data.data.list;
      }
    })
  },
  components: {
      slider
    },
  methods: {
    To_Potic(){
        this.$router.push("/exhibition/topic")
    }
  }
}
</script>
<style lang="less">
  .titleclass{
      font-size: 1.2em;
      text-align: center;
  }
</style>
<style scoped lang="less">
  .Top-Class{
      position:fixed;
      top: 0;
      box-shadow: 0px 0px 0px !important;
  }
  .seize-seat-top{
      height: 56px;
  }
  .title-mask{
    background-color: #474a4f;
    position: absolute;
    left: 0px;
    top: 0;
    height:3em;
    line-height:1.5em;
    text-align: center;
    text-overflow: ellipsis;
    width: 100%;
    color: #fff
  }
  .title-mask p{
    margin: 0;
  }
  .swiper {
    width: 100%;
  }
  .swiper-pagination-bullet.active {
    background-color: rgb(244, 67, 54) !important;
  }
  .swiper-pagination-bullet {
    background: #fff !important;
    opacity: 1 !important;
    margin: 0 2px !important;
    z-index: 9;
  }
  .horizontal .swiper-pagination {
    margin-right: 10px !important;
    width: 95% !important;
    text-align: right !important;
  }
  .more-btn{
    position: absolute;
    right:0;
    top:0;
    height:1.5em;
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
  .topped{
    height: 100;
    margin-top: .5em;
    background-color: #fff;
  }
  .topped-header{
    height: 3em;
    line-height: 3em;
    padding-left: 0.5em;
  }
  .topped-content{
    width: 100%;
    padding: 1em;
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,0.12);
  }
  .topped-content-text{
    width: 60%;
  }
  .topped-content-img{
    padding-left: 10%;
    width: 40%;
  }
  .demo-badge-content{
      background-color: #ffab00;
      color: #ffffff;
      padding-left: 4px;
      padding-right: 4px;
  }
</style>
