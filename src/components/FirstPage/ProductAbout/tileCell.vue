<template>
    <div class="tileCell">

          <div class="img">
             <div class='newIcon_div'>
               <i class="iconfont newIcon" v-if="proItem.proIsNew==1"></i>
             </div>
             <img  :src="proItem.proImage" alt="暂无图片" @click="gotoDetail">
          </div>
          <div class="info" @click="gotoDetail">
            <div class="info_text1" v-text="proItem.proName" ></div>
            <div class="info_text2" v-text="proItem.proNumber"></div>
          </div>
          <div v-if="proItem.proIsFixWeight">
            <div class="shopping">
              <i class="iconfont shoppingIcon" @click="addInShopCar"></i>
            </div>
          </div>
    </div>
</template>



<script type="text/ecmascript-6">
export default {
  name: "tileCell",
  //   props:['proItem'],
  props: {
    proItem: {
      type: Object,
      default: function() {
        return {
          proName: "无产品1",
          proNumber: "无ID1",
          proIsNew: 0,
          proImage: ""
        };
      }
    }
  },
  components: {},
  data() {
    return {
      title: "aaaaaa"
    };
  },

  methods: {
    parentMsg: function (msg) {
      alert("dddddd"+msg);
    },
    addInShopCar(){
      this.$emit('addShopCar');
    },

    gotoDetail(){
      this.$emit('gotoDetail');
    }


  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .tileCell
      display inline-block
      border-radius 0.05rem
      border 1px solid #f2f2f2
      width 48.0%
      height 2.05rem
      margin 0.7%
      background-color #ffffff
      align-items center
      font-size 0.15rem
      float left

      .img
        img
          border-top-left-radius 0.05rem
          border-top-right-radius 0.05rem
          width 100%
          height 1.3rem
        .newIcon_div
          position fixed
          margin-top 0.005rem
          margin-left 43.5%
          float right
          .newIcon:after
            content '\e67f'
            color #e60e32  
      .info
        .info_text1
          margin-left 0.12rem
          margin-top 0.12rem
          font-size 0.14rem
          color #333333
          overflow hidden /* 自动隐藏文字 */
          text-overflow ellipsis /* 文字隐藏后添加省略号 */
          white-space nowrap /* 强制不换行 */
          width 90% /* 不允许出现半汉字截断 */
        .info_text2
          margin-left 0.12rem
          margin-top 0.08rem
          font-size 0.12rem
          color #999999
      .shopping
        margin-top 0.05rem
        margin-right 0.12rem
        float right
        .shoppingIcon:after
          padding-left 0.15rem
          content '\e64c'
          color #e60e32
</style>
