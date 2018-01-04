<template>
  <div id="personalData">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
    <div class='title'>
      <i class="iconfont backIcon" @click="btn_back"></i>
      <div class="text">个人资料</div>
    </div>

    <div class="view1">
    </div>

    <div class="head_div" @click="btn_photo">
      <div class="head_text_div">
        <span>我的头像</span>
      </div>
      <div class="head_icon_div">
        <i class="iconfont intoIcon"></i>
        <img :src="head_img" alt="暂无图片">
      </div>
    </div>

    <div class="name_div"  @click="btn_name">
      <div class="name_text_div">
        <span>我的昵称</span>
      </div>
      <div class="name_icon_div">
        <i class="iconfont intoIcon"></i>
        <span v-text="name"></span>
      </div>
    </div>

     <div class="id_div">
      <div class="id_text_div">
        <span>我的ID号</span>
      </div>
      <div class="id_icon_div">
        <!-- <i class="iconfont intoIcon"></i> -->
        <span v-text="id"></span>
      </div>
    </div>

    <div class="view2">
    </div>

    <div class="address_div"  @click="btn_address">
      <div class="address_text_div">
        <span>我的地址</span>
      </div>
      <div class="address_icon_div">
        <i class="iconfont intoIcon"></i>
      </div>
    </div>

    <div class="password_div"  @click="btn_password">
      <div class="password_text_div">
        <span>密码设置</span>
      </div>
      <div class="password_icon_div">
        <i class="iconfont intoIcon"></i>
      </div>
    </div>

    <div class="bottom_div">
      <div class="bottom_child_div">
        <span class="bottom_text1" @click="btn_changeCompany">更换公司</span>
      </div>
      <div class="bottom_child_div">
        <span class="bottom_text2" @click="btn_exitLogin">退出登录</span>
      </div>
    </div>

    <mt-popup v-model="popupVisible" position="bottom"  class="bottom_pop">
      <div class="native_pho">
        <div class="bottom_pop_div1" @click="btn_native_photo">拍照</div>
        <div class="bottom_pop_div2" @click="btn_native_album">从相册中选择</div>
      </div>
      <div class="view_pop"></div>
      <div class="bottom_pop_cancel_div" @click="btn_cancal">取消</div>
    </mt-popup>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from "vue";
import { Toast } from "mint-ui";
import { Popup } from "mint-ui";
Vue.component(Popup.name, Popup);


export default {
  data() {
    return {
      head_img:
        "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
      name: "张三",
      id: "0000",
      key: "",
      dadaBase64: "",
      popupVisible: false
    };
  },
  created() {},
  methods: {
    btn_back() {
      this.$router.push({
        path: "/my"
      });
    },
    btn_photo() {
      if (this.popupVisible) {
        this.popupVisible = false;
      } else {
        this.popupVisible = true;
      }
    },
    btn_name() {
      this.$router.push({
        path: "/my/personalData/changeName"
      });
    },
    btn_address() {
      this.$router.push({
        path: "/my/personalData/myAddress"
      });
    },
    btn_password() {
      this.$router.push({
        path: "/my/personalData/changePassword"
      });
    },
    btn_changeCompany() {},
    btn_exitLogin() {},
    btn_native_photo() {
      this.callNative("getHeadImage", "", data => {});
      this.popupVisible = false;
    },
    btn_native_album() {
      //callAlbum
      this.callNative("callAlbum", "", data => {});
      this.popupVisible = false;
    },
    btn_cancal() {
      this.popupVisible = false;
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
// body
// background-color #f2f2f2
// background-position center center
// background-repeat no-repeat
// background-size cover
#personalData
  z-index 20
  position fixed
  width 100%
  height 100%
  top 0px
  background-color #f2f2f2
  .title
    display flex
    align-items center
    height 0.48rem
    border-bottom 1px solid #f2f2f2
    background-color #ffffff
    width 100%
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
  .view1
    margin-top 0
    height 0.16rem
    width 100%
    background-color #f2f2f2
  .head_div
    margin-top 0
    background-color #ffffff
    width 100%
    height 0.6rem
    border-bottom 1px solid #f2f2f2
    .head_text_div
      display inline-block
      span
        height 0.6rem
        padding-left 0.15rem
        font-size 0.14rem
        color #999999
        display table-cell
        vertical-align middle
    .head_icon_div
      display inline-block
      // border 1px solid red
      width 30%
      float right
      img
        margin-top 0.05rem
        margin-right 0.1rem
        border-radius 50%
        width 0.5rem
        height 0.5rem
        float right
      .intoIcon:after
        height 0.5rem
        float right
        padding-right 0.15rem
        padding-top 0.24rem
        content '\e640'
        color #cccccc
  .view2
    margin-top 0
    height 0.16rem
    width 100%
    background-color #f2f2f2
  .name_div
    padding-top 0rem
    margin-top 0rem
    background-color #ffffff
    width 100%
    height 0.6rem
    border-bottom 1px solid #f2f2f2
    .name_text_div
      display inline-block
      span
        height 0.6rem
        padding-left 0.15rem
        font-size 0.14rem
        color #999999
        display table-cell
        vertical-align middle
    .name_icon_div
      display inline-block
      // border 1px solid red
      width 30%
      position fixed
      right 0
      float right
      span
        height 0.6rem
        margin-top 0.24rem
        margin-right 0.1rem
        float right
        display table-cell
        vertical-align middle
        font-size 0.14rem
        color #333333
      .intoIcon:after
        height 0.5rem
        float right
        padding-right 0.15rem
        padding-top 0.24rem
        content '\e640'
        color #cccccc
  .id_div
    padding-top 0rem
    margin-top 0rem
    background-color #ffffff
    width 100%
    height 0.6rem
    border-bottom 1px solid #f2f2f2
    .id_text_div
      display inline-block
      span
        height 0.6rem
        padding-left 0.15rem
        font-size 0.14rem
        color #999999
        display table-cell
        vertical-align middle
    .id_icon_div
      display inline-block
      // border 1px solid red
      width 30%
      position fixed
      right 0
      float right
      span
        height 0.6rem
        margin-top 0.24rem
        margin-right 0.15rem
        float right
        display table-cell
        vertical-align middle
        font-size 0.14rem
        color #333333
  .address_div
    padding-top 0rem
    margin-top 0rem
    background-color #ffffff
    width 100%
    height 0.6rem
    border-bottom 1px solid #f2f2f2
    .address_text_div
      display inline-block
      span
        height 0.6rem
        padding-left 0.15rem
        font-size 0.14rem
        color #999999
        display table-cell
        vertical-align middle
    .address_icon_div
      display inline-block
      // border 1px solid red
      width 30%
      position fixed
      right 0
      float right
      .intoIcon:after
        height 0.5rem
        float right
        padding-right 0.15rem
        padding-top 0.24rem
        content '\e640'
        color #cccccc
  .password_div
    padding-top 0rem
    margin-top 0rem
    background-color #ffffff
    width 100%
    height 0.6rem
    border-bottom 1px solid #f2f2f2
    .password_text_div
      display inline-block
      span
        height 0.6rem
        padding-left 0.15rem
        font-size 0.14rem
        color #999999
        display table-cell
        vertical-align middle
    .password_icon_div
      display inline-block
      // border 1px solid red
      width 30%
      position fixed
      right 0
      float right
      .intoIcon:after
        height 0.5rem
        float right
        padding-right 0.15rem
        padding-top 0.24rem
        content '\e640'
        color #cccccc
  // .view3
  // height 2rem
  // background-color #f2f2f2
  .bottom_div
    position fixed
    bottom 0
    display flex
    width 100%
    height 0.5rem
    background-color #ffffff
    border-top 1px solid #f2f2f2
    .bottom_child_div
      flex 1
      display flex
      align-items center
      justify-content center
      .bottom_text1
        font-size 0.18rem
        color #e60e32
      .bottom_text2
        width 100%
        height 0.5rem
        font-size 0.18rem
        color #ffffff
        background-color #e60e32
        display flex
        align-items center
        justify-content center
  .bottom_pop
    margin-bottom 0.1rem
    width 95%
    height 1.54rem
    border-radius 0.05rem
    background-color #888888
    .native_pho
      background-color #ffffff
      width 100%
      border-radius 0.05rem
      .bottom_pop_div1
        height 0.48rem
        border-bottom 1px solid #f2f2f2
        text-align center
        font-size 0.14rem
        color #333333
        display flex
        align-items center
        justify-content center
      .bottom_pop_div2
        height 0.48rem
        border-bottom 1px solid #f2f2f2
        text-align center
        border-radius 0.05rem
        font-size 0.14rem
        color #333333
        display flex
        align-items center
        justify-content center
    .view_pop
      height 0.1rem
      background-color #888888
      // opacity 0.5
    .bottom_pop_cancel_div
      border-radius 0.05rem
      height 0.48rem
      border-bottom 1px solid #f2f2f2
      text-align center
      font-size 0.18rem
      color #e60e32
      // border 1px solid red
      background-color #ffffff
      display flex
      align-items center
      justify-content center
</style>
