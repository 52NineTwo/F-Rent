<template>
    <div>
        <mu-appbar title="发表文章" titleClass="titleClass">
            <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="RouterOne" />
        </mu-appbar>
        <mu-raised-button label="请文明发言，珍惜您的账号" fullWidth disabled ></mu-raised-button>
        <mu-card class="top_class">
            <mu-radio v-for="item in Home_Label" :key="item.type" :label="item.name" name="group"  :nativeValue="item.type" v-model="Home_Label_value" class="demo-radio"/>
        </mu-card>
        <mu-card style="margin-bottom: 1em;padding: 1em;">
            <mu-text-field hintText="最多不超过10个字符" :errorText="inputErrorText" @textOverflow="handleInputOverflow" :maxLength="10" fullWidth/><br/>
            <mu-text-field hintText="不允许超过100个字符" helpText="利用空格分段增加可读性" :errorText="multiLineInputErrorText" @textOverflow="handleMultiLineOverflow" multiLine :rows="3" fullWidth :rowsMax="6" :maxLength="100"/><br/>
            <mu-select-field   targetOrigin v-model="game"  :errorText="errorText" fullWidth :icon="LaBel_Icon" @change="label_Icon_data" >
                <mu-menu-item v-for="item in LaBel_Data"  :key="item.icon" :value="item.icon"  :title="item.name + '  |  ' + item.introduce" />
            </mu-select-field>
        </mu-card>
        <mu-card class="center_class">
            <mu-list-item title="实名发布 (实名认证：溯翎)" @click="ListIcon" >
                <mu-avatar src="http://www.muse-ui.org/images/avatar1.jpg" slot="rightAvatar"/>
                <mu-icon :value="list_icon" slot="left" :color="list_icon_color" />
            </mu-list-item>
        </mu-card>
        <mu-sub-header>切勿发布违规信息，否则后果自负！</mu-sub-header>
        <div class="center_class">
            <mu-raised-button  label="立即发布" class="demo-raised-button" backgroundColor="#474a4f" fullWidth /><br /><br />
            <mu-raised-button label="取消" fullWidth/>
        </div>
    </div>
</template>
<script>
    export default {
    data () {
        return {
            input: '',
            inputErrorText: '',
            multiLineInput: '',
            multiLineInputErrorText: '',
            game: '',
            LaBel_Data: {},
            LaBel_Icon: 'view_comfy',
            Home_Label: {},
            Home_Label_value: '',
            bottomSheet: false,
            list_icon: 'radio_button_unchecked',
            list_icon_color: '',
        }
    },
    computed: {
        errorText () {
            return this.game ? '' : '请选择标签,添加标签更容易被看到！'
        }
    },
    created() {
      axios.get('homelabel')
        .then(res => {
            if(res.status === 200) {
                this.Home_Label = res.data.data.list;
                axios.get('label')
                    .then(res => {
                        if(res.status === 200) {
                            this.LaBel_Data = res.data.data.list;
                            //console.log(this.colligate);
                        }
                    })
            }
        })
    },
    methods: {
        handleInputOverflow (isOverflow) {
            this.inputErrorText = isOverflow ? '标题过长！' : ''
        },
        handleMultiLineOverflow (isOverflow) {
            this.multiLineInputErrorText = isOverflow ? '内容字数超出！' : ''
        },
        label_Icon_data (val) {
            this.LaBel_Icon = val
        },
        closeBottomSheet () {
            this.bottomSheet = false
        },
        openBottomSheet () {
            this.bottomSheet = true
        },
        ListIcon () {
            this.list_icon = (this.list_icon === 'radio_button_unchecked' && 'radio_button_checked') || 'radio_button_unchecked';
            this.list_icon_color = (this.list_icon === 'radio_button_checked' && 'red') || '';
        },
        RouterOne(){
            this.$router.go(-1);
        }
    }
    }
</script>
<style scoped lang="less">
    .titleClass{
        text-align:center;
        font-size: 1.15em;
        margin-right: 15.2%;
    }
    .top_class{
        display: flex;
        justify-content: space-around;
        margin-bottom: 1em;
        padding: 1em;
    }
    .center_class{
        margin-bottom: 1em;
        padding:0 1em 0 1em;
    }
</style>
