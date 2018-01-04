<template>
    <div id="navi">
        <div class="naviDiv">
           <div class="backDiv" @click="backOutClick">
              <i class="iconfont backIcon" ></i>
           </div>
           <div class="titleDiv" @click="titleClick">
              <span class="title">{{vueTitle}}</span>
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
  },
  components: {},
  data() {
      return{
          title:"naviTitle",
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
        background #ffffff 
        margin-left 20%
        height 0.44rem
        width: 60%; 
        .title
          width 100%
          padding-right: 0.15rem;
          position absolute
          font-size: 0.18rem;
          text-align: center;
          color: #333333; 
          line-height 0.44rem
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
      .backDiv
        position absolute
        width 20%
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
        margin-left 80%
        height 0.44rem
        width: 20%; 
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
