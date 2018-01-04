<template>
  <div class="general">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
     
      <div class="Navi">
         <i id="back" class="iconfont anIcon" @click="backOutClick"></i>
         <span class="scanTitle">添加产品信息</span>

     </div>
     

    <div>
        <div class="searchDiv">
            <div class="allSpeciseDiv" @click="allSpeciseButtonClick">
                <div class="allSpeciseButton">全部品类</div>
                <i v-if="this.showAllSpesies" class="iconfont upArrowsIcon" ></i>
                <i v-if="!this.showAllSpesies" class="iconfont downArrowsIcon" ></i>
                <!-- <img src="../../../commons/imgs/search.png" class="searchImg" alt="暂无图片"> -->
            </div>

            <div class="inputDiv">
                <img src="../../../commons/imgs/search.png" class="searchImg" alt="暂无图片">
                <input class="searchInput" v-model="searchKey" @keyup="input_change" placeholder="请输入关键词搜索">
           
            </div>
          
        </div>

       

        <div class="grayViewDiv" v-show="this.showAllSpesies" ref="grayViewRef">
             <div  class="speciseDiv" ref="speciesRef">
               <div v-for="item in this.allSpesiesArray" :key="item.id">
                 <div v-if="item.selected">
                    <button class="speciesButtonSelected" @click="speciesButtonClick(item)">{{item.name}}({{item.number}})</button>

                 </div>
                 <div v-else>
                    <button class="speciesButton" @click="speciesButtonClick(item)">{{item.name}}({{item.number}})</button>
                 </div>
               </div>
            
             </div>

        </div>
        

        <div class="proDiv">
            <img src="../../../commons/imgs/3.png" class="searchImg333" alt="暂无图片" width="300" height="500">
        </div>


    </div>

     
      

  </div>

 
</template>

<script>
import mHeader from "../../../components/tabbar/header";
import BScroll from 'better-scroll';
import { Switch } from 'mint-ui';
const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'
const DEFAULT_OPTIONS = {
    observeDOM: true,
    click: true,
    probeType: 1,
    scrollbar: false,
    pullDownRefresh: false,
    pullUpLoad: false
}

export default {
  name: "broadcast",
  components: {
    mHeader
  },
  data() {
    return {
      value:true,
      searchKey:"",
      showAllSpesies:true,
      allSpesiesArray:[
          {name:"all",number:"1",selected:true},
          {name:"one1",number:"2",selected:false},
          {name:"one2",number:"3",selected:false},
          {name:"one3",number:"4",selected:false},
          {name:"one4",number:"5",selected:false},
          {name:"one5",number:"6",selected:false},
          {name:"one6",number:"7",selected:false},
          {name:"one7",number:"8",selected:false},
          {name:"one8",number:"9",selected:false},
          {name:"one9",number:"10",selected:false},
          {name:"one10",number:"11",selected:false},
          {name:"one11",number:"12",selected:false},
          {name:"one12",number:"13",selected:false},
          {name:"one13",number:"14",selected:false},
          {name:"one14",number:"15",selected:false},
          {name:"one15",number:"16",selected:false},
          
      ]

    };
  },
  computed: {
      pullUpLoad() {
        return this.options.pullUpLoad
      },
      pullDownRefresh() {
        return this.options.pullDownRefresh
      },
      pullUpTxt() {
        const pullUpLoad = this.pullUpLoad
        const txt = pullUpLoad && pullUpLoad.txt
        const moreTxt = txt && txt.more || DEFAULT_LOAD_TXT_MORE
        const noMoreTxt = txt && txt.noMore || DEFAULT_LOAD_TXT_NO_MORE

        return this.pullUpDirty ? moreTxt : noMoreTxt
      },
      refreshTxt() {
        const pullDownRefresh = this.pullDownRefresh
        return pullDownRefresh && pullDownRefresh.txt || DEFAULT_REFRESH_TXT
      }
    },
  mounted() {
      setTimeout(() => {
        this.initScroll()
      }, 20)
    //   this.$nextTick(() => {
    //         this.initScroll();
    //       })
  },
  methods: {
    backOutClick() {
      this.$router.push("/my/qrcodeShare");
    },
    input_change() {
      alert("input_change");
    },
    speciesButtonClick(item) {
        //全部按钮变为黑色
   
        var curren = item;
        for(let i = 0;i<this.allSpesiesArray.length;++i){
            curren = this.allSpesiesArray[i];
            curren.selected = false;

        }
        
        item.selected = true;
      
    },

    allSpeciseButtonClick(){
        this.showAllSpesies = !this.showAllSpesies;

    },
     rightArrowsButtonClick() {
       this.$router.push("/my/general/informAndVoice");
       alert("rightArrowsButtonClick");
    },
    switchValueButtonClick(value) {
      this.switchValue = !this.switchValue;
      alert("switchValueButtonClick="+value);
    },
    initScroll() {
        if (!this.$refs.speciesRef) {
          return
        }
        this.scroll = new BScroll(this.$refs.speciesRef, {
            tap:true
        });


    },
  }
};
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">

.general {
  width: 3.75rem;
  margin: 0 auto;
  color: #999999;
  background-color: #f2f2f2;
  z-index 22
}


.Navi {
  position fixed
  display flex
  align-items center
  z-index 10
  height 0.44rem
  border-bottom 1px solid #f2f2f2
  background-color #ffffff
  width 100%
 
}

.scanTitle {
  padding-right 0.15rem
  width 100%
  font-size 0.18rem
  text-align center
  color #333333
}

  
.searchDiv {
  position fixed
  width: 100%;
  color: #333333;
  background-color: #ffffff;
  padding-top 0
  margin-top 0.48rem
  z-index 22
  border-bottom 1px solid #f2f2f2
}

.aaaaaa{
  position fixed
  width: 100%;
  color: #333333;
  background-color: #ffffff;
  padding-top 0
  margin-top 0.96rem
  z-index 22
  

}

.speciseDiv{
  position absolute
  width: 100%;
  height 2.88rem;
  color: #333333;
  background-color: #ffffff;
  padding-top 0
  overflow: hidden
//   margin-top 0.96rem
  z-index 24
  background-color: $scroll-content-bgc
  
  


}

.grayViewDiv{
  position absolute
  width  100%
  height 5.71rem
  margin-top 0.96rem
//   padding-bottom 0.96rem
  background: rgba(0,0,0, 0.5);
  z-index 23

}

.allSpeciseDiv{
  
  width: 30%;
  height 0.47rem
  background-color: #ffffff;
  padding-top 0
  margin-top 0
  float left

}
.inputDiv{
  
  width: 65%;
  height 0.3rem
  color: #333333;
  background-color: #f2f2f2;
  padding-top 0
  margin-top 0.09rem
  margin-right 0.15rem
  float right 

}




.allSpeciseButton {
  width: 50%;
  color: #333333;
  background-color: #ffffff;
  margin-left: 0.15rem;
  text-align: left
  float left
  font-size: 0.13rem;
  margin-top 0.18rem;
  border 0
}

.rightSwitch{
  padding-right 0.15rem
  font-size 0.12rem
  float right 
  margin-top 0.16rem;
  
}
.rightLabel{
  padding-right 0.15rem
  font-size 0.14rem
  float right 
  text-align right 
  margin-top 0.22rem;

}
.searchImg{
  padding-left 0.12rem
  margin-top 0.08rem
  width 0.16rem
  height 0.16rem
  float left 
}

.searchInput {
  padding-left 0.03rem
  margin-top 0.025rem
  float left 
  width 72%
  height 0.24rem
  font-size 0.14rem
  background-color #f2f2f2
  caret-color: red

}
.searchImg333{
    width 2rem,
    height 2rem,

}

.speciesButton{
  float left 
  width 50%
  height 0.48rem
  
  font-size 0.14rem
  text-align left 
  background-color #ffffff
  caret-color: red
  border-radius 0
  border-width 0
  margin-bottom 0.5px
  margin-top 0.5px
  border-right 0.5px solid #f2f2f2
  color #333333
}

.speciesButtonSelected{
  float left 
  width 50%
  height 0.48rem
  
  font-size 0.14rem
  text-align left 
  background-color #ffffff
  caret-color: red
  border-radius 0
  border-width 0
  margin-bottom 0.5px
  margin-top 0.5px
  border-right 0.5px solid #f2f2f2
  color #e60e32
}


.anIcon:after {
  padding-left 0.15rem
  content '\e63f'
  color $base-color
}
.rightArrowsIcon:after {
  padding-right 0.15rem
  content '\e640'
  color #cccccc
  font-size 0.12rem
  float right 
  margin-top 0.21rem;
}

.upArrowsIcon:after {
  
  content '\e645'
  color #999999
  font-size 0.24rem
  float left 
  margin-top 0.12rem;
  background-color #ffffff
  width 0.3rem
}

.downArrowsIcon:after {
  
  content '\e644'
  color #999999
  font-size 0.24rem
  float left 
  margin-top 0.12rem;
  background-color #ffffff
  width 0.3rem
}
</style>

