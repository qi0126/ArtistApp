<template>
  <div id="addAddress">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
    <div class='title'>
      <span @click="btn_save">保存</span>
      <i class="iconfont backIcon" @click="btn_back"></i>
      <div class="text">添加地址</div>
    </div>
    <div class="contacts_name_div">
      <div class="contacts_name_text_div">
        <span>收货人</span>
      </div>
      <div class="contactsName_div">
        <input v-model="contacts_name"  placeholder="请填写收货人姓名"></input>
      </div>
    </div>

    <div class="contacts_phone_div">
      <div class="contacts_phone_text_div">
        <span>联系方式</span>
      </div>
      <div class="contactsPhone_div">
        <!-- <i class="iconfont intoIcon"></i> -->
        <input v-model="contacts_phone"  type="number" placeholder="请填写收货人联系方式"></input>
      </div>
    </div>
    

    <div class="contacts_address_div">
      <div class="contacts_address_text_div">
        <span>详细地址</span>
      </div>
      <!-- <autoTextarea class="contactsAddress_div" v-model="contacts_address" placeholder="请输入正确详细的收获地址" /> -->
      
      <!-- <input v-model="contacts_address" placeholder="请输入正确详细的收获地址" @keyup="address_change" v-show="isAddress" ></input> -->
      <div class="contactsAddress_div" ref='contactsAddress' contenteditable="true" v-text="contacts_address"  placeholder="请输入正确详细的收获地址"  @keyup="address_change">
      </div>
    </div>
   
  </div>
  
</template>

<script type="text/ecmascript-6">
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      head_img:
        "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
      name: "",
      contacts_name: "",
      contacts_phone: "",
      contacts_address: "请输入正确详细的收获地址",
      value: "",
      isAddress: true,
      flag: false
    };
  },
  created() {
  },
  methods: {
    btn_back() {
      this.$router.push({
        path: "/my/personalData/myAddress"
      });
    },
    btn_save() {
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
      } else if (this.$refs.contactsAddress.innerHTML.length == 0) {
        Toast({
          message: "请填写详细地址",
          position: "bottom",
          duration: 2000
        });
      } else {
        alert("a");
      }
    },
    address_change() {
      if (this.contacts_address.length==0) {
        this.isAddress = true;
      } else {
        this.isAddress = false;
      }
    }
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
#addAddress
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
      // width 80%
      position absolute
      right 0
      float right
      input
        width 100%
        height 0.3rem
        margin-top 0.15rem
        margin-right 0.15rem
        float right
        display table-cell
        vertical-align middle
        font-size 0.14rem
        color #333333
        text-align right
      input::-webkit-input-placeholder
        width 100%
        color #999999
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
        width 100%
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
      border-color #ffffff
      resize none
      padding-top 0.04rem
      // // border 1px solid red
      margin-right 0.15rem
      padding-bottom 0.06rem
      padding-left 0.15rem
      font-size 0.14rem
      color #333333
      line-height 0.24rem
      background-color #ffffff
      text-align left
      word-wrap break-word
      word-break break-all
      outline none
  // input
  //   padding-left 0.15rem
  //   padding-top 0.04rem
  //   line-height 0.24rem
  //   padding-bottom 0.06rem
</style>

