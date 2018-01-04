<template>
  <div id="cameraIdentificationResult">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
    <div class='title'>
      
      <i class="iconfont backIcon" @click="btn_back"></i>
      <div class="text">拍照识别</div>
    </div>
    <div class="top_div">
        <img :src="photo_img" @click="btn_bigPicture"  alt="暂无图片">
        <div class="search_div">
          <img src="../../commons/imgs/search.png" class="searchImg" alt="暂无图片">
          <input class="search" v-model="key" @keyup="input_change" placeholder="输入关键词细化识别结果">
          <i class="iconfont delectIcon" @click="btn_delect" v-show="delect_icon_show"></i>
        </div>
        <div class="btn_srarch_div"  ref="btn_srarch_div_ref" @click="btn_search">搜索</div>  
    </div>

    <scroller class="main_div"
      :on-refresh="refresh"
      :on-infinite="infinite"
      ref="myscroller">
       
        <div class="item_div" v-for="product in products" @click="itemClick(product)">
          <div class='newIcon_div'>
            <img src="../../commons/imgs/qita_new.png" class="newIcon" v-if="product.isNew==1">
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
    </scroller>

    <div :class="{'dark':isDark}"></div>
    
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      noData: "",
      key: "",
      delect_icon_show: false,
      isDark:true,
      photo_img:"",
        // "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
      selectArr: [],
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
  created() {
    this.goNative();
  },
  methods: {
    goNative() {
      this.callNative("cameraIdentificationResult", '', data => {
        this.photo_img =  "data:image/png;base64,"+data+"";;
      });

      setTimeout(() => {
        this.isDark=false;
      }, 2000);
    },
    btn_back() {
      this.$router.push({
        path: "/firstPage"
      });
    },
    // receiverPicture() {},
    // refresh(done) {
    //   // this.products = [];
    //   setTimeout(() => {
    //     done();
    //   }, 1000);
    // },
    // infinite(done) {
    //    setTimeout(() => {
    //     this.$refs.myscroller.finishInfinite(2); //没有数据时的处理函数
    //   }, 1000);
    //   return;
    // },

    btn_bigPicture() {
      this.callNative("cameraIdentificationResult", '', data => {});
    },
    input_change() {
      if (this.key == "") {
        this.delect_icon_show = false;
        this.$refs.btn_srarch_div_ref.style.backgroundColor = "#cccccc";
      } else {
        this.delect_icon_show = true;
        this.$refs.btn_srarch_div_ref.style.backgroundColor = "#e60e32";
      }
    },
    btn_delect() {
      this.key = "";
      this.delect_icon_show = false;
      this.$refs.btn_srarch_div_ref.style.backgroundColor = "#cccccc";
    },
    btn_search() {
      if (this.key == "") {
        Toast({
          message: "请输入关键词搜索",
          position: "bottom",
          duration: 2000
        });
      } else {
        Toast({
          message: "搜索",
          position: "bottom",
          duration: 2000
        });
      }
    },
    itemClick(product) {
      // alert(product.price);
      this.$router.push({
        path: "firstPage"
      });
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.dark
  z-index 50
  background-color #000
  height: 100%
  position: fixed
  width: 100%
  // opacity 0.1
#cameraIdentificationResult
  .title
    position fixed
    display flex
    align-items center
    z-index 10
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
      font-size 0.18rem
      content '\e63f'
      color #666666
  .top_div
    position fixed
    padding-top 0rem
    margin-top 0.485rem
    z-index 10
    background-color #ffffff
    width 100%
    img
      float left
      width 0.6rem
      height 0.6rem
    .search_div
      margin-left 0.1rem
      margin-top 0.15rem
      padding-top 0.02rem
      display inline-block
      width 2.2rem
      height 0.3rem
      background-color #f2f2f2
      // border 1px solid red
      .searchImg
        padding-left 0.1rem
        margin-top 0.05rem
        width 0.16rem
        height 0.16rem
      input
        padding-left 0.09rem
        margin-top 0.025rem
        // border 1px solid red
        width 72%
        height 0.24rem
        font-size 0.14rem
        background-color #f2f2f2
        
      .delectIcon:after
        float right
        padding-right 0.05rem
        padding-top 0.07rem
        content '\e677'
        color #999999
    .btn_srarch_div
      // display flex
      float right
      margin-top 0.15rem
      margin-right 0.15rem
      width 0.6rem
      height 0.2rem
      border-radius 0.03rem
      background-color #cccccc
      text-align center
      font-size 0.14rem
      color #ffffff
      padding-top 0.1rem
  .main_div
    // display none
    // margin-top 1.08rem
    // display flex 不能使用此布局
    margin-top 1.1rem
    padding-top 0.04rem
    background-color #f2f2f2
    padding-left 0.8%
    bottom 0; 
    .item_div
      // justify-content space-between //项目之间的间隔比项目与边框的间隔大一倍。
      display inline-block
      border-radius 0.05rem
      // box-sizing border-box
      border 1px solid #f2f2f2
      width 47.7%
      height 2.05rem
      margin 0.5%
      background-color #ffffff
      align-items center
      font-size 0.15rem
      .newIcon_div
        position fixed
        margin-top 0rem
        margin-left 44.2%
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
</style>
