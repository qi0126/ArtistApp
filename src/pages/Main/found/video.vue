<template>
  <div id="video">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
    <div class='title'>
      <i class="iconfont backIcon" @click="btn_back"></i>
      <div class="share_div">
        <i class="iconfont shareIcon" @click="btn_share"></i>
      </div>  
    </div>
    
    <scroller class="main_div"
     
      
      ref="myscroller">
      <div class="mian_content_div">
        <div class='txt_title_div' v-text='this.txt_title'>
          <span >aaa</span>
        </div>
      
        <div class="text_div">
           <div class="text_text_div">
              <span v-text="this.text_1"></span>
           </div>
           <div class="date_time_div">
             <span class="text_date" v-text="this.text_date"></span>
             <span class="text_time" v-text="this.text_time"></span>
           </div>
        </div>

        <div class="video_div">     
          <video class="myVideo" controls="controls" :src="this.videoUrl" :poster="this.videoImg" >
          </video>
        </div>

        <div class="tuijian_title_div">
          <span class="tuijian_title_red"></span>
          <span>推荐</span>
        </div>

        <div class="tuijian_div">
          <div class="item_div" v-for="product in products" @click="itemClick(product)">
            <div class='newIcon_div'>
              <img src="../../../commons/imgs/qita_new.png" class="newIcon" v-if="product.isNew==1">
            </div>
            <div class="img">
              <img :src="product.image" alt="暂无图片">
            </div>
            <div class="info">
              <div class="info_text1" v-text="product.name"></div>
              <div class="info_text2" v-text="product.price"></div>
            </div>
            <div class="shopping">
              <i class="iconfont shoppingIcon"></i>
            </div>
          
          </div>
        </div>
     
    </div>
    </scroller>

    
    

  </div>
</template>
 
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      key: "",
      dateValue_end: "",
      videoUrl:
        "http://img-cdn.wanyouxi.com/video/20170601_mdzz_recommend_video.mp4",
      videoImg:
        "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
      txt_title: "珠玉花开系列足金耳坠",
      text_1: "abcd",
      text_date: "2017-12-1",
      text_time: "15:47",
      products: [
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          name: "男道2017夏季新款日系青少年纯棉短袖T恤男枫叶印花复古圆领TEE潮",
          address: "上海",
          price: 100,
          isNew: 1
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t恤日系棉麻夏装衣服男士青年学生纯色竹节纯棉宽松港风",
          address: "深圳",
          price: 101,
          isNew: 1
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "男道2017夏季新款日系青少年纯棉短袖T恤男枫叶印花复古圆领TEE潮",
          address: "上海",
          price: 102,
          isNew: 1
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
  created() {},
  methods: {
    btn_back() {
      this.$router.push({
        path: "/found"
      });
    },
    btn_share() {
       this.callNative("share", '', data => {
       
      });
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#video
  position fixed
  width 100%
  height 100%
  top 0
  bottom 0
  background-color #f2f2f2
  z-index 20
  overflow scroll
  .title
    // position fixed
    display flex
    align-items center
    z-index 10
    height 0.48rem
    border-bottom 1px solid #f2f2f2
    background-color #ffffff
    width 100%
    .backIcon:after
      font-size 0.18rem
      padding-left 0.15rem
      content '\e63f'
      color #666666
    .share_div
      position fixed
      right 0.15rem
      font-size 0.14rem
      color #333333
      height 0.48rem
      display flex
      align-items center
      justify-content center
      .shareIcon:after
        font-size 0.18rem
        padding-left 0.15rem
        content '\e675'
        color #666666
  .main_div
    position fixed
    margin-top 0.485rem
    width 100%
    background-color #f2f2f2
    .mian_content_div
      .txt_title_div
        height 0.2rem
        padding-top 0.12rem
        padding-left 0.15rem
        background-color #ffffff
        span
          font-size 0.14rem
          color #333333
      .text_div
        padding-left 0.15rem
        background-color #ffffff
        .text_text_div
          display inline-block
          color #999999
          font-size 0.08rem
        .date_time_div
          margin-right 0.15rem
          display inline-block
          float right
          color #999999
          font-size 0.08rem
      .video_div
        padding-top 0.24rem
        width 100%
        height auto
        background-color #ffffff
        .myVideo
          width 100%
          height auto
          background-color #ffffff
    .tuijian_title_div
      width 100%
      background-color #ffffff
      display flex
      align-items center
      height 0.4rem
      .tuijian_title_red
        display inline-block
        margin-left 0.12rem
        height 0.16rem
        border-left 0.033rem solid red
        font-size 0.14rem
      span
        display inline-block
        margin-left 0.1rem
        height 0.12rem
        color #333333
        font-size 0.14rem
    .tuijian_div
      // position fixed
      padding-top 0.04rem
      // background-color #f2f2f2
      padding-left 0.9%
      width 99.2%
      .item_div
        // justify-content space-between //项目之间的间隔比项目与边框的间隔大一倍。
        display inline-block
        border-radius 0.05rem
        // box-sizing border-box
        border 1px solid #f2f2f2
        width 48%
        height 2.05rem
        margin 0.5%
        background-color #ffffff
        align-items center
        font-size 0.15rem
        .newIcon_div
          position fixed
          margin-top 0rem
          margin-left 44.1%
          float right
          .newIcon
            width 0.13rem
            height auto
        .img img
          border-top-left-radius 0.05rem
          border-top-right-radius 0.05rem
          width 100%
          height 1.3rem
        .info
          .info_text1
            margin-left 0.12rem
            padding-top 0.12rem
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
::-webkit-scrollbar
  width 0
  height 0
</style>
