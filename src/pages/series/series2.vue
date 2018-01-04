<template>
  <div id="series2">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
    <div class='title'>
      <i class="iconfont backIcon" @click="btn_back"></i>
      <div class="text" v-text='title_info'></div>
    </div>

    <div class="main_div">
      <div class="left-wrapper" ref="leftWrapper">
        <div class="left-content">
          <div v-for="(left,index) in items" class="left_item"  :key="index" :class="{'current':currentIndex===index}" @click="selectLeft(index,$event)">
            <span v-text="left.address"></span>
          </div>
        </div>
      </div>
      
      <div class="right_title_div">
        <span class="right_title_red"></span>
        <span v-text="rightTitle"></span>
      </div>
      <div class="right-wrapper" ref="rightWrapper">
       
        <div class="right-content">
          <div v-for="(right,index) in items" class="left_item" :key="index" ref='rightList'>
            <div class="right_title_div2">
              <span class="right_title_red2"  v-show="index!=0"></span>
              <span v-text="right.address"  v-show="index!=0"></span>
            </div>
            <div class="right_item_div" v-for="(right_item,index) in right.data" :key="index" @click="selectRight(right_item,$event)">
              <div class='newIcon_div'>
                <img src="../../commons/imgs/qita_new.png" class="newIcon" v-if="right_item.isNew==1">
              </div>
              <div class="img">
                <img :src="right_item.image" alt="暂无图片">
              </div>
              <div class="info">
                <div class="info_text1" v-text="right_item.name"></div>
                <div class="info_text2" v-text="right_item.price"></div>
                <div class="shopping">
                  <i class="iconfont shoppingIcon"></i>
                </div>
              </div>
            </div>

           </div>  
        </div>
        
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
export default {
  data() {
    return {
      title_info: "七彩玲珑金",
      password: "",
      isShow: true,
      scrollY: 0,
      rightTitle: "",
      listHeight: [],
      selectedFood: {},
      items: [
        {
          address: "上海",
          price: 104,
          data: [
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
              name: "夏季新款日系",
              address: "上海",
              price: 104,
              isNew: 1
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
              name: "竹节纯棉宽松港风",
              address: "深圳",
              price: 105
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
              name: "古圆领TEE潮",
              address: "上海",
              price: 106,
              isNew: 1
            }
          ]
        },
        {
          address: "深圳",
          price: 105,
          data: [
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
              name: "节纯棉宽松港风",
              address: "深圳",
              price: 105,
              isNew: 1
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
              name: "古圆领TEE潮",
              address: "上海",
              price: 106,
              isNew: 1
            }
          ]
        },
        {
          address: "北京",
          price: 106,
          data: [
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
              name: "男道2017夏季新款",
              address: "上海",
              price: 106
            }
          ]
        },
        {
          address: "上海",
          price: 104,
          data: [
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
              name: "夏季新款日系",
              address: "上海",
              price: 104
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
              name: "竹节纯棉宽松港风",
              address: "深圳",
              price: 105
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
              name: "古圆领TEE潮",
              address: "上海",
              price: 106,
              isNew: 1
            }
          ]
        },
        {
          address: "深圳",
          price: 105,
          data: [
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
              name: "节纯棉宽松港风",
              address: "深圳",
              price: 105
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
              name: "古圆领TEE潮",
              address: "上海",
              price: 106
            }
          ]
        },
        {
          address: "北京",
          price: 106,
          data: [
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
              name: "男道2017夏季新款",
              address: "上海",
              price: 106
            }
          ]
        },
        {
          address: "上海",
          price: 104,
          data: [
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
              name: "夏季新款日系",
              address: "上海",
              price: 104,
              isNew: 1
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
              name: "竹节纯棉宽松港风",
              address: "深圳",
              price: 105,
              isNew: 1
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
              name: "古圆领TEE潮",
              address: "上海",
              price: 106,
              isNew: 1
            }
          ]
        },
        {
          address: "深圳",
          price: 105,
          data: [
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
              name: "节纯棉宽松港风",
              address: "深圳",
              price: 105
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
              name: "古圆领TEE潮",
              address: "上海",
              price: 106
            }
          ]
        },
        {
          address: "北京",
          price: 106,
          data: [
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
              name: "男道2017夏季新款",
              address: "上海",
              price: 106
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
              name: "夏季新款日系",
              address: "上海",
              price: 104
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
              name: "竹节纯棉宽松港风",
              address: "深圳",
              price: 105
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
              name: "古圆领TEE潮",
              address: "上海",
              price: 106
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
              name: "夏季新款日系",
              address: "上海",
              price: 104
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
              name: "竹节纯棉宽松港风",
              address: "深圳",
              price: 105
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
              name: "古圆领TEE潮",
              address: "上海",
              price: 106
            }
          ]
        },
        {
          address: "上海",
          price: 104,
          data: [
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
              name: "夏季新款日系",
              address: "上海",
              price: 104
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
              name: "竹节纯棉宽松港风",
              address: "深圳",
              price: 105
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
              name: "古圆领TEE潮",
              address: "上海",
              price: 106
            }
          ]
        },
        {
          address: "深圳",
          price: 105,
          data: [
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
              name: "节纯棉宽松港风",
              address: "深圳",
              price: 105
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
              name: "古圆领TEE潮",
              address: "上海",
              price: 106
            }
          ]
        },
        {
          address: "北京",
          price: 106,
          data: [
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
              name: "男道2017夏季新款",
              address: "上海",
              price: 106
            }
          ]
        },
        {
          address: "上海",
          price: 104,
          data: [
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
              name: "夏季新款日系",
              address: "上海",
              price: 104
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
              name: "竹节纯棉宽松港风",
              address: "深圳",
              price: 105
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
              name: "古圆领TEE潮",
              address: "上海",
              price: 106
            }
          ]
        },
        {
          address: "深圳",
          price: 105,
          data: [
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
              name: "节纯棉宽松港风",
              address: "深圳",
              price: 105
            },
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
              name: "古圆领TEE潮",
              address: "上海",
              price: 106
            }
          ]
        },
        {
          address: "北京",
          price: 106,
          data: [
            {
              image:
                "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
              name: "男道2017夏季新款",
              address: "上海",
              price: 106
            }
          ]
        }
      ]
    };
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          this.rightTitle = this.items[i].address;
          return i;
        }
      }
      return 0;
    }
  },
  created() {
    this.getAllPros();
  },
  methods: {
    getAllPros() {
      this.$nextTick(() => {
        this._initScroll();
        this._calculateHeight();
      });
    },
    _initScroll() {
      this.leftScroll = new BScroll(this.$refs.leftWrapper, {
        click: true
      });

      this.rightScroll = new BScroll(this.$refs.rightWrapper, {
        click: true,
        probeType: 3
      });

      this.rightScroll.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _calculateHeight() {
      let rightList = this.$refs.rightList;
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < rightList.length; i++) {
        let item = rightList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    selectLeft(index, event) {
      // if (!event._constructed) {
      //   return;
      // }
      let rightList = this.$refs.rightList;
      // console.log(foodList)
      let el = rightList[index];
      this.rightScroll.scrollToElement(el, 500);
    },
    selectRight(right_item, event) {
      if (!event._constructed) {
        return;
      }
      // this.selectedRight = right_item;
      // console.log(food);
      // this.$refs.food.show();
    },
    btn_back() {
      this.$router.push({
        path: "/firstPage"
      });
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#series2
  z-index 20
  // position fixed
  // width 100%
  // height 100%
  // top 0px
  // background-color #f2f2f2
  .title
    position fixed
    display flex
    align-items center
    height 0.48rem
    border-bottom 1px solid #f2f2f2
    background-color #ffffff
    width 100%
    z-index 20
    .text
      padding-right 0.15rem
      width 100%
      font-size 0.18rem
      text-align center
      color #333333
    .backIcon:after
      font-size 0.18rem
      padding-left 0.15rem
      content '\e63f'
      color #666666
  .main_div
    // padding-top 0.485rem
    .left-wrapper
      width 25%
      position fixed
      top 0.485rem
      bottom 0
      overflow hidden
      background-color #f2f2f2
      .left-content
        .left_item
          height 0.48rem
          background-color #f2f2f2
          // border 1px solid red
          border-bottom 0.02rem solid #ffffff
          display flex
          align-items center
          justify-content center
          span
            color #999999
            font-size 0.14rem
        .current
          height 0.48rem
          background-color #ffffff
          // border 1px solid red
          border-bottom 0.02rem solid #ffffff
          display flex
          align-items center
          justify-content center
          span
            color #333333
    .right_title_div
      z-index 20
      margin-left 25%
      width 74.5%
      position fixed
      top 0.485rem
      background-color #ffffff
      display flex
      align-items center
      height 0.4rem
      .right_title_red
        display inline-block
        margin-left 0.12rem
        height 0.18rem
        border-left 0.03rem solid red
      span
        padding-top 0rem
        margin-left 0.05rem
        height 0.12rem
        display inline-block
        color #333333
    .right-wrapper
      // position absolute
      margin-left 25%
      width 74.5%
      position fixed
      top 0.365rem
      bottom 0
      overflow hidden
      // border 1px solid red
      .right-content
        .right_title_div2
          width 100%
          top 0.485rem
          background-color #ffffff
          display flex
          align-items center
          height 0.4rem
          .right_title_red2
            display inline-block
            margin-left 0.12rem
            height 0.18rem
            border-left 0.03rem solid red
          span
            padding-top 0rem
            margin-left 0.05rem
            height 0.12rem
            display inline-block
            color #333333
        .right_item_div
          padding-top 0.12rem
          margin-left 0.12rem
          height 0.87rem
          background-color #ffffff
          align-items center
          font-size 0.15rem
          border-bottom 0.02rem solid #f2f2f2
          .newIcon_div
            position fixed
            margin-top 0.006rem
            margin-left 31.5%
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
            width 62%
            height 0.75rem
            .info_text1
              margin-left 0.12rem
              margin-top 0.02rem
              font-size 0.14rem
              color #333333
            .info_text2
              margin-left 0.12rem
              margin-top 0.08rem
              font-size 0.12rem
              color #999999
            .shopping
              float right
              margin-top 0.15rem
              margin-right 0.12rem
              .shoppingIcon:after
                padding-left 0.15rem
                content '\e64c'
                color #e60e32
</style>
