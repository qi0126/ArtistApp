<template>
  <div id="changePassword">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
    <div class='title'>
      <span>保存</span>
      <i class="iconfont backIcon"  @click="btn_back"></i>
      <div class="text">修改密码</div>
    </div>

    <div class="oldPassword_div">
        <span>原密码</span>
        <input class="oldPassword"   type="password" onkeypress="return event.keyCode>=48&&event.keyCode<=57" ng-pattern="/[^a-zA-Z]/"  v-model="key_oldPassword" @keyup="input_change_oldPassword" placeholder="请输入原始密码">
    </div>

     <div class="newPassword_div">
        <span>新密码</span>
        <input class="oldPassword"  type="password" v-model="key_newPassword" @keyup="input_change_newPassword" placeholder="请输入原始密码">
    </div>

     <div class="surePassword_div">
        <span>再次确认</span>
        <input class="oldPassword"  type="password" v-model="key_surePassword" @keyup="input_change_surePassword" placeholder="请输入原始密码">
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      head_img:
        "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
      name: "张三",
      id: "0000",
      key_oldPassword: "",
      key_newPassword: "",
      key_surePassword: "",
      delect_icon_show: false
    };
  },
  created() {},
  methods: {
    btn_back() {
      this.$router.push({
        path: "/my/personalData"
      });
    },
    input_change_oldPassword() {
      if (this.key_oldPassword == "") {
      } else {
      }
    },
    input_change_newPassword() {
      if (this.key_newPassword == "") {
      } else {
      }
    },
    input_change_surePassword() {
      if (this.key_surePassword == "") {
      } else {
      }
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#changePassword
  z-index 20
  .title
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
  .oldPassword_div
    margin-top 0.2rem
    width 75%
    margin-left 12.5%
    border-bottom 1px solid #f2f2f2
    height 0.4rem
    display flex
    align-items center
    span
      width 1.1rem
      font-size 0.14rem
      color #333333
    input
      width 80%
      font-size 0.14rem
      color 333333
    input::-webkit-input-placeholder
      color #999999
      font-size 0.14rem
      // border 1px solid red
  .newPassword_div
    margin-top 0.2rem
    width 75%
    margin-left 12.5%
    border-bottom 1px solid #f2f2f2
    height 0.4rem
    display flex
    align-items center
    span
      width 1.1rem
      font-size 0.14rem
      color #333333
    input
      width 80%
      font-size 0.14rem
      color 333333
    input::-webkit-input-placeholder
      color #999999
      font-size 0.14rem
  .surePassword_div
    margin-top 0.2rem
    width 75%
    margin-left 12.5%
    border-bottom 1px solid #f2f2f2
    height 0.4rem
    display flex
    align-items center
    span
      width 1.1rem
      font-size 0.14rem
      color #333333
    input
      width 80%
      font-size 0.14rem
      color #333333
    input::-webkit-input-placeholder
      color #999999
      font-size 0.14rem
</style>
