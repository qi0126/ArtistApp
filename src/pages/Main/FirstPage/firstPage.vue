<template>
  <div class="firstPage">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
   
    <div class="Navi">
         <!-- <img id="back" @click="scanOneScanClick" src="../../../commons/imgs/scanOneScan.png" > -->
         <i id="back" class="iconfont scanIcon" @click="scanOneScanClick"></i>
         <div class="searchDiv">
            <img class="searchButton" @click="searchButtonClick" src="../../../commons/imgs/searchButton.png" >
            <img class="cameraButton" @click="cameraButtonClick" src="../../../commons/imgs/xiangji.png" >
         </div>
         <i id="species" class="iconfont speciesIcon" @click="spesiesSearchButtonClick"></i>
         <!-- <img id="species" @click="spesiesSearchButtonClick" src="../../../commons/imgs/spesiesSearch.png" > -->
    </div>


    <div class="advertisDiv">
        <mt-swipe :auto="3000" class="advertis">
          <mt-swipe-item v-for="item in this.dataArray" :key="item.id" class="advertisList">
            <!-- <img :src="item.imgUlr" alt="暂无图片" @click="lunboButtonClick(item)"> -->
            <img src="../../../commons/imgs/1.png" alt="暂无图片" @click="lunboButtonClick(item)">
          </mt-swipe-item>
     
        </mt-swipe>
    </div>


    <div class="generalizeDiv">
      <ul class="generalizeDiv-ul" >
        <li class="cellGeneralizeDic" v-for="(item,index) in dataArray" :key="item.id" @click="btn_inToSeries(item,index)">
          <!-- <img :src="item.imgUlr" alt="暂无图片" class="img"> -->
           <!-- <img src="../../../commons/imgs/2.png" alt="暂无图片" class="img"> -->
          <!-- <div v-text="item.name"></div> -->
           <img src="../../../commons/imgs/2.png" alt="暂无图片" class="generalizeImage">
           <span class="generalizeNumber">{{item.number}}</span>
        </li>
      </ul>
    </div>

    
  </div>
</template>

<script  type="text/ecmascript-6">
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";

Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

export default {
  name: "firstPage",
  // props: {
  //   title: String,
  //   show: Boolean,
  //   width: {
  //     type: Number,
  //     default: 500
  //   }
  // },
  data() {
    return {
      open: 1,
      dataArray: [
        {
          name: "花开系列",
          number: "1",
          time: "2017-08-11 13:40:25",
          isNew: 0,
          imgUlr:
            "http://img2.imgtn.bdimg.com/it/u=2227196088,2072827140&fm=27&gp=0.jpg"
        },
        {
          name: "媳妇娃娃系列硬金子孙桶",
          number: "2",
          time: "2017-08-11 13:40:25",
          isNew: 1,
          imgUlr:
            "http://img3.imgtn.bdimg.com/it/u=2226396175,2886745608&fm=200&gp=0.jpg"
        },
        {
          name: "媳妇娃娃系列硬金项链",
          number: "3",
          time: "2017-08-11 13:40:25",
          isNew: 1,
          imgUlr:
            "http://img4.imgtn.bdimg.com/it/u=2702361005,2757988983&fm=27&gp=0.jpg"
        },
        {
          name: "风一样的男子的风度",
          number: "4",
          time: "2017-08-11 13:40:25",
          isNew: 0,
          imgUlr:
            "http://img3.imgtn.bdimg.com/it/u=2226396175,2886745608&fm=200&gp=0.jpg"
        },
        {
          name: "杀马特系列只志炫头饰",
          number: "5",
          time: "2017-08-11 13:40:25",
          isNew: 0,
          imgUlr:
            "http://img4.imgtn.bdimg.com/it/u=2702361005,2757988983&fm=27&gp=0.jpg"
        },
        {
          name: "走过路过不要错估系列旺仔小馒头",
          number: "6",
          time: "2017-08-11 13:40:25",
          isNew: 1,
          imgUlr:
            "http://img3.imgtn.bdimg.com/it/u=2226396175,2886745608&fm=200&gp=0.jpg"
        },
        {
          name: "走过路过不要错估系列旺仔小馒头",
          number: "6",
          time: "2017-08-11 13:40:25",
          isNew: 1,
          imgUlr:
            "http://img4.imgtn.bdimg.com/it/u=2702361005,2757988983&fm=27&gp=0.jpg"
        },
        {
          name: "走过路过不要错估系列旺仔小馒头",
          number: "6",
          time: "2017-08-11 13:40:25",
          isNew: 1,
          imgUlr:
            "http://img3.imgtn.bdimg.com/it/u=2226396175,2886745608&fm=200&gp=0.jpg"
        }
      ]
    };
  },
  methods: {
    spesiesSearchButtonClick() {
      this.$router.push("/firstPage/speciesSearch");
    },
    scanOneScanClick() {
      this.$router.push("/firstPage/scanOneScan");
    },
    gotoDetailClick(item) {
      alert(
        "gotoDetailClick" +
          "-" +
          item.number +
          "-" +
          item.name +
          "-" +
          item.isNew +
          "-" +
          item.time
      );
    },
    lunboButtonClick(item) {
      alert("item.imgUlr=" + item.imgUlr);
    },

    cameraButtonClick() {
      this.$router.push("/firstPage/cameraIdentificationResult");
    },
    searchButtonClick() {
      this.$router.push("/firstPage/searchText");
      //  this.$router.push("/firstPage/feedback");
    },
    btn_inToSeries(item, index) {
      if (index >= 3) {
        this.$router.push("/firstPage/series1");
      } else {
        this.$router.push("/firstPage/series2");
      }
    }
  }
  // watch: {
  //   show: {
  //     handler: function(newVal, oldVal) {
  //       this.show = newVal;
  //     },
  //     deep: true
  //   }
  // },
  // mounted() {
  //   document.body.appendChild(this.$el);
  // },
  // destroyed() {
  //   this.$el.remove();
  // },
};
</script>



<style scoped lang="stylus" rel="stylesheet/stylus">
.firstPage
  width 3.75rem
  margin 0 auto
  padding-bottom 0.2rem
  color #999999
  background-color #ffffff
  .Navi
    display flex
    width 100%
    height 0.44rem
    border-bottom 1px solid #f2f2f2
    position fixed
    padding-top 0rem
    margin-top 0
    z-index 15
    background-color #ffffff
    width 100%
  #back
    width 0.32rem
    height 0.22rem
    float left
    display inline-block
    margin-left 0.1rem
    margin-top 0.15rem
  .searchDiv
    position relative
    width 85%
    height 0.44rem
    background-color #ffffff
    float left
    margin-left 0.1rem
    margin-top 0
    font-size 18px
  .searchButton
    width 100%
    height 0.34rem
    margin-top 0.09rem
    font-size 18px
  .cameraButton
    width 0.3rem
    height 0.22rem
    color red
    position absolute
    top 0.15rem
    left 85%
  #species
    width 0.32rem
    height 0.22rem
    float right
    margin-right 0.1rem
    margin-top 0.15rem
    text-align right
    font-size 13px
  .grayLine
    width 100%
    height 0.02rem
    background-color #ee6600
    margin-height 64px
  .proListDiv
    padding-top 44px
    z-index 99
  .cellDiv
    border-bottom 1px solid #f2f2f2
  .proImage
    width 26.6%
    height 11.24%
    margin-left 0.15rem
    background-color #ee6600
    margin-top 0.12rem
    float left
  .proName
    width 60%
    height 0.1rem
    margin-left 0.12rem
    background-color #ffffff
    font-size 14px
    float left
    margin-top 0.12rem
    color #333333
  .proNumber
    width 60%
    height 0.1rem
    margin-left 0.12rem
    background-color #ffffff
    font-size 13px
    float left
    margin-top 0.08rem
    color #999999
  .proTime
    width 60%
    height 0.1rem
    margin-left 0.12rem
    background-color #ffffff
    font-size 13px
    float left
    margin-top 0.08rem
    color #999999
  .imageDiv
    position relative
  #proNewImage
    width 0.075rem
    height 0.075rem
    color red
    position absolute
    top 0.12rem
    left 26%
  .advertisDiv
    display flex
    width 100%
    border-bottom 1px solid #f2f2f2
    position fixed
    padding-top 0.44rem
    background-color #ffffff
    width 100%
  .advertis
    height 1.5rem
    background-color #aaae79
    width 100%
    .advertisList
      width 100%
      img
        width 100%
        height 1.5rem
  .generalizeDiv
    width 100%
    height 1rem
    padding-top 1.94rem
    background-color #fff
    overflow-x scroll
    -webkit-overflow-x scroll
    overflow hidden
    border-bottom 1px solid #f2f2f2
  .sortMenu-ul
    // min-width: 500px;
    padding 0
    list-style-type none
    display flex
    justify-content flex-start
    overflow-x scroll
    overflow-y hidden
    height 1.1rem
  .item
    display inline-block
    font-size 12px
    margin 0.15rem 0.33rem 0 0
    // height: 150px;
    // line-height: 40px;
    text-align center
    position relative
    text-overflow ellipsis
    word-break keep-all
  .img
    width 0.5rem
    border-radius 50%
  .cellGeneralizeDic
    width 0.83rem
    // display: inline-block;
    font-size 12px
    // margin: 0.15rem 0.33rem 0 0;
    // height: 150px;
    // line-height: 40px;
    margin-top 0.15rem
    margin-left 0.1rem
    text-align center
    // position: relative;
    // text-overflow: ellipsis;
    // word-break: keep-all;
  .generalizeDiv-ul
    // min-width: 500px;
    padding 0
    list-style-type none
    display flex
    justify-content flex-start
    overflow-x scroll
    overflow-y hidden
    height 1.1rem
    widows 100%
  .generalizeNumber
    height 0.1rem
    background-color #ffffff
    font-size 13px
    text-align center
    margin-top 0.08rem
    color #333333
    width 60%
    display block
    display inline
    // overflow: hidden;
    // white-space: nowrap;
    // text-overflow: ellipsis;
    // max-width:60%;
  .generalizeImage
    width 0.5rem
    border-radius 50%
.scanIcon:after
  content '\e662'
  font-size 0.24rem
.speciesIcon:after
  content '\e663'
  font-size 0.24rem
.newIcon:after
  content '\e65a'
  font-size 0.18rem
</style>
