<template>
  <div class="register">
    <div class="headerWrapper">
      <mt-header fixed title="注册">
        <router-link to="/login" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="contentWrapper">
      <div class="inpWrapper">
        <input type="text" placeholder="请输入手机号">
        <div class="msg">
          <input type="text" placeholder="请输入验证码" class="msgInp">
          <button class="msgBtn">获 取</button>
        </div>
        <input type="password" placeholder="请输入至少六位数密码" class="password">
      </div>
      <mt-button type="primary" size="large" class="btn" @click="btn">注册</mt-button>
      <div class="footWrapper">
        注册账号，即表示同意<span class="agrement">《用户协议》</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    btn(){
      this.$router.push('/visitorApply');
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
$base-color = rgb(230, 14, 50)
.register
  width 80%
  margin 0 auto
  padding-top 1rem
  padding-bottom 0.2rem
  color #999999
  .inpWrapper
    display flex
    flex-wrap wrap
    input
      background #F2F2F2
      width 100%
      height 0.4rem
      border-radius 0.05rem
      padding-left 0.12rem
    .msg
      margin-top 0.16rem
      width 100%
      display flex
      align-items center
      .msgInp
        flex 1
      .msgBtn
        font-size 100%
        flex 0 0.7rem
        width 0.7rem
        height 0.4rem
        border none
        background $base-color
        color #ffffff
        border-radius 0.05rem
        margin-left 0.2rem
    .password
      margin-top 0.16rem
  .btn
    margin-top 0.64rem
  .footWrapper
    margin-top 2.04rem
    text-align center
    .agrement
      color $base-color
</style>
