<template>
  <div class="SpeciesSearch">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
   
    <div class="Navi">
         <i id="back" class="iconfont anIcon" @click="backOutClick"></i>
         <img src="../../../../commons/imgs/searchButton.png" class="searchButton" @click="searchButtonClick">
         <div class="grayLine"></div>
    </div>

    <div>
      <div >
        <button class="titleButtonLeft" @click="speciesButtonClick">分类</button>
        <button class="titleButtonRight"@click="designSearchButtonClick">系列</button>
        <!-- <p class="witeColor">a</p> -->
      </div>

    </div>
    
   <!-- <div class="redLine"></div> -->


   <transition>
     <div v-if="open===0" class="openDiv" >
       <div>
         <span>no open</span>

       </div>
     </div>


     <div v-else>
       <div v-for="one in dataArray" :key="one.oneIndex">
         <div class="aaaaaa">
           <br/>
           <i class="iconfont speciesCategory"></i>
           <span class="titleSpan">{{one.title}}</span>
           <img src="../../../../commons/imgs/gray_up.png" class="showButton" @click="showButtonClick">
           <br/>

         </div>
         <div v-for="two in one.titleName" :key="two.twoIndex">
           <div v-if='!two.selected'>
             <button class="cellButtonSelected" @click="cellButtonClick(two)" >{{ two.name }}</button>

           </div>
           <div v-else>
             <button class="cellButton" @click="cellButtonClick(two)" >{{ two.name }}</button>
           </div>
          
         </div>
    
       </div>

     </div>
   </transition>

   <button class="sureButton" @click="sureButtonClick">确定</button>
    <!-- <transition name="slide-panel-fade">
        <div v-if="show" class="slide-panel" :style="{ width: width + 'px'}">
            <div class="slide-panel-layout">
                <div class="slide-panel-header">
                    <h3 class="slide-panel-header-title">{{title}}</h3>
                    <button class="slide-panel-header-close" @click="onShow"><i class="el-icon-close"></i></button>
                </div>
                <div class="slide-panel-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition> -->
</div> 
   </div>
   

    
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: String,
    show: Boolean,
    width: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      dataArray: [
        {
          titleName: [
            { name: "套装", selected: true, row: 10001 },
            { name: "项链", selected: true, row: 10002 },
            { name: "吊坠", selected: true, row: 10003 },
            { name: "套装", selected: true, row: 10004 },
            { name: "手链", selected: true, row: 10005 },
            { name: "555", selected: true, row: 10006 }
          ],
          title: "品类",
          iClass: "iconfont speciesCategory"
        },
        {
          titleName: [
            { name: "套装", selected: true },
            { name: "项链", selected: true },
            { name: "吊坠", selected: true },
            { name: "套装", selected: true },
            { name: "手链", selected: true },
            { name: "55", selected: true }
          ],
          title: "工艺",
          iClass: "iconfont speciesCraft"
        },
        {
          titleName: [
            { name: "套装", selected: true },
            { name: "项链", selected: true },
            { name: "吊坠", selected: true },
            { name: "套装", selected: true },
            { name: "手链", selected: true },
            { name: "55", selected: true }
          ],
          title: "材质",
          iClass: "iconfont speciesMaterial"
        },
        {
          titleName: [
            { name: "套装", selected: true },
            { name: "项链", selected: true },
            { name: "吊坠", selected: true },
            { name: "套装", selected: true },
            { name: "手链", selected: true },
            { name: "55", selected: true }
          ],
          title: "外形",
          iClass: "iconfont speciesShapes"
        },
        {
          titleName: [
            { name: "套装", selected: true },
            { name: "项链", selected: true },
            { name: "吊坠", selected: true },
            { name: "套装", selected: true },
            { name: "手链", selected: true },
            { name: "55", selected: true }
          ],
          title: "克重",
          iClass: "iconfont speciesWeight"
        }
      ],
      open: 1,
      hideOpenButton: 0,
      allSelected: 0,
      selectedArray: [],
      heigh: 50
    };
  },
  methods: {
    backOutClick() {
      this.$router.push("/firstPage");
    },
    cheanHistoryClick() {
      alert("cheanHistory");
    },
    searchButtonClick() {
      alert("searchButtonClick");
    },
    speciesButtonClick() {
      alert("speciesButtonClick");
    },
    designSearchButtonClick() {
      alert("designSearchButtonClick");
    },
    cellButtonClick(two) {
      two.selected = !two.selected;
      let row = two.row;
      let currenRow = 0;
      let index = -1;
      for (let i = 0; i < this.selectedArray.length; ++i) {
        currenRow = this.selectedArray[i];
        if (row === currenRow) {
          index = i;
          break;
        }
      }

      if (index > -1) {
        this.selectedArray = this.selectedArray.splice(index, 1);
      } else {
        this.selectedArray = this.selectedArray.concat(row);
      }

      alert(two.selected + "cellButtonClick" + this.selectedArray);
    },

    showButtonClick() {
      alert("showButtonClick");
    },
    sureButtonClick() {
      alert("sureButtonClick");
    },

    hide() {
      this.$emit("onHide");
    },
    onShow() {
      this.$emit("changeShow", false);
    }
  },
  watch: {
    show: {
      handler: function(newVal, oldVal) {
        this.show = newVal;
      },
      deep: true
    }
  },
  mounted() {
    document.body.appendChild(this.$el);
  },
  destroyed() {
    this.$el.remove();
  },
  components: {}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
$base-color = rgb(230, 14, 50)
.SpeciesSearch
  width 100%
  margin 0 auto
  padding-bottom 0.2rem
  color #999999
  .Navi
    width 100%
    height 0.44rem
    // background-color: blue;
  #back
    width 0.18rem
    // background-color: red;
    float left
    display inline-block
    margin-left 0.1rem
    margin-top 0.15rem
  .grayLine
    width 100%
    height 0.02rem
    background-color #f2f2f2
  .searchButton
    width 80%
    height 0.3rem
    background-color #f2f2f2
    float left
    margin-left 0.1rem
    margin-top 0.075rem
  .titleButtonLeft
    width 50%
    height 0.3rem
    background-color #ffffff
    float left
    border-color #ffffff
    font-size 18px
    color #333333
  .titleButtonRight
    width 50%
    height 0.3rem
    background-color #ffffff
    float right
    border-color #ffffff
    font-size 18px
    color #999999
  .redLine
    width 50%
    height 0.02rem
    background-color #e60e32
  .witeColor
    color #ffffff
    background-color #ffffff
  .titleSpan
    color #f34343 4
    background-color #ffffff
    font-size 14px
    float left
    margin-left 0.1rem
  .cellButton
    width 20.83%
    height 0.3rem
    background-color #ffffff
    float left
    border-color #f2f2f2
    font-size 12px
    color #999999
    margin-left 0.1rem
  .cellButtonSelected
    width 20.83%
    height 0.3rem
    background-color #e60e32
    float left
    border-color #f2f2f2
    font-size 12px
    color #ffffff
    margin-left 0.1rem
  .showButton
    width 0.16rem
    height 0.1rem
    background-color #ffffff
    float right
    font-size 0.15rem
    color #999999
    margin-right 0.15rem
  .aaaaaa
    width 100%
    height 0.48rem
    background-color #ffffff
    float right
    border-color #ffffff
    font-size 18px
    color #999999
  .sureButton
    width 100%
    height 0.5rem
    background-color #e60e32
    float right
    font-size 18px
    color #999999
    position absolute
    bottom 0
    left 0
.searchButton:after
  content '\e63f'
  font-size 0.18rem
.anIcon:after
  content '\e63f'
  font-size 0.18rem
.speciesCategory:after
  content '\e648'
  font-size 0.18rem
  float left
  margin-left 0.15rem
.speciesCraft:after
  content '\e647'
  font-size 0.18rem
.speciesMaterial:after
  content '\e646'
  font-size 0.18rem
.speciesShapes:after
  content '\e649'
  font-size 0.18rem
.speciesWeight:after
  content '\e64a'
  font-size 0.18rem
</style>
