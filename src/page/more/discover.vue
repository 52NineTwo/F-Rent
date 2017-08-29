<template>
<div>
    <mu-appbar title="发现" class="Top-Class" titleClass="titleClass">
        <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="RouterOne" />
    </mu-appbar>
    <div class="seize-seat-top"></div>
    <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="house" title="找房子"/>
        <mu-tab value="roomie" title="找室友"/>
        <mu-tab value="friend" title="找朋友"/>
        <mu-tab value="unused" title="找闲置"/>
    </mu-tabs>
    <div class="top-bottom" v-show="TopBottom">
        <mu-icon-button class="top-bottom-btn" icon="keyboard_arrow_down"  @click="Top_Bottom_Card" />
    </div>
    <div position="bottom" class="demo-popup-bottom" v-show="bottomPopup" @close="closeregion('bottom')">
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
    </div>
    <mu-bottom-sheet :open="genderSheet" @close="closegenderSheet">
        <mu-list @itemClick="closegenderSheet">
        <mu-list-item title="任意" @click="GenDerSheet('任意')"/>
        <mu-list-item title="男" @click="GenDerSheet('男')"/>
        <mu-list-item title="女" @click="GenDerSheet('女')"/>
        </mu-list>
    </mu-bottom-sheet>
    <div v-if="activeTab === 'house'">
        <div class="top-bottom-search" v-show="TopSwitchCard">
            <div class="top-bottom-search-card" @click="openregion('bottom')">
                <p >地区</p>
                <p style="margin-right:20%">{{region}}</p>
                <mu-icon value="chevron_right"/>
            </div>
            <div class="top-bottom-search-card">
                <p >标签</p>
                <p style="margin-right:20%">{{label}}</p>
                <mu-icon value="chevron_right"/>
            </div>
            <div class="top-bottom-search-card-btn">
                <mu-raised-button style="width:49%;" label="确定"  fullWidth secondary/>
                <mu-raised-button style="width:49%;" label="取消" @click="Chum_Close_Btn" fullWidth primary/>
            </div>
        </div>
        <div v-bind:class="{'top-bottom-btn-zw': !TopBottom}" class="Content-card">
            <mu-card>
                <img style="width:100%" :src="House_Data.icon + House_Data.urlid" />
                <mu-list-item :title="House_Data.name" :describeText="'性别: ' + House_Data.gender + ' ' + '-' + ' ' + '爱好: ' + Roomie_Data.hobby">
                    <mu-avatar :src="House_Data.icon + House_Data.urlid" slot="leftAvatar"/>
                    <mu-icon value="info" slot="right"/>
                </mu-list-item>
                <div class="Card-content">
                    {{House_Data.signature}}
                </div>
            </mu-card>
            <mu-raised-button style="margin-top:2em" label="下一个" @click="DiscoverLogin" secondary fullWidth/>
        </div>
    </div>
    <div v-if="activeTab === 'roomie'">
        <div class="top-bottom-search" v-show="TopSwitchCard">
            <div class="top-bottom-search-card" @click="opengenderSheet">
                <p >性别</p>
                <p style="margin-right:30%">{{gender}}</p>
                <mu-icon value="chevron_right"/>
            </div>
            <div class="top-bottom-search-card" @click="openregion('bottom')">
                <p >地区</p>
                <p style="margin-right:30%">{{region}}</p>
                <mu-icon value="chevron_right"/>
            </div>
            <div class="top-bottom-search-card">
                <p >爱好</p>
                <p style="margin-right:30%">{{hobby}}</p>
                <mu-icon value="chevron_right"/>
            </div>
            <div class="top-bottom-search-card">
                <p >标签</p>
                <p style="margin-right:30%">{{label}}</p>
                <mu-icon value="chevron_right"/>
            </div>
            <div class="top-bottom-search-card-btn">
                <mu-raised-button style="width:49%;" label="确定"  fullWidth secondary/>
                <mu-raised-button style="width:49%;" label="取消" @click="Chum_Close_Btn" fullWidth primary/>
            </div>
        </div>
        <div v-bind:class="{'top-bottom-btn-zw': !TopBottom}" class="Content-card">
            <mu-card>
                <img style="width:100%" :src="Roomie_Data.icon + Roomie_Data.urlid" />
                <mu-list-item :title="Roomie_Data.name" :describeText="'性别: ' + Roomie_Data.gender + ' ' + '-' + ' ' + '爱好: ' + Roomie_Data.hobby">
                    <mu-avatar :src="Roomie_Data.icon + Roomie_Data.urlid" slot="leftAvatar"/>
                    <mu-icon value="info" slot="right"/>
                </mu-list-item>
                <div class="Card-content">
                    {{Roomie_Data.signature}}
                </div>
            </mu-card>
            <mu-raised-button style="margin-top:2em" label="下一个" @click="DiscoverLogin" secondary fullWidth/>
        </div>
    </div>
    <div v-if="activeTab === 'friend'">
        <div class="top-bottom-search" v-show="TopSwitchCard">
            <div class="top-bottom-search-card" @click="opengenderSheet">
                <p >性别</p>
                <p style="margin-right:20%">{{gender}}</p>
                <mu-icon value="chevron_right"/>
            </div>
            <div class="top-bottom-search-card" @click="openregion('bottom')">
                <p >地区</p>
                <p style="margin-right:20%">{{region}}</p>
                <mu-icon value="chevron_right"/>
            </div>
            <div class="top-bottom-search-card">
                <p >爱好</p>
                <p style="margin-right:20%">{{hobby}}</p>
                <mu-icon value="chevron_right"/>
            </div>
            <div class="top-bottom-search-card-btn">
                <mu-raised-button style="width:49%;" label="确定"  fullWidth secondary/>
                <mu-raised-button style="width:49%;" label="取消" @click="Chum_Close_Btn" fullWidth primary/>
            </div>
        </div>
        <div v-bind:class="{'top-bottom-btn-zw': !TopBottom}" class="Content-card">
            <mu-card>
                <img style="width:100%" :src="Friend_Data.icon + Friend_Data.urlid" />
                <mu-list-item :title="Friend_Data.name" :describeText="'性别: ' + Friend_Data.gender + ' ' + '-' + ' ' + '爱好: ' + Roomie_Data.hobby">
                    <mu-avatar :src="Friend_Data.icon + Friend_Data.urlid" slot="leftAvatar"/>
                    <mu-icon value="info" slot="right"/>
                </mu-list-item>
                <div class="Card-content">
                    {{Friend_Data.signature}}
                </div>
            </mu-card>
            <mu-raised-button style="margin-top:2em" label="下一个" @click="DiscoverLogin" secondary fullWidth/>
        </div>
    </div>
    <div v-if="activeTab === 'unused'">
        <div class="top-bottom-search" v-show="TopSwitchCard">
            <div class="top-bottom-search-card" @click="openregion('bottom')">
                <p >地区</p>
                <p style="margin-right:30%">{{region}}</p>
                <mu-icon value="chevron_right"/>
            </div>
            <div class="top-bottom-search-card">
                <p >类别</p>
                <p style="margin-right:30%">{{category}}</p>
                <mu-icon value="chevron_right"/>
            </div>
            <div class="top-bottom-search-card-btn">
                <mu-raised-button style="width:49%;" label="确定"  fullWidth secondary/>
                <mu-raised-button style="width:49%;" label="取消" @click="Chum_Close_Btn" fullWidth primary/>
            </div>
        </div>
        <div v-bind:class="{'top-bottom-btn-zw': !TopBottom}" class="Content-card">
            <mu-card>
                <img style="width:100%" :src="Unused_Data.icon + Unused_Data.urlid" />
                <mu-list-item :title="Unused_Data.name" :describeText="'性别: ' + Unused_Data.gender + ' ' + '-' + ' ' + '爱好: ' + Roomie_Data.hobby">
                    <mu-avatar :src="Unused_Data.icon + Unused_Data.urlid" slot="leftAvatar"/>
                    <mu-icon value="info" slot="right"/>
                </mu-list-item>
                <div class="Card-content">
                    {{Unused_Data.signature}}
                </div>
            </mu-card>
            <mu-raised-button style="margin-top:2em" label="下一个" @click="DiscoverLogin" secondary fullWidth/>
        </div>
    </div>
</div>
</template>
<script>
const address = {
  '北京': ['北京'],
  '广东': ['广州', '深圳', '珠海', '汕头', '韶关', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'],
  '上海': ['上海'],
  '天津': ['天津'],
  '重庆': ['重庆'],
  '辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],
  '江苏': ['南京', '苏州', '无锡', '常州', '镇江', '南通', '泰州', '扬州', '盐城', '连云港', '徐州', '淮安', '宿迁'],
  '湖北': ['武汉', '黄石', '十堰', '荆州', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '黄冈', '咸宁', '随州', '恩施土家族苗族自治州', '仙桃', '天门', '潜江', '神农架林区'],
  '四川': ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中', '资阳', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州'],
  '陕西': ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'],
  '河北': ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水'],
  '山西': ['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'],
  '河南': ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'],
  '吉林': ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边朝鲜族自治州'],
  '黑龙江': ['哈尔滨', '齐齐哈尔', '鹤岗', '双鸭山', '鸡西', '大庆', '伊春', '牡丹江', '佳木斯', '七台河', '黑河', '绥化', '大兴安岭地区'],
  '内蒙古': ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '锡林郭勒盟', '兴安盟', '阿拉善盟'],
  '山东': ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽'],
  '安徽': ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '阜阳', '宿州', '巢湖', '六安', '亳州', '池州', '宣城'],
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
  '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州'],
  '广西': ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '来宾', '崇左'],
  '江西': ['南昌', '景德镇', '萍乡', '九江', '新余', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'],
  '贵州': ['贵阳', '六盘水', '遵义', '安顺', '铜仁地区', '毕节地区', '黔西南布依族苗族自治州', '黔东南苗族侗族自治州', '黔南布依族苗族自治州'],
  '云南': ['昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '迪庆藏族自治州', '大理白族自治州', '楚雄彝族自治州', '红河哈尼族彝族自治州', '文山壮族苗族自治州', '西双版纳傣族自治州'],
  '西藏': ['拉萨', '那曲地区', '昌都地区', '林芝地区', '山南地区', '日喀则地区', '阿里地区'],
  '海南': ['海口', '三亚', '五指山', '琼海', '儋州', '文昌', '万宁', '东方', '澄迈县', '定安县', '屯昌县', '临高县', '白沙黎族自治县', '昌江黎族自治县', '乐东黎族自治县', '陵水黎族自治县', '保亭黎族苗族自治县', '琼中黎族苗族自治县'],
  '甘肃': ['兰州', '嘉峪关', '金昌', '白银', '天水', '武威', '酒泉', '张掖', '庆阳', '平凉', '定西', '陇南', '临夏回族自治州', '甘南藏族自治州'],
  '宁夏': ['银川', '石嘴山', '吴忠', '固原', '中卫'],
  '青海': ['西宁', '海东地区', '海北藏族自治州', '海南藏族自治州', '黄南藏族自治州', '果洛藏族自治州', '玉树藏族自治州', '海西蒙古族藏族自治州'],
  '新疆': ['乌鲁木齐', '克拉玛依', '吐鲁番地区', '哈密地区', '和田地区', '阿克苏地区', '喀什地区', '克孜勒苏柯尔克孜自治州', '巴音郭楞蒙古自治州', '昌吉回族自治州', '博尔塔拉蒙古自治州', '石河子', '阿拉尔', '图木舒克', '五家渠', '伊犁哈萨克自治州'],
  '香港': ['香港'],
  '澳门': ['澳门'],
  '台湾': ['台北市', '高雄市', '台北县', '桃园县', '新竹县', '苗栗县', '台中县', '彰化县', '南投县', '云林县', '嘉义县', '台南县', '高雄县', '屏东县', '宜兰县', '花莲县', '台东县', '澎湖县', '基隆市', '新竹市', '台中市', '嘉义市', '台南市']
}
    export default {
    data () {
        return {
            activeTab: JSON.parse(sessionStorage.getItem("Discover_Top")) || 'house',
            TopSwitchCard: false,
            TopBottom: true,
            gender: '请选择性别',
            region: '请选择地区',
            hobby: '请选择爱好',
            label: '请选择标签',
            category: '请选择类别',
            bottomPopup: false,
            genderSheet: false,
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
            House_Data: {},
            Roomie_Data: {},
            Friend_Data: {},
            Unused_Data: {},
        }
    },
    created() {
        this.DiscoverLogin();
    },
    methods: {
        DiscoverLogin(val){
            axios.get('more/discover/' + this.activeTab)
            .then(res => {
                if(res.status === 200) {
                    if(this.activeTab === 'house'){
                        this.House_Data = res.data.data;
                    }else if(this.activeTab === 'roomie'){
                        this.Roomie_Data = res.data.data;
                    }else if(this.activeTab === 'friend'){
                        this.Friend_Data = res.data.data;
                    }else{
                        this.Unused_Data = res.data.data;
                    }
                }
            })
        },
        RouterOne(){
            this.$router.go(-1);
        },
        handleTabChange (val) {
            this.activeTab = val;
            sessionStorage.setItem("Discover_Top", JSON.stringify(val));
            this.DiscoverLogin();
        },
        Top_Bottom_Card(){
            this.TopBottom = false;
            this.TopSwitchCard = true;
        },
        Chum_Close_Btn(){
            this.TopSwitchCard = false;
            this.TopBottom = true;
        },
        openregion (position) {
            this[position + 'Popup'] = true
        },
        closeregion (position) {
            this[position + 'Popup'] = false
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
            this.regionLabel = this.addressCity + '省' + this.addressProvince + '市'
            this.region = this.regionLabel;
            this[position + 'Popup'] = false;
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
    .seize-seat-top{
        height: 56px;
    }
    .top-bottom{
        width: 100%;
        text-align:center;
    }
    .Top-Bottom-btn-show{
        visibility:hidden;
    }
    .top-bottom-btn{
        border-radius: 0;
        height: 1.5em;
        margin-top: -0.5em;
        width: 2em;
        color: rgb(244, 67, 54);
        background-color: #474a4f
    }
    .top-bottom-btn-zw{
        margin-top: 30px;
    }
    .top-bottom-search{
        position: absolute;
        border-top: 1px solid #9e9e9e;
        width: 100%;
        background-color: #474a4f;
        padding: 0 1em 0.5em 1em;
    }
    .top-bottom-search-card{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #9e9e9e;
        height: 3em;
        width: 100%;
        color: #fff;
    }
    .top-bottom-search-card-btn{
        display: flex;
        margin-top: 1em;
        justify-content: space-between;
    }
    .Bottom-region-button{
        padding: 0.5em;
        border-bottom: 1px solid #eeeeee;
    }
    .demo-popup-bottom{
        width:100%;
        position:fixed;
        bottom: 0;
        background-color: #fff;
    }
    .Card-content{
        border-top:1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
        padding: 0 1em 0 1em;
        height: 3em;
        line-height: 3em;
        color: #000;
        width: 100%;
    }
    .Content-card{
        width:90%;
        margin-left:5%;
        z-index:-1;
        position: absolute;
    }
</style>