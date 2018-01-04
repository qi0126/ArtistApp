<template>
  <div id="find">
    <div class="title_top_div">

      <div class="allClass_div" @click="btn_allClass">
       
        <div class="text">全部品类</div>
         <i class="iconfont allClassIcon_top" v-show="!isAllClass"></i>
         <i class="iconfont allClassIcon_bottom" v-show="isAllClass"></i>
      </div>
       
      <div class="sales_div">
         <div class="txt">按销量排序</div>
         <i class="iconfont salesIcon"></i>
         <img src="">
      </div>

      <div class="screen_div" @click="btn_into_screen">
        <span>筛选条件</span>
       
      </div>

      <div class="switch_div" @click="btn_switch">
        <i class="iconfont switcSinglehIcon" v-show="!isSwitch"></i>
        <i class="iconfont switchDoubleIcon" v-show="isSwitch"></i>
      </div>

    </div>

    <scroller
      class="main_div"
      :on-refresh="refresh"
      :on-infinite="infinite"
      ref="myscroller"
      >
        <div class="main_single_div" v-show="isSwitch">
          <div class="item_div" v-for="item in items" @click="itemClick(item)">
            <div class='newIcon_div'>
              <img src="../../../commons/imgs/qita_new.png" class="newIcon" v-if="item.isNew==1">
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
        </div>
          
        <div class="main_double_div" v-show="!isSwitch">
          <div class="item_div" v-for="item in items" @click="itemClick(item)">
            <div class='newIcon_div'>
              <img src="../../../commons/imgs/qita_new.png" class="newIcon" v-if="item.isNew==1">
            </div>
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
        </div>
    </scroller>
    
    <div class="pop_background" v-show="isAllClass" @click="btn_pop_background"></div>
    <div class="pop_div" v-show="isAllClass">
       <div class="view_div">
         <img src="../../../commons/imgs/xiaojiao.png">
       </div>
       <div class="pop_main_div"> 
         <div class="pop_item_div" v-for="(popItem,index) in items"  :key="index" >
            <span v-text="popItem.address"  :class="{'current':popCurrentIndex===index}" @click="popItemClick(popItem,index)"></span> 
         </div>
       </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      title_info: "阳光金系列",
      password: "",
      isAllClass: false,
      isSwitch: true,
      popCurrentIndex:0,
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
        }
      ]
    };
  },
  methods: {
    refresh(done) {
      // this.items = [];
      setTimeout(() => {
        done();
      }, 300);
    },
    infinite(done) {
      setTimeout(() => {
        this.$refs.myscroller.finishInfinite(2); //没有数据时的处理函数
      }, 500);

      return;
    },

    itemClick(item) {},
    btn_switch() {
      this.isSwitch = !this.isSwitch;
    },
    btn_allClass() {
      this.isAllClass = !this.isAllClass;
    },
    btn_into_screen() {
      this.$router.push({
        path: "/found/screen"
      });
    },
    btn_pop_background(){
      this.isAllClass=false;
    },
    popItemClick(popItem,index){
      this.popCurrentIndex=index;
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#find
  .title_top_div
    // position fixed
    width 100%
    height 0.4rem
    width 100%
    background-color #ffffff
    border-bottom 1px solid #f2f2f2
    
    .allClass_div
      margin-left 0.15rem
      position fixed
      display inline-block
      width 25%
      height 0.4rem
      padding-top 0.12rem
      .text
        float left
        font-size 0.14rem
        color #333333
        padding-top 0.02rem
        // border 1px solid red
      .allClassIcon_top:after
        font-size 0.18rem
        content '\e644'
        color #666666
        // border 1px solid red
      .allClassIcon_bottom:after
        font-size 0.18rem
        content '\e645'
        color #666666
    .sales_div
      position fixed
      margin-left 32%
      display inline-block
      // margin-left 25%
      width 30%
      height 0.4rem
      // border 1px solid red
      padding-top 0.12rem
      .txt
        float left
        margin-top 0.01rem
        font-size 0.14rem
        color #333333
        padding-top 0.01rem
      .salesIcon:after
        font-size 0.11rem
        content '\e671'
        color #666666
    .screen_div
      position fixed
      display inline-block
      margin-left 64%
      width 25%
      height 0.4rem
      padding-top 0.14rem
      // border 1px solid red
      span
        font-size 0.14rem
        color #333333
    .switch_div
      position fixed
      display inline-block
      margin-left 90%
      width 25%
      height 0.4rem
      // border 1px solid red
      padding-top 0.11rem
      .switcSinglehIcon:after
        font-size 0.18rem
        content '\e64d'
        color #666666
      .switchDoubleIcon:after
        font-size 0.18rem
        content '\e64b'
        color #666666
  .main_div
    margin-top 0.41rem
    // background-color #ffffff
    .main_single_div
      // display flex 不能使用此布局
      // position fixed
      background-color #ffffff
      .item_div
        padding-top 0.12rem
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
          // padding-left 0.15rem
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
          .info_text2
            margin-left 0.12rem
            margin-top 0.08rem
            font-size 0.12rem
            color #999999
          .shopping
            float right
            margin-top 0.1rem
            // margin-right 0.1rem
            .shoppingIcon:after
              padding-left 0.15rem
              content '\e64c'
              color #e60e32
    .main_double_div
      padding-top 0.02rem
      background-color #f2f2f2
      padding-left 0.9%
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
          margin-top 0.006rem
          margin-left 43.9%
          float right
          .newIcon
            width 0.14rem
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

  .pop_background
    position absolute
    width 100%
    top  0.3rem
    bottom 0
    background-color #333333
    opacity 0.5
    
  .pop_div
    position absolute
    width 100%
    top  0.3rem
    
    // bottom 0
    .view_div
      background-color #ffffff 
      height 0.115rem
      img 
        width 100%
        height 0.05rem
    .pop_main_div
      position absolute
      width 100%
      background-color #f2f2f2
      // height auto
      max-height 2.5rem
      overflow scroll
      .pop_item_div
        // margin 0.3%
        padding-right 0.4%
        margin-left 0.3%
        margin-bottom 0.5%
        // padding 0.5%
        width 49.2%
        float left
        line-height 0.2rem
        // margin-left 0.15rem
        background-color #ffffff
        height 0.4rem
        span 
          padding-left 0.12rem
          color #333333
          font-size 0.14rem
          display flex
          height 0.4rem
          align-items center
        .current
          padding-left 0.12rem
          color #e60e32
          font-size 0.14rem
          display flex
          height 0.4rem
          align-items center
::-webkit-scrollbar
  width 0
  height 0
          
</style>
