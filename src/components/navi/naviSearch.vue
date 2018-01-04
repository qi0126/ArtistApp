<template>
    <div id="navi">
        <div class="naviDiv">
           <div class="backDiv" @click="backOutClick">
               <i class="iconfont backIcon" ></i>
           </div>
           <div class="titleDiv" @click="titleClick">
               <img class="searchImg" src="../../commons/imgs/search.png"  alt="暂无图片">
               <input class="search" v-model="searKey" @keyup="inputChange" placeholder="搜索：分类 品牌 系列 首饰">
           </div>
           <div v-if="rightText!='vueTitle'" class="rightTextDiv" @click="rightTextClick">
               <div class="text">{{rightText}}</div>
           </div>           
        </div>
    </div>
</template>



<script type="text/ecmascript-6">

export default {
  name: "navi",
  //   props:['proItem'],
  props: {
    vueTitle:{
      type:String,
      default:"vueTitle",
    },

    rightText:{
      type:String,
      default:"vueTitle",
    }, 

    searchKey:{
      type:String,
      default:"vueTitle",
    },        
  },
  components: {},
  data() {
      return{
          title:"naviTitle",
          searKey:"",
      }
  },
  computed: {},
  created() {},
  methods: {
      backOutClick(){
        this.$emit('backOutClick');
      },
      rightTextClick(){
        this.$emit('rightTextClick');
      },
      titleClick(){
        this.$emit('titleClick');
      },
      inputChange(){
        console.log("key = "+ this.searchKey); 
        console.log("searKey = "+ this.searKey); 
        this.searchKey = this.searKey;
        this.$emit('inputChange');
      },
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #navi
    width 100%
    height 0.44rem
    background-color #ffffff
    .naviDiv
      position: fixed;
      display: flex;
      align-items: center;
      z-index: 10;
      height: 0.44rem;
      border-bottom: 2px solid #f2f2f2;
      background-color: #ffffff;
      width: 100%;
      .titleDiv
        position absolute
        background #f2f2f2 
        margin-left 12%
        margin-top 0.03rem
        height 0.3rem
        width: 76%; 
        .searchImg
          padding-left 0.12rem
          margin-top 0.08rem
          width 0.16rem
          height 0.16rem
          float left 
        .search
          position absolute
          text-align: left;
          color: #333333; 
          line-height 0.3rem
          padding-left 0.03rem
          margin-top 0.025rem
          float left 
          width 72%
          height 0.24rem
          font-size 0.14rem
          background-color #f2f2f2
          caret-color: black
      .backDiv
        position absolute
        width 12%
        margin-left 0
        height 0.44rem
        background: #ffffff;       
        .backIcon:after 
          content: '\e63f';
          color: $base-color;
          position absolute
          margin-left 0.15rem
          margin-top 0.15rem
      .rightTextDiv
        position absolute
        background #ffffff 
        margin-left 88%
        height 0.44rem
        width: 12%; 
        .text
          right 0.15rem
          position absolute
          font-size 0.13rem
          color #333333
          line-height 0.44rem
          overflow hidden
          text-overflow ellipsis
          white-space nowrap   
          background #ffffff     

</style>
