<template>
  <div class="visitorDetail">
    <div class="headerWrapper">
      <mt-header fixed title="申请审核">
        <router-link to="/visitorApply" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="contentWrapper">
      <ul class="userInfo">
        <li>
          <span>昵称</span>
          <span class="vText">马云</span>
        </li>
        <li>
          <span>注册手机号</span>
          <span class="vText">1568975622</span>
        </li>
        <li>
          <span>ID号</span>
          <span class="vText">6666</span>
        </li>
      </ul>
      <div class="roleApply">
        <div class="selRole" @click="showRoleSheet">
          <span>申请角色</span>
          <div class="selLink">
            <span class="myRole">{{role}}</span>
            <i class="iconfont selIcon"></i>
          </div>
        </div>
        <div class="uploadImg">
          <i class="iconfont uploadIcon"></i>
          <span class="uploadText">点击上传公司营业执照<br>或其他有效凭证</span>
        </div>
      </div>
      <mt-button class="btn" type="primary" size="large">申 请</mt-button>
    </div>
    <mt-actionsheet
      :actions="roles"
      v-model="showRolesSheet"
      @touchmove.prevent></mt-actionsheet>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      roles: [
        { name: "访客", method: this.saveRole },
        { name: "客户", method: this.saveRole },
        { name: "管理员", method: this.saveRole },
        { name: "销售人员", method: this.saveRole }
      ],
      showRolesSheet: false,
      role: "请选择"
    };
  },
  methods: {
    saveRole(e) {
      this.role = e.name;
    },
    showRoleSheet() {
      this.showRolesSheet = !this.showRolesSheet;
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
$base-color = rgb(230, 14, 50)
.visitorDetail
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  color #999999
  background #F2F2F2
  padding 0.4rem 0 0.2rem 0
  .userInfo
    background #ffffff
    padding-left 0.15rem
    margin 0.1rem 0
    li
      height 0.48rem
      border-bottom 1px solid #F2F2F2
      display flex
      justify-content space-between
      align-items center
      padding-right 0.15rem
      .vText
        color #333333
  .roleApply
    background #ffffff
    margin-bottom 0.64rem
    .selRole
      height 0.48rem
      border-bottom 1px solid #F2F2F2
      display flex
      justify-content space-between
      align-items center
      padding 0 0.15rem
      .selLink
        i.selIcon:after
          content '\e640'
          font-size 0.08rem
        .myRole
          color #333333
  .uploadImg
    padding 0.56rem 0
    display flex
    flex-direction column
    align-items center
    i.uploadIcon:after
      content '\e63a'
      font-size 0.3rem
    .uploadText
      margin-top 0.12rem
      font-size 0.12rem
      text-align center
      line-height 0.15rem
  .btn
    width 80%
    margin 0 auto
</style>
