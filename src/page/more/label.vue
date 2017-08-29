<template>
<div>
    <mu-appbar title="分类及标签" class="Top-Class" titleClass="titleClass">
        <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="RouterOne" />
    </mu-appbar>
    <div class="seize-seat-top"></div>
    <mu-row>
        <mu-col v-for="item in LaBel_Data" :key="item.type" class="label" width="50" tablet="50" desktop="50">
            <div class="label-content" :style="{ 'background-color': item.color }" @click="RunToLabel(item.type)" > 
                <p>#{{item.name}}<Br />
                ({{item.number}}个话题)</p>
            </div>
        </mu-col>
    </mu-row>
</div>
</template>
<script>
    export default {
    data () {
        return {
            LaBel_Data: {},
        }
    },
    created() {
        axios.get('label')
        .then(res => {
            if(res.status === 200) {
                this.LaBel_Data = res.data.data.list;
            }
        })
    },
    methods: {
        RouterOne(){
            this.$router.go(-1);
        },
        RunToLabel(label){
            sessionStorage.setItem("Tab_Label", JSON.stringify(label));
            this.$router.push('/home');
        }
    },
    }

</script>
<style lang="less">
    .titleClass{
        text-align:center;
        font-size: 1.15em;
        margin-right: 15.2%;
    }
</style>
<style scoped lang="less">
    .Top-Class{
        position:fixed;
        top: 0;
    }
    .seize-seat-top{
        height: 56px;
    }
    .label{
        padding: 0.5em 1em 0.5em 1em;
    }
    .label-content{
        margin-top: 1em;
        width: 100%;
        height: 7em;
        border-radius: 0.5em;
        background-color: #000;
        text-align:center;
        color: #fff;
    }
    .label-content p{
        padding-top: 1.3em;
        font-size: 1.3em;
    }
</style>