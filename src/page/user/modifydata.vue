<template>
<div>
    <mu-appbar title="个人资料" titleClass="titleClass" class="Top-Class">
        <mu-icon-button icon="keyboard_arrow_left" slot="left" to="/user" />
    </mu-appbar>
    <div class="seize-seat-top"></div>
    <mu-sub-header>基本资料</mu-sub-header>
    <mu-text-field class="FyData-TopInput" label="昵称"  icon="contacts" labelFloat/>
    <mu-text-field class="FyData-TopInput" label="微信"  icon="comment" labelFloat/>
    <mu-sub-header>详细资料</mu-sub-header>
    <mu-list-item :title="gender" style="border-bottom: 1px solid #eeeeee;" class="FyData-TopInput" @click="opengenderSheet">
      <mu-icon value="chevron_right" slot="right" />
      <mu-icon value="wc" slot="left" />
    </mu-list-item>
    <mu-list-item :title="regionLabel" class="FyData-TopInput" @click="openregion('bottom')">
      <mu-icon value="chevron_right" slot="right" />
      <mu-icon value="location_on" slot="left" />
    </mu-list-item>
    <mu-sub-header>实名认证(实名唯一且不可更改)</mu-sub-header>
    <mu-text-field class="FyData-TopInput" hintText="真实姓名" icon="assignment_ind"/>
    <mu-sub-header>想找什么(可在发现 - 寻找Ta中展示)</mu-sub-header>
    <div class="label_radio">
        <mu-radio label="室友" name="group"  nativeValue="shiyou" />
        <mu-radio label="交友" name="group"  nativeValue="jiaoyou" />
    </div>
    <mu-sub-header>个性签名</mu-sub-header>
        <mu-text-field class="signature-input" hintText="让别人快速了解你..." :errorText="multiLineInputErrorText" @textOverflow="handleMultiLineOverflow" multiLine :rows="3" :rowsMax="6" :maxLength="100"/>
    <mu-bottom-sheet :open="genderSheet" @close="closegenderSheet">
    <mu-list @itemClick="closegenderSheet">
      <mu-list-item title="男" @click="GenDerSheet('男')"/>
      <mu-list-item title="女" @click="GenDerSheet('女')"/>
    </mu-list>
  </mu-bottom-sheet>
  <mu-popup position="bottom" popupClass="modifydata-popup-bottom" :open="bottomPopup" @close="closeregion('bottom')">
      <mu-row gutter class="Bottom-region-button">
        <mu-col width="33" tablet="50" desktop="50">
            <mu-raised-button label="确定" class="demo-raised-button" @click="confirm('bottom')" backgroundColor="rgb(244, 67, 54)" fullWidth/>
        </mu-col>
        <mu-col width="33" tablet="50" desktop="50">
            <mu-raised-button label="取消" class="demo-raised-button" @click="closeregion('bottom')" primary fullWidth/>
        </mu-col>
    </mu-row>
    <mu-content-block>
        <mu-picker :slots="addressSlots" :visible-item-count="5" @change="addressChange" :values="address"/>
    </mu-content-block>
  </mu-popup>
  <mu-raised-button label="保存" class="BlackList-Btn" style="margin-top: 2em;" backgroundColor="rgb(244, 67, 54)" to="/user"  fullWidth/>
  <mu-raised-button label="返回个人中心" class="BlackList-Btn" to="/user" primary fullWidth/>
</div>
</template>
<script>
const address = {

}
    export default {
    data () {
        return {
            value: '1',
            gender: '请选择性别',
            genderSheet: false,
            regionLabel: '请选择地区',
            bottomSheet: false,
            bottomPopup: false,
            addressSlots: [
                {
                    width: '100%',
                    textAlign: 'right',
                    values: Object.keys(address)
                }, {
                    width: '100%',
                    textAlign: 'left',
                    values: ['北京']
                }
            ],
            address: ['北京', '北京'],
            addressProvince: '北京',
            addressCity: '北京',
            input: '',
            inputErrorText: '',
            multiLineInput: '',
            multiLineInputErrorText: ''
        }
    },
    created() {
        axios.get('region')
        .then(res => {
            if(res.status === 200) {
                this.region_data = res.data.data;
            }
        })
    },
    methods: {
        handleChange (value) {
            this.value = value
        },
        closegenderSheet () {
            this.genderSheet = !this.genderSheet
        },
        opengenderSheet () {
            this.genderSheet = true
        },
        GenDerSheet (gender) {
            this.gender = gender;
        },
        openregion (position) {
            this[position + 'Popup'] = true
        },
        closeregion (position) {
            this[position + 'Popup'] = false
        },
        addressChange (value, index) {
            switch (index) {
                case 0:
                this.addressProvince = value
                const arr = address[value]
                this.addressSlots[1].values = arr
                this.addressCity = arr[0]
                break
                case 1:
                this.addressCity = value
                break
            }
            this.address = [this.addressProvince, this.addressCity]
        },
        confirm(position){
            this.regionLabel = this.addressCity + ' - ' + this.addressProvince
            this[position + 'Popup'] = false;
        },
        handleMultiLineOverflow (isOverflow) {
            this.multiLineInputErrorText = isOverflow ? '超过啦！！！！' : ''
        }
    },
    }

</script>
<style lang="less">
    .mu-text-field-input{
        color: #000;
    }
    .modifydata-popup-bottom{
        width:100%;
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
    .label_radio{
        display: flex;
        justify-content: space-around;
        margin-bottom: 1em;
        padding: 1em;
        background-color: #fff;
    }
    .FyData-TopInput{
        margin: 0;
        width: 100%;
        background-color: #fff;
    }
    .BlackList-Btn{
        margin-top: 1em;
        width:96%;
        margin-left:2%;
    }
    .Bottom-region-button{
        padding: 0.5em;
        border-bottom: 1px solid #eeeeee;
    }
    .signature-input{
        background-color: #fff;
        width: 100%;
        padding: 1em;
    }
    .seize-seat-top{
        height: 56px;
    }
</style>