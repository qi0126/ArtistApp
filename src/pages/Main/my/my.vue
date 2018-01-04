<template>
  <div class="my">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
    <div class="title_background">
      <img src="../../../commons/imgs/haohang_beijing.png" >
    </div>
    <div class='title' @click="btn_personaldata" >
      <img :src="this.head_img">
      <div class="info">
        <div class="info_name" v-text="info_name"></div>
        <div class="info_id" v-text="info_id">id</div>
      </div>
      <div class="my_icon_div">
        <i class="iconfont intoIcon"></i>
      </div>
    </div>

    <div class="my_div" @click="btn_into_general">
      <div class="my_text_div">
        <span>通用</span>
      </div>
      <div class="my_icon_div">
        <i class="iconfont intoIcon"></i>
      </div>
    </div>

     <div class="QR_code_div" @click="btn_into_QRCode">
      <div class="QR_code_text_div">
        <span>二维码分享</span>
      </div>
      <div class="QR_code_icon_div">
        <i class="iconfont intoIcon"></i>
      </div>
    </div>

    <div class="QR_code_div" @click="btn_into_aboutAs">
      <div class="QR_code_text_div">
        <span>关于我们</span>
      </div>
      <div class="QR_code_icon_div">
        <i class="iconfont intoIcon"></i>
      </div>
    </div>


    <div class="QR_code_div" @click="btn_into_contact">
      <div class="QR_code_text_div">
        <span>联系我们</span>
      </div>
      <div class="QR_code_icon_div">
        <i class="iconfont intoIcon"></i>
      </div>
    </div>


    <div class="QR_code_div" @click="btn_into_feedBack">
      <div class="QR_code_text_div">
        <span>意见反馈</span>
      </div>
      <div class="QR_code_icon_div">
        <i class="iconfont intoIcon"></i>
      </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name:'',
  data() {
    return {
      head_img:
        "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
      info_name: "张三",
      info_id: "1325"
    };
  },
  created() {},
  methods: {
    btn_personaldata() {
      //personalData
      this.$router.push({
        path: "/my/personalData"
      });
    },
    btn_into_general() {
      this.$router.push("/my/general");

    },
    btn_into_QRCode() {
      this.$router.push("/my/qrcodeShare");

    },
    btn_into_aboutAs() {
      this.$router.push("/my/general");

    },
    btn_into_contact() {
      this.$router.push("/my/general");

    },
    btn_into_feedBack() {
      this.$router.push("/my/feedback");

    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.my
  position absolute
  width 100%
  top  0
  bottom 0
  background-color #f2f2f2
  
  .title_background
    position fixed
    height 1.37rem
    img
      width 101%
      height 1.37rem
  .title
    margin-top 0.48rem
    position fixed
    display flex
    align-items center
    height 0.8rem
    // border-bottom 1px solid #f2f2f2
    // background-color #ffffff
    img
      margin-left 0.15rem
      width 0.6rem
      height 0.6rem
      border-radius 50%
      border 0.02rem solid #ffffff
    .info
      margin-top 0.25rem
      margin-left 0.12rem
      height 0.6rem
      .info_name
        font-size 0.18rem
        color #ffffff
      .info_id
        margin-top 0.08rem
        height 0.25rem
        font-size 0.14rem
        color #ffffff
    .my_icon_div
      margin-top 0.12rem
      display inline-block
      // border 1px solid red
      position fixed
      right 0rem
      .intoIcon:after
        height 0.5rem
        float right
        padding-right 0.15rem
        padding-top 0.24rem
        content '\e640'
        color #ffffff
  .my_div
    margin-top 1.53rem
    background-color #ffffff
    width 100%
    height 0.6rem
    border-bottom 1px solid #f2f2f2
    .my_text_div
      display inline-block
      span
        height 0.6rem
        padding-left 0.15rem
        font-size 0.14rem
        color #333333
        display table-cell
        vertical-align middle
    .my_icon_div
      display inline-block
      // border 1px solid red
      position fixed
      right 0rem
      .intoIcon:after
        height 0.5rem
        float right
        padding-right 0.15rem
        padding-top 0.24rem
        content '\e640'
        color #cccccc
  .QR_code_div
    background-color #ffffff
    width 100%
    height 0.6rem
    border-bottom 1px solid #f2f2f2
    .QR_code_text_div
      display inline-block
      span
        height 0.6rem
        padding-left 0.15rem
        font-size 0.14rem
        color #333333
        display table-cell
        vertical-align middle
    .QR_code_icon_div
      display inline-block
      position fixed
      right 0rem
      float right
      .intoIcon:after
        height 0.5rem
        float right
        padding-right 0.15rem
        padding-top 0.24rem
        content '\e640'
        color #cccccc
</style>
