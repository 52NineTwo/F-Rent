<template>
<div>
    <mu-appbar title="收到的评论" class="Top-Class" titleClass="titleClass">
        <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="RouterOne" />
    </mu-appbar>
    <div class="seize-seat-top"></div>
    <mu-card v-for="(item,index) in information_datas" :key="item.id">
            <mu-list-item v-if="item.name != '溯翎'" class="Top-list-item" :title="item.name + ' | ' + '#' + item.type" :describeText="item.date">
                <mu-avatar :src="item.icon + item.iconid" slot="leftAvatar"/>
                <mu-icon value="keyboard_arrow_down" slot="right" @click="openBottomSheet(item.hename,index,item.name)" />
                </mu-icon-menu>
            </mu-list-item>
            <mu-list-item v-else class="Top-list-item" :title="'我' + ' | ' + '#' + item.type" :describeText="item.date">
                <mu-avatar src="http://image.heitem.com/20170831150415508632988.jpg" slot="leftAvatar"/>
                <mu-icon value="keyboard_arrow_down" slot="right" @click="openBottomSheet(item.hename,index,'自己')" />
                </mu-icon-menu>
            </mu-list-item>
            <mu-card-text>
                {{item.source}}
            </mu-card-text>
            <mu-list-item class="Discuss_bottom">
                <span v-if="item.hename != '溯翎'" slot="describe">
                    <span style="color: rgba(0, 0, 0, .87)">{{item.hename}} -</span> {{item.title}}
                </span>
                <span v-else slot="describe">
                    <span style="color: rgba(0, 0, 0, .87)">我 -</span> {{item.title}}
                </span>
            </mu-list-item>
        </mu-card>

    <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
        <mu-list class="bottom-item-list-munu" @itemClick="closeBottomSheet">
            <mu-list-item style="border-bottom:1px solid #eeeeee;" title="删除" @click="delatOpen" />
            <mu-list-item title="拉黑" @click="blockopen" />
        </mu-list>
    </mu-bottom-sheet>
    <mu-popup position="bottom" popupClass="information-popup-bottom" :open="block_close" @close="blockclose">
        <mu-content-block style="padding:0">
            <mu-sub-header>您对"<b>{{block_name}}</b>"的权限设定:</mu-sub-header>
            <div class="bottom-switch">
                <p >是否屏蔽对方的信息？</p>
                <mu-switch/>
            </div>
            <div class="bottom-switch">
                <p >是否允许对方看到我的信息？</p>
                <mu-switch v-model="block_switch" />
            </div>
            <div class="bottom-switch">
                <p >是否允许对方评论我？</p>
                <mu-switch v-model="block_switch" />
            </div>
            <div class="bottom-switch">
                <p >是否允许对方在发现中看到我？</p>
                <mu-switch v-model="block_switch" />
            </div>
            <mu-raised-button label="确定并保存" class="block-btn" secondary fullWidth @click="blockclose"/>
            <mu-raised-button label="取消" class="block-btn" primary fullWidth @click="blockclose"/>
            <div class="block-btn"></div>
        </mu-content-block>
    </mu-popup>
    <mu-dialog :open="delclose" title="" @close="delatClose">
        确定要删除这条评论吗？(不可收回)
        <mu-flat-button slot="actions" @click="delatClose" primary label="取消"/>
        <mu-flat-button slot="actions" primary @click="delat_Close" label="确定"/>
    </mu-dialog>
    <mu-snackbar v-if="toast" :message="InformationToast" action="确定" @actionClick="hideToast" @close="hideToast"/>
</div>
</template>
<script>
    export default {
    data () {
        return {
            information_data: [],
            bottomSheet: false,
            delclose: false,
            block_close: false,
            block_name: '',
            block_switch: true,
            searchShow: true,
            delData: '',
            InformationToast: '',
            toast: false,
            Delat_Name: '',
        }
    },
    created() {
        axios.get('more/information')
        .then(res => {
            if(res.status === 200) {
                this.information_data = res.data.data.list;
            }
        })
    },
    computed: {
        information_datas(){
            return this.information_data.sort((a,b)=>b.id-a.id);
        },
    },
    methods: {
        RouterOne(){
            this.$router.go(-1);
        },
        closeBottomSheet () {
            this.bottomSheet = false
        },
        openBottomSheet (name,index,uname) {
            this.bottomSheet = true
            this.block_name = name
            this.delData = index
            this.Delat_Name = uname
        },
        delatOpen(index) {
            this.delclose = true
        },
        delatClose(){
            this.delclose = false
        },
        blockopen () {
            this.block_close = true
        },
        blockclose () {
            this.block_close = false
        },
        Search_show() {
            this.searchShow = !this.searchShow
        },
        delat_Close(){
            const index = this.delData;
            this.information_datas.splice(index,1);
            this.delclose = false;
            this.InformationToast = '成功删除' + this.Delat_Name + '的评论';
            this.InformationToastOpen();
        },
        hideToast () {
            this.toast = false
            if (this.toastTimer) clearTimeout(this.toastTimer)
        },
        InformationToastOpen(){
            this.toast = true
            if (this.toastTimer) clearTimeout(this.toastTimer)
            this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
        },
    },
    }

</script>
<style lang="less">
    .titleClass{
        text-align:center;
        font-size: 1.15em;
        margin-right: 15.2%;
    }
    .information-popup-bottom{
        width: 100%;
        background-color: #fafafa;
    }
</style>
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
    .bottom-switch{
        height: 3em;
        width: 100%;
        line-height: 3em;
        border-bottom:1px solid #eee;
        display: flex;
        padding: 0 1em 0 1em;
        justify-content: space-between;
        align-items: baseline;
        background-color: #fff;
    }
    .block-btn{
        margin-top:1em;
        width:94%;
        margin-left:3%;
    }
</style>