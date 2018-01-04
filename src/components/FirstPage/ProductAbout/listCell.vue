<template>
    <div class="listCell">

          <div class="img">
             <img  :src="proItem.proImage" alt="暂无图片">
          </div>
          <div class="info">
            <div class="info_text1" v-text="proItem.proName"></div>
            <div class="info_text2" v-text="proItem.proNumber"></div>
          </div>
          <div v-if="proItem.proIsFix">
            <div class="shopping">
              <i class="iconfont shoppingIcon"></i>
            </div>
          </div>

    </div>
</template>



<script type="text/ecmascript-6">
export default {
  name: "listCell",
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

  methods: {}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .listCell
      margin-top 0.12rem
      height 0.85rem
      background-color #ffffff
      align-items center
      // font-size 0.15rem
      border-bottom 1px solid #f2f2f2
      .img
        float left
        height 0.75rem
        width 1rem
        img
          height 0.75rem
          width 1rem
      .info
        float left
        // border 1px solid red
        width 67%
        height 0.75rem
        .info_text1
          margin-left 0.12rem
          margin-top 0rem
          font-size 0.14rem
        .info_text2
          margin-left 0.12rem
          margin-top 0.08rem
          font-size 0.12rem
          color #999999
      .shopping
        margin-top -0.05rem
        margin-right 0.12rem
        float right
        .shoppingIcon:after
          padding-left 0.15rem
          content '\e64c'
          color #e60e32
</style>
