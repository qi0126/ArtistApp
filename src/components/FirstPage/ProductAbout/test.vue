<template>
    <div class="carCell">

        <div class="proDiv">
            <div class="selected" @click="selectedThisPro">
              <i class="iconfont selectedIcon" v-if="proItem.proSelected==1"></i>
              <i class="iconfont noSelectedIcon" v-if="proItem.proSelected==0"></i>
            </div>

            <div class="img">
              <div class='newIcon_div'>
                <i class="iconfont newIcon" v-if="proItem.proIsNew==1"></i>
              </div>
              <img  :src="proItem.proImage" alt="暂无图片" @click="gotoDetail">
            </div>

            <div class="info" @click="gotoDetail">
              <div class="info_text1" v-text="proItem.proName" ></div>
              <div class="info_text2" >编码：{{proItem.proNumber}}</div>
              <div class="info_text2" >属性：{{proItem.proVNumber}}</div>
              
            </div>

            <!-- <div v-if="proItem.proIsFixWeight">
              <div class="shopping">
                <i class="iconfont shoppingIcon" @click="editThisPro"></i>
              </div>
            </div>

            <div v-if="proItem.proSelected==0">
              <i class="iconfont shoppingIcon" @click="editThisPro"></i>
            </div> -->
        </div>


        <div class="detailDiv" v-if="proItem.proDetailArray.length!=0">

            <div class="detailTitleDiv" ref="detailTitleDivRef">
                <div class="detailTitleContentDiv">
                    <div v-for="(title,index) in this.proDetailTitleName" class="title_item" :key="index">
                        <div v-if="index==9" class="title_item9">
                            <div>{{title}}</div>
                        </div>
                        <div v-else-if="index==10" class="title_item10">
                            <div>{{title}}</div>
                        </div>
                        <div v-else class="title_item_other">
                            <div>{{title}}</div>
                        </div>
                    </div>

                    <div v-for="detail_item in proItem.proDetailArray" class="detail_item" :key="detail_item.id">
                        <div class="detailSelected" @click="selectedProDetail(detail_item)">
                        <i class="iconfont selectedIcon" v-if="detail_item.proSelected==1"></i>
                        <i class="iconfont noSelectedIcon" v-if="detail_item.proSelected==0"></i>
                        
                        </div>
                        <i class="iconfont editIcon" @click="editThisPro"></i>
                        <div class="detail_item_other">{{detail_item.shipment_pro_weight}}</div>
                        <div class="detail_item_other">{{detail_item.shipment_weight}}</div>
                        <div class="detail_item_other">{{detail_item.shipment_number}}</div>
                        <div class="detail_item_other">{{detail_item.shipment_long}}</div>
                        <div class="detail_item_other">{{detail_item.shipment_breadth}}</div>
                        <div class="detail_item_other">{{detail_item.shipment_height}}</div>
                        <div class="detail_item_other">{{detail_item.shipment_Ring}}</div>
                        <div class="detail_item_other">{{detail_item.shipment_boresize}}</div>
                        <div class="detail_item_other">{{detail_item.shipment_breadth}}</div>
                        <div class="detail_item9">{{detail_item.shipment_printfont}}</div>
                        <div class="detail_item10">{{detail_item.shipment_lwh}}</div>               
                    </div>
                </div>




            </div>

          

        </div>

        
    </div>
</template>



<script type="text/ecmascript-6">
import BScroll from "better-scroll";
export default {
  name: "carCell",
  //   props:['proItem'],
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
    }
  },
  components: {},
  data() {
    return {
      title: "aaaaaa",
      proDetailTitleName:["产品克重","出货数量","出货克重","长度","宽度","高度","圈口","内径","面宽","字印","长宽高",],
      
    };
  },
  computed: {},
  created() {},
  methods: {
      parentMsg: function (msg) {
        alert("dddddd"+msg);
      },
      editThisPro(){
        this.$emit('editThisPro');
      },

      gotoDetail(){
        this.$emit('gotoDetail');
      },
      selectedThisPro(){
          this.$emit('selectedThisPro');
      },
      selectedThisProDetail(){
          this.$emit('selectedThisProDetail');
      },
      selectedProDetail(detail_item){
          detail_item.proSelected = !detail_item.proSelected;
          let itemd;
          for(let i = 0;i<this.proItem.proDetailArray.length;++i){
              itemd = this.proItem.proDetailArray[i];
              console.log(itemd.proSelected);
              if(itemd.proSelected == 0){
                  this.proItem.proSelected = 0;
                  return;
              }
          }
          this.proItem.proSelected = 1;    
      }

  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .carCell
    margin-top 0.12rem
    height auto
    background-color #ffffff
    align-items center
    .proDiv
      margin-top 0.12rem
      height 0.85rem
      background-color #ffffff
      align-items center
      // font-size 0.15rem
      border-bottom 1px solid #f2f2f2
      .selected
          position absolute
          margin-top 0.3rem
          margin-left 0.15rem
          float left
          .selectedIcon:after
            content '\e63d'
            color #e60e32  
          .noSelectedIcon:after
            content '\e65b'
            color #999999  

      .img
        float left
        height 0.75rem
        width 1rem
        margin-left 0.45rem
        img
          height 0.75rem
          width 1rem
        .newIcon_div
          position absolute
          margin-top 0.005rem
          margin-left 0.85rem
          float right
          .newIcon:after
            content '\e67f'
            color #e60e32 
      .info
        float left
        // border 1px solid red
        width 60%
        height 0.75rem
        padding 0.04rem 0 0 0
        .info_text1
          margin-left 0.12rem
          margin-top 0rem
          font-size 0.14rem
        .info_text2
          margin-left 0.12rem
          margin-top 0.08rem
          font-size 0.12rem
          color #999999
        .info_text3
          margin-left 0.12rem
          margin-top 0.08rem
          font-size 0.12rem
          color #999999          
      .shopping
        margin-top -0.2rem
        margin-right 0.12rem
        float right
        .shoppingIcon:after
          padding-left 0.15rem
          content '\e667'
          color #999999
    .detailDiv
      background #ffffff
      width 100%
      
      .detailTitleDiv
          background #f2f2f2
          margin-left 12%
          height auto
          width 76%
          overflow scroll
          border-bottom 1px solid #e5e5e5
          .detailTitleContentDiv
              background #ffffff
              width 362.5%
              .detail_item
                  width 100%
                  height 0.35rem
                  line-height 0.35rem
                  float left
                  color #333333
                  font-size 0.14rem
                  text-align center
                  background #ffffff
                  .editIcon:after
                    position absolute
                    background #ffffff
                    right 0.15rem
                    float right     
                    content '\e667'
                    color #999999 
                  .detail_item_other
                      width 0.75rem
                      height 0.35rem
                      float left
                      border-left 1px solid #e5e5e5
                      border-bottom 1px solid #e5e5e5
                  .detail_item9
                      width 1.3rem
                      height 0.35rem
                      float left
                      border-left 1px solid #e5e5e5
                      border-bottom 1px solid #e5e5e5
                  .detail_item10
                      width 1.7rem  
                      height 0.35rem
                      float left 
                      border-left 1px solid #e5e5e5
                      border-bottom 1px solid #e5e5e5
                  .detailSelected
                      position absolute
                      margin-top 0rem
                      margin-left -0.45rem
                      border-left 1px solid #e5e5e5
                      border-bottom 1px solid #e5e5e5
                      width 0.45rem
                      background #ffffff
                      .selectedIcon:after
                          content '\e63d'
                          color #e60e32  
                      .noSelectedIcon:after
                          content '\e65b'
                          color #999999                       
             .title_item
                color #999999
                background #f2f2f2
                height 0.3rem
                text-align center
                line-height 0.3rem
                float left
                font-size 0.12rem
                border-left 1px solid #e5e5e5
                .title_item_other
                    width 0.8rem
                 
                .title_item9
                    width 1.3rem 
                .title_item10
                    width 1.7rem
      ::-webkit-scrollbar
         width 0px
         height 0          




</style>
