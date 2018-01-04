<template>
    <div class="order">
              
              <div>
        <div class="searchDiv">
            <div class="allSpeciseDiv" @click="allSpeciseButtonClick">
                <div class="allSpeciseButton">全部品类</div>
                <i v-if="this.showAllSpesies" class="iconfont upArrowsIcon" ></i>
                <i v-if="!this.showAllSpesies" class="iconfont downArrowsIcon" ></i>
                <!-- <img src="../../../commons/imgs/search.png" class="searchImg" alt="暂无图片"> -->
            </div>


            <div class="sortWithTimeDiv" @click="sortWithTimeButtonClick">
                <div class="sortWithTimeText">按加入时间</div>
                <div v-if="this.allGrayArrow">
                    <i class="iconfont allGrayIcon" ></i>
                </div>
                <div v-else>
                    <i v-if="this.upRedArrow" class="iconfont upRedIcon" ></i>
                    <i v-if="!this.upRedArrow" class="iconfont downredIcon" ></i>
                </div>
            </div>

            <i v-if="!this.tileShow" class="iconfont tileIcon" ></i>
            <i v-if="this.tileShow" class="iconfont noTileIcon" ></i>
            <button class="editButton" @click="editButtonClick()">{{this.editButtonText}}</button>


          
        </div>

       

        <div class="grayViewDiv" v-show="this.showAllSpesies" ref="grayViewRef">
             <div class="saveArrowDiv">
               <img src="../../../commons/imgs/saveArrow.png" class="saveArrow" alt="暂无图片">
             </div>
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
             
                    <scroller class="main_div" ref="myscroller">
       
        <div class="item_div" v-for="product in this.allSpesiesArray" :key="product.name" @click="itemClick(product)">
          <div class='newIcon_div'>
            <i class="iconfont newIcon" v-if="product.isNew==1"></i>
          </div>
          <div class="img">
             <img src="../../../commons/imgs/3.png" alt="暂无图片" >
          </div>
          <div class="info">
            <div class="info_text1" v-text="product.name"></div>
            <div class="info_text2" v-text="product.number"></div>
          </div>
          <div class="shopping">
            <i class="iconfont shoppingIcon"></i>
          </div>
          
        </div>
    </scroller>
        </div>
 


    </div>

     
      
       
       

    </div>
</template>
<script type="text/ecmascript-6">
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
  name: "save",
  components: {
    mHeader
  },
  data() {
    return {
      value:true,
      searchKey:"",
      showAllSpesies:true,
      upRedArrow:false,
      allGrayArrow:true,
      tileShow:true,
      editButtonText:"编辑",
      allSpesiesArray:[
          {name:"all",number:"1",selected:true,isNew:1},
          {name:"one1",number:"2",selected:false},
          {name:"one2",number:"3",selected:false},
          {name:"one3",number:"4",selected:false,isNew:1},
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
          
      ],
      products: [
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          name: "男",
          address: "上海",
          price: 100,
          isNew: 1
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色",
          address: "深圳",
          price: 101,
          isNew: 1
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "季新款日系",
          address: "上海",
          price: 102,
          isNew: 1
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "港风",
          address: "深圳",
          price: 103
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          name: "男潮",
          address: "上海",
          price: 104
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰风",
          address: "深圳",
          price: 105
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "男潮",
          address: "上海",
          price: 106
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰港风",
          address: "深圳",
          price: 107
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          name: "TEE潮",
          address: "上海",
          price: 108
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "港风",
          address: "深圳",
          price: 101
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "TEE潮",
          address: "上海",
          price: 100
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰",
          address: "深圳",
          price: 101
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰",
          address: "深圳",
          price: 101
        }
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
    
    sortWithTimeButtonClick(){

    },
    editButtonClick(){
        if(this.editButtonText === "编辑"){
            this.editButtonText = "完成";
        }else{
            this.editButtonText = "编辑";
        }

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
    itemClick(product) {
      alert(product.price);
      
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
#save{
    width 100%
    background-color #ffffff
}
.searchDiv {
  position fixed
  width: 100%;
  color: #333333;
  background-color: #ffffff;
  padding-top 0
//   margin-top 0.48rem
  z-index 22
  // border-bottom 1px solid #f2f2f2
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
  margin-top -0.05rem
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
  margin-top 0.48rem
//   padding-bottom 0.96rem
  background: rgba(0,0,0, 0.5);
  z-index 23

}
.whiteViewDiv{
  background #ffffff
}
    

.saveArrowDiv
  background #ffffff
  margin-top -0.05rem
  height 0.15rem
  width 100%
  .saveArrow
    background #ffffff
    width 100%
    height 0.07rem

.allSpeciseDiv{
  
  width: 30%;
  height 0.47rem
  background-color: #ffffff;
  padding-top 0
  margin-top 0
  float left

}
.sortWithTimeDiv{
  width: 40%;
  height 0.47rem
  background-color: #ffffff;
  padding-top 0
  margin-top 0
  float left
}
.editButton{
  width: 12%;
  color: #666666;
  background-color: #ffffff;
  margin-right: 0.13rem;
  text-align: right 
  float right 
  font-size: 0.14rem;
  margin-top 0.18rem;
  border 0   
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

.sortWithTimeText {
  width: 50%;
  color: #333333;
  background-color: #ffffff;
  margin-left: 0.15rem;
  text-align: right 
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

.upRedIcon:after {
  
  content '\e671'
  color #999999
  font-size 0.12rem
  float left 
  margin-top 0.18rem;
  background-color #ffffff
  width 0.3rem
}

.downRedIcon:after {
  
  content '\e671'
  color #999999
  font-size 0.12rem
  float left 
  margin-top 0.18rem;
  background-color #ffffff
  width 0.3rem
}

.allGrayIcon:after {
  
  content '\e671'
  color #999999
  font-size 0.12rem
  float left 
  margin-top 0.18rem;
  background-color #ffffff
  width 0.3rem
}

.tileIcon:after {
  
  content '\e64b'
  color #666666
  font-size 0.24rem
  float left 
  margin-top 0.18rem;
  background-color #ffffff
  width 0.3rem
}
.noTileIcon:after {
  
  content '\e64d'
  color #666666
  font-size 0.20rem
  float left 
  margin-top 0.18rem;
  background-color #ffffff
  width 0.3rem
}
</style>
.save{
    width 100%
    background-color #ffffff
}
.searchDiv {
  position fixed
  width: 100%;
  color: #333333;
  background-color: #ffffff;
  padding-top 0
//   margin-top 0.48rem
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
  margin-top 0.48rem
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
.sortWithTimeDiv{
  width: 40%;
  height 0.47rem
  background-color: #ffffff;
  padding-top 0
  margin-top 0
  float left
}
.editButton{
  width: 12%;
  color: #666666;
  background-color: #ffffff;
  margin-right: 0.13rem;
  text-align: right 
  float right 
  font-size: 0.14rem;
  margin-top 0.18rem;
  border 0   
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

.sortWithTimeText {
  width: 50%;
  color: #333333;
  background-color: #ffffff;
  margin-left: 0.15rem;
  text-align: right 
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
  .main_div
    // display none
    // margin-top 1.08rem
    // display flex 不能使用此布局
    // margin-top 1.1rem
    padding-top 0.48rem
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
      .newIcon_div
        position fixed
        margin-left 40%
        float right
        .newIcon:after
          padding-left 0.15rem
          content '\e67f'
          color #e60e32
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
          color #e60e32


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

.upRedIcon:after {
  
  content '\e671'
  color #999999
  font-size 0.12rem
  float left 
  margin-top 0.18rem;
  background-color #ffffff
  width 0.3rem
}

.downRedIcon:after {
  
  content '\e671'
  color #999999
  font-size 0.12rem
  float left 
  margin-top 0.18rem;
  background-color #ffffff
  width 0.3rem
}

.allGrayIcon:after {
  
  content '\e671'
  color #999999
  font-size 0.12rem
  float left 
  margin-top 0.18rem;
  background-color #ffffff
  width 0.3rem
}

.tileIcon:after {
  
  content '\e64b'
  color #666666
  font-size 0.24rem
  float left 
  margin-top 0.18rem;
  background-color #ffffff
  width 0.3rem
}
.noTileIcon:after {
  
  content '\e64d'
  color #666666
  font-size 0.20rem
  float left 
  margin-top 0.18rem;
  background-color #ffffff
  width 0.3rem
}
</style>