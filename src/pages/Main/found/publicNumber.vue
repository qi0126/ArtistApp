<template>
  <div id="publicNumber">
    <scroller class="main_div"
      :on-refresh="refresh" 
      ref="myscroller">
        <div class="item_div" v-for="item in items" @click="itemClick(item)">
          <div class='date_div' v-text="item.date">
          </div>
          <div class="img">
             <img :src="item.image" alt="暂无图片">
          </div>
          <div class="info">
            <div class="info_text1" v-text="item.name"></div>
            <div class="info_text2" v-text="item.address"></div>
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
          date: "2017-12-12"
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "纯棉宽松港风",
          address: "深圳",
          price: 101,
          date: "2017-12-1"
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "日系青少年纯棉短袖T恤",
          address: "上海",
          price: 102,
          date: "2017-12-9"
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t恤日系棉麻夏装衣服男",
          address: "深圳按时收到积分萨克范德萨两地分居开圣诞节奥卡福结束啦大胜靠德飞机撒圣诞快乐",
          price: 103,
          date: "2017-9-2"
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
      }, 300);
    },
    itemClick(item) {
      alert(item.price);
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#publicNumber
  .main_div
    // display flex 不能使用此布局
    // position fixed
    background-color #ffffff
    .item_div
      margin-top 0.12rem
      height 0.52rem
      background-color #ffffff
      align-items center
      border-bottom 1px solid #f2f2f2
      .date_div
        position fixed
        margin-top 0.07rem
        right 0.15rem
        color #999999
        font-size 0.1rem
      .img
        float left
        height 0.4rem
        width 0.4rem
        margin-left 0.15rem
        img
          height 0.4rem
          width 0.4rem
      .info
        float left
        // border 1px solid red
        width 67%
        height 0.4rem
        .info_text1
          margin-left 0.12rem
          margin-top 0.01rem
          font-size 0.14rem
          line-height 0.2rem
          overflow hidden /* 自动隐藏文字 */
          text-overflow ellipsis /* 文字隐藏后添加省略号 */
          white-space nowrap /* 强制不换行 */
          width 90%
        .info_text2
          margin-left 0.12rem
          margin-top 0.03rem
          font-size 0.12rem
          color #999999
          overflow hidden /* 自动隐藏文字 */
          text-overflow ellipsis /* 文字隐藏后添加省略号 */
          white-space nowrap /* 强制不换行 */
          width 100% /* 不允许出现半汉字截断 */
        
</style>
