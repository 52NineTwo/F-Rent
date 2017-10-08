<template>
<div>
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="Tpl" icon="event_note" title="帖子"/>
    <mu-tab value="Comm" icon="forum" title="评论"/>
    <mu-tab value="Coll" icon="star" title="收藏"/>
    <mu-tab value="Supp" icon="thumb_up" title="点赞"/>
    <mu-tab value="Focus" icon="person_add" title="关注" />
  </mu-tabs>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'Tpl'
    }
  },
  created(){
    this.Tab_Active();
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
      this.$router.push('/PcUser/Release/' + val)
    },
    Tab_Active(){
      const route = this.$route.path;
      this.activeTab = (route === '/PcUser/Release/Tpl' && 'Tpl') || (route === '/PcUser/Release/Comm' && 'Comm') || (route === '/PcUser/Release/Coll' && 'Coll') 
                      || (route === '/PcUser/Release/Supp' && 'Supp') || (route === '/PcUser/Release/Focus' && 'Focus')
    }
  }
}
</script>