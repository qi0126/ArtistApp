<template>
  <div id="series1">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
    <div class='title'>
      <i class="iconfont backIcon" @click="btn_back"></i>
      <div class="text" v-text='title_info'></div>
    </div>

    <scroller class="main_div"
      :on-refresh="refresh"
      :on-infinite="infinite"
      ref="myscroller">
        <div class="item_div" v-for="item in items" @click="itemClick(item)">
          <div class='newIcon_div'>
            <img src="../../commons/imgs/qita_new.png" class="newIcon" v-if="item.isNew==1">
          </div>
          <div class="img">
             <img :src="item.image" alt="暂无图片">
          </div>
          <div class="info">
            <div class="info_text1" v-text="item.name"></div>
            <div class="info_text2" v-text="item.price"></div>
            <div class="shopping">
              <i class="iconfont shoppingIcon"></i>
            </div>
          </div>
        </div>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      title_info: "阳光金系列",
      password: "",
      remenberPwd: false,
      items: [
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          name: "男道2017夏季新款日",
          address: "上海",
          price: 100,
          isNew: 1
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "纯棉宽松港风",
          address: "深圳",
          price: 101
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "日系青少年纯棉短袖T恤",
          address: "上海",
          price: 102,
          isNew: 1
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t恤日系棉麻夏装衣服男",
          address: "深圳",
          price: 103,
          isNew: 1
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          name: "古圆领TEE潮",
          address: "上海",
          price: 104
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t恤日棉宽松港风",
          address: "深圳",
          price: 105
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "男恤男枫叶印花复古圆领TEE潮",
          address: "上海",
          price: 106,
          isNew: 1
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t竹节纯棉宽松港风",
          address: "深圳",
          price: 107,
          isNew: 1
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          name: "男道2017夏季枫叶印圆领TEE潮",
          address: "上海",
          price: 108,
          isNew: 1
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t恤日系棉生",
          address: "深圳",
          price: 101
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "男道201袖T恤男枫叶印花TEE潮",
          address: "上海",
          price: 100
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短学生纯色",
          address: "深圳",
          price: 101,
          isNew: 1
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖年学生纯色竹节纯港风",
          address: "深圳",
          price: 101
        }
      ]
    };
  },
  methods: {
    btn_back() {
      this.$router.push({
        path: "/firstPage"
      });
    },

    refresh(done) {
      // this.items = [];
      setTimeout(() => {
        done();
      }, 2000);
    },
    infinite(done) {
      setTimeout(() => {
        this.$refs.myscroller.finishInfinite(2); //没有数据时的处理函数
      }, 2000);
      return;
    },

    itemClick(item) {}
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#series1
  .title
    position fixed
    display flex
    align-items center
    z-index 20
    height 0.48rem
    border-bottom 1px solid #f2f2f2
    background-color #ffffff
    width 100%
    .text
      padding-right 0.15rem
      width 100%
      font-size 0.18rem
      text-align center
      color #333333
    .backIcon:after
      padding-left 0.15rem
      content '\e63f'
      color $base-color
  .main_div
    // display flex 不能使用此布局
    // position fixed
    
    margin-top 0.485rem
    background-color #ffffff
    .item_div
      margin-top 0.12rem
      height 0.85rem
      background-color #ffffff
      align-items center
      border-bottom 1px solid #f2f2f2
      margin-left 0.15rem
      .newIcon_div
        position fixed
        margin-top 0.005rem
        margin-left 23%
        float right
        .newIcon
          width 0.13rem
          height auto
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
          margin-top 0.04rem
          font-size 0.14rem
          line-height 0.2rem
          color #333333
        .info_text2
          margin-left 0.12rem
          margin-top 0.08rem
          font-size 0.12rem
          color #999999
        .shopping
          float right
          margin-top 0.05rem
          margin-right 0rem
          .shoppingIcon:after
            padding-left 0.15rem
            content '\e64c'
            color #e60e32
</style>
