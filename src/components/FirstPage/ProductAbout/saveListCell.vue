<template>
    <div id="saveListCell">

          
          <div v-if="showEditButton">
              <div class='selectedButton' @click="changeToSelected(proItem)">
                  <i class="iconfont selectedButtonNormal" v-if="!proItem.isSelectedMe" ></i>
                  <i class="iconfont selectedButtonSelected" v-if="proItem.isSelectedMe" ></i>
              </div>
              <div class='proImage'>
                  <img class='mainImage' :src="proItem.proImage" alt="暂无图片" @click="gotoDetail">
                  <div class='newIcon_div'>
                     <i class="iconfont newIcon" v-if="proItem.proIsNew==1"></i>
                  </div>
              </div>

              <div class="info" @click="gotoDetail">
                 <div class="info_text1" v-text="proItem.proName" ></div>
                 <div class="info_text2" v-text="proItem.proNumber"></div>
              </div>
              <div v-if="proItem.proIsFixWeight">
                 <div class="shopping">
                    <i class="iconfont shoppingIcon" @click="addInShopCar"></i>
                 </div>
               </div>
          </div>
          <div v-else>
              <div class="noSelectedButtonDiv">
                 <div class='proImage'>
                   <img class='mainImage' :src="proItem.proImage" alt="暂无图片" @click="gotoDetail">
                   <div class='newIcon_div'>
                      <i class="iconfont newIcon" v-if="proItem.proIsNew==1"></i>
                   </div>
                 </div>

                 <div class="info" @click="gotoDetail">
                   <div class="info_text1" v-text="proItem.proName" ></div>
                   <div class="info_text2" v-text="proItem.proNumber"></div>
                 </div>
                 <div v-if="proItem.proIsFixWeight">
                    <div class="shopping">
                       <i class="iconfont shoppingIcon" @click="addInShopCar"></i>
                    </div>
                 </div>

              </div>

          </div>

          
    </div>
</template>



<script type="text/ecmascript-6">
export default {
  name: "saveListCell",
    // props:['proItem','showEditButton'],
  props: {
    proItem: {
      type: Object,
      default: function() {
        return {
          proName: "无产品1",
          proNumber: "无ID1",
          proIsNew: 0,
          proImage: ""
        };
      }
    },
    showEditButton:{
      type:Boolean,
      default:false,
    },
    // isChooseBoolIndex:{
    //   type:Number,
    //   default:false,
    // },
    // isChooseBoolArray:{
    //   type:Array,
    //   default:[],
    // },
  },
  components: {},
  data() {
    return {
      title: "aaaaaa"
    };
  },

  methods: {
    parentMsg: function (msg) {
      alert("dddddd"+msg);
    },
    addInShopCar(){
      this.$emit('addInShopCar');
    },

    gotoDetail(){
      this.$emit('gotoDetail');
    },
    changeToSelected(iii){
        iii.isSelectedMe = !iii.isSelectedMe;
        console.log(iii.isSelectedMe + "cc" );
        
    },
    changeToNormal(pItem){
        console.log(pItem.forSelected + "cc" );
        pItem.forSelected = !pItem.forSelected;
    },

  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    #saveListCell
      display inline-block
      border-bottom 1px solid #f2f2f2
      width 100%
      height 1rem
      margin 0.7%
      background-color #ffffff
      align-items center
      font-size 0.15rem
      float left
      .selectedButton
        position absolute
        margin-top 0.425rem
        margin-left 0.15rem
        float left
        .selectedButtonSelected:after
          content '\e63d'
          color #e60e32 
        .selectedButtonNormal:after
          content '\e65b'
          color #999999           
      .proImage
        .mainImage
          position absolute
          width 1rem
          height 0.75rem
          margin-left 0.45rem
          margin-top 0.12rem
        .newIcon_div
          position absolute
          margin-top 0.12rem
          margin-left 1.3rem
          
          .newIcon:after
            content '\e67f'
            color #e60e32         
      .info
        margin-left 1.57rem
        overflow hidden /* 自动隐藏文字 */
        text-overflow ellipsis /* 文字隐藏后添加省略号 */
        width 54%
        height 0.75rem
        .info_text1
          margin-top 0.16rem
          font-size 0.14rem
          color #333333
        .info_text2
          margin-top 0.04rem
          font-size 0.12rem
          color #999999
      .shopping
        margin-right 0.15rem
        margin-bottom 0.12rem
        float right
        .shoppingIcon:after
          content '\e64c'
          color #e60e32
      .noSelectedButtonDiv
        .proImage
          .mainImage
            position absolute
            width 1rem
            height 0.75rem
            margin-left 0.15rem
            margin-top 0.12rem
          .newIcon_div
            position absolute
            margin-top 0.12rem
            margin-left 1.00rem
            .newIcon:after
              content '\e67f'
              color #e60e32         
        .info
          margin-left 1.27rem
          overflow hidden /* 自动隐藏文字 */
          text-overflow ellipsis /* 文字隐藏后添加省略号 */
          width 54%
          height 0.75rem
          .info_text1
            margin-top 0.16rem
            font-size 0.14rem
            color #333333
          .info_text2
            margin-top 0.04rem
            font-size 0.12rem
            color #999999
        .shopping
          margin-right 0.15rem
          margin-bottom 0.12rem
          float right
          .shoppingIcon:after
            content '\e64c'
            color #e60e32

</style>
