<template>
<div style="width:100%;display:flex;flex-wrap: wrap;justify-content: space-between;">
<demo-card @click="GoTo_Detalis(content.name)" v-for="content in Coll_Data" :key="content.id" style="width: 49%;"
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
</div>  
</template>

<script>
import DemoCard from '@/components/Pc/democard'
export default {
  data () {
    return {
      Coll_Data: {},
    }
  },
  components:{
    DemoCard,
  },
  created() {
    this.Login_Data();
  },
  methods: {
      Login_Data(){
          axios.get('user/collect')
            .then(res => {
                if(res.status === 200) {
                    this.Coll_Data = res.data.data.list;
                }
            })
      },
      GoTo_Detalis(name){
        this.$router.push('/PcDetails/' + name);
      },
    }
  }
</script>
