<template>
<div>
    <mu-appbar title="发布的评论" class="Top-Class" titleClass="titleClass">
        <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="RouterOne" />
    </mu-appbar>
    <div class="seize-seat-top"></div>
    <mu-card v-for="item in Discuss_Data" :key="item.id">
            <mu-list-item class="Top-list-item" :title="item.name + ' | ' + '#' + item.type" :describeText="item.date">
                <mu-avatar :src="item.icon" slot="leftAvatar"/>
                <mu-icon value="keyboard_arrow_down" slot="right" @click="openBottomSheet" />
                </mu-icon-menu>
            </mu-list-item>
            <mu-card-text>
                {{item.source}}
            </mu-card-text>
            <mu-list-item class="Discuss_bottom">
                <span slot="describe">
                    <span style="color: rgba(0, 0, 0, .87)">{{item.hename}} -</span> {{item.title}}
                </span>
            </mu-list-item>
        </mu-card>

    <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
        <mu-list class="bottom-item-list-munu" @itemClick="closeBottomSheet">
            <mu-list-item class="bottom-item-list" title="删除" @click="delatOpen" />
        </mu-list>
    </mu-bottom-sheet>
    <mu-dialog :open="delclose" title="" @close="delatClose">
        确定要删除这个帖子吗？(不可收回)
        <mu-flat-button slot="actions" @click="delatClose" primary label="取消"/>
        <mu-flat-button slot="actions" primary @click="delatClose" label="确定"/>
    </mu-dialog>
</div>
</template>
<script>
    export default {
    data () {
        return {
            Discuss_Data: {},
            bottomSheet: false,
            delclose: false,
        }
    },
    created() {
        axios.get('user/discuss')
        .then(res => {
            if(res.status === 200) {
                this.Discuss_Data = res.data.data.list;
            }
        })
    },
    methods: {
        RouterOne(){
            this.$router.go(-1);
        },
        closeBottomSheet () {
            this.bottomSheet = false
        },
        openBottomSheet () {
            this.bottomSheet = true
        },
        delatOpen() {
            this.delclose = true
        },
        delatClose(){
            this.delclose = false
        },
    },
    }

</script>
<style scoped lang="less">
    .Top-Class{
        position:fixed;
        top: 0;
    }
    .titleClass{
        text-align:center;
        font-size: 1.15em;
        margin-right: 15.2%;
    }
    .seize-seat-top{
        height: 56px;
    }
    .Discuss_bottom{
        border-left: 5px solid #474a4f;
        margin-left: 1em;
    }
    .mu-card{
        margin-top: 0.5em;
        padding: 0 0 0.5em 0;
    }
    .mu-card-text{
        padding: 0 1em 0.5em 1em;
    }
    .bottom-item-list-munu{
        padding: 0;
        text-align: center;
    }
</style>