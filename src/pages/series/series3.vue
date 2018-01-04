<template>
  <div id="series3">
    <div class='title'>
      <i class="iconfont backIcon" @click="btn_back"></i>
      <div class="text" v-text='title_info'></div>
    </div>

    <scroller class="main_div"
      :on-refresh="refresh"
      :on-infinite="infinite"
      ref="myscroller">
        <div class="item_div" v-for="item in items" @click="itemClick(item)">
          <div class="img">
             <img :src="item.image" alt="暂无图片">
          </div>
          <div class="info">
            <div class="info_text1" v-text="item.name"></div>
            <div class="info_text2" v-text="item.price"></div>
          </div>
          <div class="shopping">
            <i class="iconfont shoppingIcon"></i>
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
          name: "男道2017夏季新款日系青少年纯棉短袖T恤男枫叶印花复古圆领TEE潮",
          address: "上海",
          price: 100
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t恤日系棉麻夏装衣服男士青年学生纯色竹节纯棉宽松港风",
          address: "深圳",
          price: 101
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "男道2017夏季新款日系青少年纯棉短袖T恤男枫叶印花复古圆领TEE潮",
          address: "上海",
          price: 102
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t恤日系棉麻夏装衣服男士青年学生纯色竹节纯棉宽松港风",
          address: "深圳",
          price: 103
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          name: "男道2017夏季新款日系青少年纯棉短袖T恤男枫叶印花复古圆领TEE潮",
          address: "上海",
          price: 104
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t恤日系棉麻夏装衣服男士青年学生纯色竹节纯棉宽松港风",
          address: "深圳",
          price: 105
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "男道2017夏季新款日系青少年纯棉短袖T恤男枫叶印花复古圆领TEE潮",
          address: "上海",
          price: 106
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t恤日系棉麻夏装衣服男士青年学生纯色竹节纯棉宽松港风",
          address: "深圳",
          price: 107
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          name: "男道2017夏季新款日系青少年纯棉短袖T恤男枫叶印花复古圆领TEE潮",
          address: "上海",
          price: 108
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t恤日系棉麻夏装衣服男士青年学生纯色竹节纯棉宽松港风",
          address: "深圳",
          price: 101
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "男道2017夏季新款日系青少年纯棉短袖T恤男枫叶印花复古圆领TEE潮",
          address: "上海",
          price: 100
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t恤日系棉麻夏装衣服男士青年学生纯色竹节纯棉宽松港风",
          address: "深圳",
          price: 101
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t恤日系棉麻夏装衣服男士青年学生纯色竹节纯棉宽松港风",
          address: "深圳",
          price: 101
        }
      ]
    };
  },
  methods: {
    btn_back() {
      this.$router.push({
        path: "/cameraIdentificationResult"
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
#series3
  .title
    position fixed
    display flex
    align-items center
    z-index 10
    height 0.48rem
    border-bottom 1px solid #cccccc
    background-color #ffffff
    width 100%
    .text
      padding-right 0.15rem
      width 100%
      font-size 0.18rem
      text-align center
    .backIcon:after
      padding-left 0.15rem
      content '\e63f'
      color $base-color
  .main_div
    // display none
    // margin-top 1.08rem
    // display flex 不能使用此布局
    margin-top 0.48rem
    padding-top 0.05rem
    background-color #f2f2f2
    padding-left 0.8%
    .item_div
      // justify-content space-between //项目之间的间隔比项目与边框的间隔大一倍。
      display inline-block
      border-radius 0.05rem
      // box-sizing border-box
      border 1px solid #f2f2f2
      width 47.6%
      height 2.05rem
      margin 0.5%
      background-color #ffffff
      align-items center
      font-size 0.15rem
      .img img
        border-top-left-radius 0.05rem
        border-top-right-radius 0.05rem
        width 100%
        height 1.3rem
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
          color $base-color
</style>
