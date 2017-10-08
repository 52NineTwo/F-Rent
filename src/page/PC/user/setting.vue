<template>
<div>
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="data" icon="account_circle" title="个人资料"/>
    <mu-tab value="Phone" icon="phonelink_setup" title="手机绑定"/>
    <mu-tab value="Black" icon="block" title="黑名单"/>
    <mu-tab value="Key" icon="format_align_center" title="关键词过滤"/>
  </mu-tabs>
  <router-view style="margin-top:1rem"></router-view>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'data'
    }
  },
  created(){
    this.Tab_Active()
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
      this.$router.push('/PcUser/Setting/' + val)
    },
    Tab_Active(){
      const route = this.$route.path;
      this.activeTab = (route === '/PcUser/Setting/data' && 'data') || (route === '/PcUser/Setting/Phone' && 'Phone') || (route === '/PcUser/Setting/Black' && 'Black') 
                      || (route === '/PcUser/Setting/Key' && 'Key')
    }
  }
}
</script>