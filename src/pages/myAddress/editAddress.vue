<template>
  <div id="editAddress">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
    <div class='title'>
      <span @click="btn_save">保存</span>
      <i class="iconfont backIcon" @click="btn_back"></i>
      <div class="text">编辑地址</div>
    </div>
    <div class="contacts_name_div">
      <div class="contacts_name_text_div">
        <span>收货人</span>
      </div>
      <div class="contactsName_div">
        <!-- <i class="iconfont intoIcon"></i> -->
        <input v-model="contacts_name"></input>
      </div>
    </div>

    <div class="contacts_phone_div">
      <div class="contacts_phone_text_div">
        <span>联系方式</span>
      </div>
      <div class="contactsPhone_div">
        <!-- <i class="iconfont intoIcon"></i> -->
        <input v-model="contacts_phone"></input>
      </div>
    </div>
    

     <div class="contacts_address_div">
      <div class="contacts_address_text_div">
        <span>详细地址</span>
      </div>
      <div class="contactsAddress_div" contenteditable="true" v-text="contacts_address">
      </div>
    </div>

    <div class="delect_div" @click="btn_delect">删除</div>

  </div>
  
</template>

<script type="text/ecmascript-6">
import { MessageBox } from "mint-ui";
import { Toast } from "mint-ui";
import { bus } from "../../commons/utils/bus.js";
export default {
  data() {
    return {
      head_img:
        "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
      name: "张三",
      contacts_name: "张三",
      contacts_phone: "13254687892",
      contacts_address:
        "张吉吉哦is奥我asfdffdddddfsadfsafsadfsadfsdafsadfsadfsdafsdafsafssdaf safdsda sdafd sdfsfdfsdfsadsadfff",
      key_name: "",
      dadaBase64: "",
      delect_icon_show: false
    };
  },
  created() {
    var lStorage = window.localStorage;
    // console.log(lStorage.port);
    var item = JSON.parse(localStorage.address_item);
    // alert(item.name);
    this.contacts_name = item.name;
    this.contacts_phone = item.phone;
    this.contacts_address = item.address;

    // bus.$on("address_item", text => {});
  },
  methods: {
    btn_back() {
      this.$router.push({
        path: "/my/personalData/myAddress"
      });
    },

    btn_save() {
      // alert(this.contacts_name.length);
      if (this.contacts_name.length == 0) {
        Toast({
          message: "请填写收货人",
          position: "bottom",
          duration: 2000
        });
      } else if (this.contacts_phone.length == 0) {
        Toast({
          message: "请填写联系方式",
          position: "bottom",
          duration: 2000
        });
      } else if (this.contacts_address.length == 0) {
        Toast({
          message: "请填写详细地址",
          position: "bottom",
          duration: 2000
        });
      } else {
        alert("a");
      }
    },
    btn_delect(item) {
      MessageBox.confirm("确定删除？").then(action => {});
    }
  }
};
</script>
<style>
.mint-msgbox-cancel {
  width: 50%;
  border-right: 1px solid #ddd;
  font-size: 100%;
}
.mint-msgbox-confirm {
  color: #e60e32;
  font-size: 100%;
}
</style>
<style scoped lang="stylus" rel="stylesheet/stylus">
#editAddress
  position fixed
  width 100%
  height 100%
  top 0px
  background-color #f2f2f2
  z-index 20
  overflow scroll
  .title
    position fixed
    display flex
    align-items center
    z-index 10
    height 0.48rem
    border-bottom 1px solid #f2f2f2
    background-color #ffffff
    width 100%
    span
      position fixed
      right 0.15rem
      font-size 0.14rem
      color #333333
      height 0.48rem
      display flex
      align-items center
      justify-content center
    .text
      padding-right 0.15rem
      width 100%
      font-size 0.18rem
      text-align center
    .backIcon:after
      font-size 0.18rem
      padding-left 0.15rem
      content '\e63f'
      color #666666
  .contacts_name_div
    padding-top 0rem
    margin-top 0.585rem
    background-color #ffffff
    width 100%
    height 0.6rem
    border-bottom 1px solid #f2f2f2
    .contacts_name_text_div
      display inline-block
      span
        height 0.6rem
        padding-left 0.15rem
        font-size 0.14rem
        color #999999
        display table-cell
        vertical-align middle
    .contactsName_div
      display inline-block
      // border 1px solid red
      width 70%
      position absolute
      right 0
      float right
      input
        height 0.3rem
        margin-top 0.15rem
        margin-right 0.15rem
        float right
        display table-cell
        vertical-align middle
        font-size 0.14rem
        color #333333
        text-align right
  .contacts_phone_div
    background-color #ffffff
    width 100%
    height 0.6rem
    border-bottom 1px solid #f2f2f2
    .contacts_phone_text_div
      display inline-block
      span
        height 0.6rem
        padding-left 0.15rem
        font-size 0.14rem
        color #999999
        display table-cell
        vertical-align middle
    .contactsPhone_div
      display inline-block
      // border 1px solid red
      width 70%
      position absolute
      right 0
      float right
      input
        height 0.3rem
        margin-top 0.15rem
        margin-right 0.15rem
        float right
        display table-cell
        vertical-align middle
        font-size 0.14rem
        color #333333
        text-align right
  .contacts_address_div
    margin-top 0.1rem
    padding-top 0.12rem
    background-color #ffffff
    width 100%
    .contacts_address_text_div
      span
        height 0.6rem
        padding-left 0.15rem
        font-size 0.14rem
        color #999999
        // display table-cell
        // vertical-align middle
    .contactsAddress_div
      padding-top 0.04rem
      // border 1px solid red
      margin-right 0.15rem
      padding-bottom 0.06rem
      margin-left 0.15rem
      font-size 0.14rem
      color #333333
      line-height 0.24rem
      background-color #ffffff
      text-align left
      word-wrap break-word
      word-break break-all
      outline none
      // -webkit-appearance:none;
      // textarea
      // float right
      // display flex
      // justify-content center
      // border none
      // height 0.4rem
      // overflow hidden
      // resize none
      // font-size 0.14rem
      // color #333333
      // text-align right
      // text-overflow: ellipsis;
      // white-space: nowrap;
.delect_div
  margin-top 0.16rem
  height 0.6rem
  background-color #ffffff
  width 100%
  display flex
  align-items center
  justify-content center
  font-size 0.18rem
  color #e60e32
</style>

