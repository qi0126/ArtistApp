<template>
  <div class="visitorApply">
    <div class="headerWrapper">
      <mt-header fixed title="申请审核"></mt-header>
    </div>
    <div class="contentWrapper">
      <div class="userInfo">
        <div class="userImg">
          <img src="static/imgs/test2.png">
        </div>
        <span class="userId">ID：16888</span>
      </div>
      <div class="segLine">
        <segLine desc="选择公司"></segLine>
      </div>
      <div class="selComponyWrapper">
        <div class="cmImg">
          <v-touch @press="longTap" class="cmChild">
            <img src="../../commons/imgs/selIcon.png" class="selIcon">
            <img src="static/imgs/test1.png">
          </v-touch>
        </div>
        <div class="cmImg">
          <v-touch @press="longTap" class="cmChild">
            <img src="../../commons/imgs/selIcon.png" class="selIcon">
            <img src="static/imgs/test1.png">
          </v-touch>
        </div>
        <div class="addCm cmChild">
          <i class="iconfont addIcon"></i>
          <span>添加公司</span>
        </div>
      </div>
      <mt-button type="primary" size="large" class="btn" @click="btn">申请访问（访客）</mt-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import segLine from "@/components/segLine/segLine";

export default {
  methods: {
    longTap() {
      alert("长按了");
    },
    btn(){
      this.$router.push('/visitorDetail');
    }
  },
  components: {
    segLine
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
$base-color = rgb(230, 14, 50)
.visitorApply
  width 80%
  margin 0 auto
  padding-top 1rem
  padding-bottom 0.2rem
  color #999999
  .contentWrapper
    .userInfo
      display flex
      flex-direction column
      align-items center
      .userImg
        border-radius 50%
        width 0.8rem
        height 0.8rem
        background #E6E6E6
        display flex
        align-items center
        justify-content center
        img
          width 90%
          height 90%
          border-radius 50%
      .userId
        margin-top 0.12rem
    .segLine
      margin 0.7rem 0 0.4rem 0
    .selComponyWrapper
      margin-top 0.3rem
      display flex
      flex-wrap wrap
      justify-content space-between
      .cmChild
        height 0.4rem
        border-radius 0.03rem
        overflow hidden
      .cmImg
        position relative
        margin-top 0.1rem
        img
          height 100%
        .selIcon
          position absolute
          top 0
          left 0
          width 100%
      .addCm
        margin-top 0.1rem
        border 1px dashed gray
        text-align center
        line-height 0.4rem
        padding 0 0.1rem
        .addIcon:after
          content '\e63b'
          color $base-color
    .btn
      margin-top 0.64rem
</style>
