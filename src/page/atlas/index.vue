<template>
    <div>
        <mu-appbar title="图集" class="Top-Class" titleClass="titleclass">
            <mu-icon value="format_align_center" slot="right" @click="toggle" />
        </mu-appbar>
        <mu-popover :trigger="trigger" :open="open" @close="handleClose" popoverClass="popover-class" overlay="true" overlayOpacity="0.3">
            <mu-menu>
                <mu-list-item title="根据标签类别筛选" titleClass="bottom-munu-class" style="border-bottom: 1px solid #9e9e9e">
                    <mu-icon slot="right" value="keyboard_arrow_right" color="#ffffff" style="margin-right: 2em"/>
                </mu-list-item>
                <mu-raised-button label="确定" class="top-munu-button" secondary />
                <mu-raised-button label="取消" class="top-munu-button" primary @click="toggle" />
            </mu-menu>
        </mu-popover>
        <mu-refresh-control :refreshing="refreshing" :trigger="trigger" anchorOrigin="" @refresh="PullTop"/>
        <mu-grid-list :padding="1" style="margin-top: 55px">
            <mu-grid-tile v-for="item in img_Data" :key="item.title" titlePosition="top" actionPosition="left" :rows="item.featured ? 2 : 1" :cols="item.featured ? 2 : 1">
                <img v-lazy="item.url + item.urlid"  />
                <span slot="title">{{item.title}}</span>
                <span slot="subTitle">by <b>{{item.name}}</b></span>
                <mu-icon-button icon="star_border" slot="action"/>
            </mu-grid-tile>
        </mu-grid-list>
    </div>
</template>

<script>
export default {
  data () {
    return {
      img_Data: {},
      LaBel_Data: {},
      bottomNav: 'atlas',
      bottomNavColor: 'atlas',
      refreshing: false,
      trigger: null,
      open: false,
      trigger: null,
    }
  },
  mounted() {
      this.trigger = this.$el;
      this.loginImage();
      this.LaBel_Data = JSON.parse(sessionStorage.getItem("Lab_Type"));
  },
  methods: {
      handleChange (val) {
        this.bottomNav = val
      },
      loginImage (){
          axios.get('/atlas/index')
            .then(res => {
                if(res.status === 200) {
                    this.img_Data = res.data.data.list;
                }
            })
      },
      PullTop () {
          this.refreshing = true;
          this.loginImage()
          setTimeout(() => {
            this.refreshing = false
            }, 3000)
      },
      toggle () {
          this.open = !this.open
      },
      handleClose (e) {
              this.open = false
      },
  }
}
</script>
<style lang="less">
    .popover-class{
        width: 100%;
        padding-right: 1em;
        margin-top: 55px;
        border-radius: 0px !important;
        background-color: #474a4f !important;
    }
    .bottom-munu-class{
        color: #ffffff;
    }
    .titleclass{
        font-size: 1.2em;
        text-align: center;
        margin-left: 9.4%;
    }
</style>
<style scoped lang="less">
    .mu-paper{
        position:fixed;
        width: 100%;
        bottom: 0;
        table-layout: fixed;
    }
    .Top-Class{
        position:fixed;
        top: 0;
    }
    .mu-dropDown-menu-text{
        color: #ffffff;
    }
    .popover-class{
        width: 100%;
        padding-right: 1em;
        margin-top: 55px;
        border-radius: 0px;
        background-color: #474a4f;
    }
    .top-munu-button{
        margin: 1em 1em 0 1em;
        width: 39%;
    }
</style>