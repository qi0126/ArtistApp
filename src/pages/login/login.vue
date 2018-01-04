<template>
  <div class="login">
    <div class="headerWrapper">
      <mt-header fixed title="登录"></mt-header>
    </div>
    <div class="contentWrapper">
      <div class="accountNameWrapper">
        <i class="iconfont anIcon"></i>
        <input type="text" class="username" v-model="accountName" placeholder="请输入用户名">
      </div>
      <div class="passwordWrapper">
        <i class="iconfont pwdIcon"></i>
        <input type="password" class="password" v-model="password" placeholder="请输入密码">
      </div>
      <div class="cBoxWrapper">
        <i class="iconfont falseIcon" :class="{'trueIcon':remenberPwd}" @click="changeState"></i>
        <span @click="changeState">记住密码</span>
      </div>
    </div>
    <div class="middleWrapper">
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
    <div class="loginBtnWrapper">
      <mt-button type="primary" size="large" @click="login">登录</mt-button>
    </div>
    <div class="registerWrapper">
      没有账号？<span class="goRegister" @click="register">立即注册<i class="iconfont goIcon"></i></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import utils from "@/commons/Batar/utils";
import segLine from "@/components/segLine/segLine";

export default {
  data() {
    return {
      accountName: "",
      password: "",
      remenberPwd: false
    };
  },
  methods: {
    login() {
      let params = {
        accountName: this.accountName,
        password: this.password,
        appId: this.appConfig.appId
      };
      this.Axios.post("/account/account/login", params).then(res => {
        let result = res.data;
        let code = result.code;
        if (code == 0) {
          let data = result.data;
          let accessToken = data.token.accessToken;
          let accessTokenExpires = data.token.accessTokenExpires;
          let refreshToken = data.token.refreshToken;
          let refreshTokenExpires = data.token.refreshTokenExpires;

          utils.setCookie("accessToken", accessToken, accessTokenExpires);
          utils.setCookie("refreshToken", refreshToken, refreshTokenExpires);

          this.$router.push({ path: "/index" });
        } else {
          this.$messagebox.alert(result.msg);
        }
      });
    },
    changeState() {
      this.remenberPwd = !this.remenberPwd;
    },
    register() {
      this.$router.push("/register");
    },
    longTap() {
      alert("长按了");
    }
  },
  components: {
    segLine
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
$base-color = rgb(230, 14, 50)
.login
  width 80%
  margin 0 auto
  padding-top 1rem
  padding-bottom 0.2rem
  color #999999
  .contentWrapper
    .accountNameWrapper, .passwordWrapper
      background #F2F2F2
      width 100%
      height 0.4rem
      border-radius 0.05rem
      display flex
      align-items center
      i
        flex 0 0.4rem
        width 0.4rem
        border-right 0.01rem solid #999999
        text-align center
      input
        background none
        flex 1
        padding-left 0.12rem
        height 100%
    .accountNameWrapper
      .anIcon:after
        content '\e643'
    .passwordWrapper
      margin-top 0.16rem
      .pwdIcon:after
        content '\e63e'
    .cBoxWrapper
      margin-top 0.12rem
      display flex
      justify-content flex-end
      .falseIcon:after
        content '\e639'
        margin-right 0.04rem
      .trueIcon:after
        content '\e63d'
        color $base-color
        margin-right 0.04rem
  .middleWrapper
    margin-top 0.35rem
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
  .loginBtnWrapper
    margin-top 0.64rem
  .registerWrapper
    margin-top 0.64rem
    text-align center
    .goRegister
      color #e60e32
      i.goIcon:after
        content '\e642'
</style>
