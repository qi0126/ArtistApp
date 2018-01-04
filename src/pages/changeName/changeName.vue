<template>
  <div id="changeName">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
    <div class='title'>
      <span @click="btn_save">保存</span>
      <i class="iconfont backIcon" @click="btn_back"></i>
      <div class="text">修改昵称</div>
    </div>
    <div class="name_div">
      <input class="oldPassword" v-model="key_name" @keyup="input_change" placeholder="起一个自己喜欢的名字吧">
      <i class="iconfont delectIcon" @click="btn_delect" v-show="delect_icon_show" ></i>  
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
      key_name: "",
      dadaBase64: "",
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
    btn_save() {},
    input_change() {
      if (this.key_name == "") {
        this.delect_icon_show = false;
      } else {
        // alert('a');
        this.delect_icon_show = true;
      }
    },
    btn_delect(){
      this.key_name="";
      this.delect_icon_show = false;
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#changeName
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
      height 0.48rem
      position fixed
      right 0.15rem
      font-size 0.14rem
      color #333333
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
  .name_div
    margin-top 0.3rem
    width 78%
    margin-left 12%
    border-bottom 1px solid #f2f2f2
    height 0.3rem
    display flex
    align-items center
    input
      width 90%
      font-size 0.14rem
      color 333333
    input::-webkit-input-placeholder
      color #999999
      font-size 0.14rem
    .delectIcon:after
      margin-left 0.1rem
      padding-right 0.05rem
      padding-top 0.07rem
      content '\e677'
      color #999999
</style>
