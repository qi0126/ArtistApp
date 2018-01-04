<template>
    <div id="car">
      <div class="proDiv">
          <div class="mainDiv" v-for="it in this.carDataArray" :key="it.id">
            <tile-cell :proItem="it" 
                         @editThisPro="editThisPro(it)" 
                         @gotoDetail="gotoDetail(it)" 
                         @selectedThisPro="selectedThisPro(it)" 
                         @selectedProDetail="selectedProDetail(it)">
            </tile-cell>
          </div>
      </div>

      <div class="sureChooseDiv">
        <div class="selected" @click="selectedAllProButtonClick">
            <i class="iconfont selectedIcon" v-if="this.selectedAllPro==true"></i>
            <i class="iconfont noSelectedIcon" v-if="this.selectedAllPro==false"></i>
            全选
        </div>

        <div class="delectedOrSureDiv">
            <div class="sureButton" @click="sureButtonClick">
             确认选购
            </div>

            <div class="delectedButton" @click="delectedButtonClick">
             删除
            </div>
        </div>
      </div>



                              
    </div>
</template>
<script type="text/ecmascript-6">
  import tileCell from '../../../components/FirstPage/ProductAbout/carCell'
  export default {
    name: 'car',
    components:{

      tileCell
    },

    
    data(){
      return{
        carDataArray:[
          {
            proName:"珠玉花开系列花开系列足金耳坠1",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            proDetailArray:[
              {
                shipment_Ring:"圈口1",
                shipment_boresize:"内径1",
                shipment_breadth:"宽1",
                shipment_long:"长1",
                shipment_number:"数量1",
                shipment_printfont:"字印1",
                shipment_pro_weight:"产品重1",
                shipment_weight:"总重1",
                shipment_facewidth:"面宽1",
                shipment_lwh:"长宽高1",
                shipment_height:"高1",
                proSelected:0,
              },
              {
                shipment_Ring:"圈口2",
                shipment_boresize:"内径2",
                shipment_breadth:"宽2",
                shipment_long:"长2",
                shipment_number:"数量2",
                shipment_printfont:"字印2",
                shipment_pro_weight:"产品重2",
                shipment_weight:"总重2",
                shipment_facewidth:"面宽2",
                shipment_lwh:"长宽高2",
                shipment_height:"高2",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口3",
                shipment_boresize:"内径3",
                shipment_breadth:"宽3",
                shipment_long:"长3",
                shipment_number:"数量3",
                shipment_printfont:"字印3",
                shipment_pro_weight:"产品重3",
                shipment_weight:"总重3",
                shipment_facewidth:"面宽3",
                shipment_lwh:"长宽高3",
                shipment_height:"高3",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口4",
                shipment_boresize:"内径4",
                shipment_breadth:"宽4",
                shipment_long:"长4",
                shipment_number:"数量4",
                shipment_printfont:"字印4",
                shipment_pro_weight:"产品重4",
                shipment_weight:"总重4",
                shipment_facewidth:"面宽4",
                shipment_lwh:"长宽高4",
                shipment_height:"高4",
                proSelected:0,
              },
            ],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠2",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            proDetailArray:[
              {
                shipment_Ring:"圈口1",
                shipment_boresize:"内径1",
                shipment_breadth:"宽1",
                shipment_long:"长1",
                shipment_number:"数量1",
                shipment_printfont:"字印1",
                shipment_pro_weight:"产品重1",
                shipment_weight:"总重1",
                shipment_facewidth:"面宽1",
                shipment_lwh:"长宽高1",
                shipment_height:"高1",
                proSelected:0,
              },
              {
                shipment_Ring:"圈口2",
                shipment_boresize:"内径2",
                shipment_breadth:"宽2",
                shipment_long:"长2",
                shipment_number:"数量2",
                shipment_printfont:"字印2",
                shipment_pro_weight:"产品重2",
                shipment_weight:"总重2",
                shipment_facewidth:"面宽2",
                shipment_lwh:"长宽高2",
                shipment_height:"高2",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口3",
                shipment_boresize:"内径3",
                shipment_breadth:"宽3",
                shipment_long:"长3",
                shipment_number:"数量3",
                shipment_printfont:"字印3",
                shipment_pro_weight:"产品重3",
                shipment_weight:"总重3",
                shipment_facewidth:"面宽3",
                shipment_lwh:"长宽高3",
                shipment_height:"高3",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口4",
                shipment_boresize:"内径4",
                shipment_breadth:"宽4",
                shipment_long:"长4",
                shipment_number:"数量4",
                shipment_printfont:"字印4",
                shipment_pro_weight:"产品重4",
                shipment_weight:"总重4",
                shipment_facewidth:"面宽4",
                shipment_lwh:"长宽高4",
                shipment_height:"高4",
                proSelected:0,
              },
            ],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠3",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            proDetailArray:[],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠4",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            proDetailArray:[],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠5",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            proDetailArray:[],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠6",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            proDetailArray:[],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠7",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            proDetailArray:[],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠8",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            proDetailArray:[
              {
                shipment_Ring:"圈口1",
                shipment_boresize:"内径1",
                shipment_breadth:"宽1",
                shipment_long:"长1",
                shipment_number:"数量1",
                shipment_printfont:"字印1",
                shipment_pro_weight:"产品重1",
                shipment_weight:"总重1",
                shipment_facewidth:"面宽1",
                shipment_lwh:"长宽高1",
                shipment_height:"高1",
                proSelected:0,
              },
              {
                shipment_Ring:"圈口2",
                shipment_boresize:"内径2",
                shipment_breadth:"宽2",
                shipment_long:"长2",
                shipment_number:"数量2",
                shipment_printfont:"字印2",
                shipment_pro_weight:"产品重2",
                shipment_weight:"总重2",
                shipment_facewidth:"面宽2",
                shipment_lwh:"长宽高2",
                shipment_height:"高2",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口3",
                shipment_boresize:"内径3",
                shipment_breadth:"宽3",
                shipment_long:"长3",
                shipment_number:"数量3",
                shipment_printfont:"字印3",
                shipment_pro_weight:"产品重3",
                shipment_weight:"总重3",
                shipment_facewidth:"面宽3",
                shipment_lwh:"长宽高3",
                shipment_height:"高3",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口4",
                shipment_boresize:"内径4",
                shipment_breadth:"宽4",
                shipment_long:"长4",
                shipment_number:"数量4",
                shipment_printfont:"字印4",
                shipment_pro_weight:"产品重4",
                shipment_weight:"总重4",
                shipment_facewidth:"面宽4",
                shipment_lwh:"长宽高4",
                shipment_height:"高4",
                proSelected:0,
              },
            ],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },          
        ],
        uuuuu:"uuuuuu",
        selectedAllPro:false,
        seeOneProDetail:false,
        currenSelectedItem:'',
        currenDetail:{
          craft:"拉丝",
          material:"K金",
          shapes:"五彩金兔",
          colour:"999",
          length:"长1",
          breadth:"宽1",
          altitude:"高1",
          lba:"长宽高1",
          circlemouth:"圈口1",
          boresize:"内径1",
          facewidth:"宽1",         
        },
        currenSelectedItemForChoose:{
            craft:[
            "craft222222222222",
            "craft222222222222222222222222",
            "craft222222222222222222222222",
            "拉丝",
            "1222222333333222222",
            "12222223333222222",
            "1222333222222222",
            "22222222",
            "22222222",
            ],
            material:[
            "material",
            "K金",
            "craft222222222222222222222222",
            "craft222222333333222222",
            "1222222333333222222",
            "12222223333222222",
            "1222333222222222",
            "22222222",
            "22222222",
            ],
            shapes:[
            "五彩金兔",
            "shapes222222222222222222222222",
            "shapes222222222222222222222222",
            "shapes222222333333222222",
            "1222222333333222222",
            "12222223333222222",
            "1222333222222222",
            "22222222",
            "22222222",
            ],
            colour:[
            "colour",
            "999",
            "2222222222222222222222222222",
            "22",
            "1222222333333222222",
            "12222223333222222",
            "1222333222222222",
            "22222222",
            "22222222",
            ],
            length:[
            "length",
            "长1",
            "2222222222222222222222222222",
            "22",
            "1222222333333222222",
            "12222223333222222",
            "1222333222222222",
            "22222222",
            "22222222",
            ],
            breadth:[
            "宽1",
            "breadth",
            "2222222222222222222222222222",
            "22",
            "1222222333333222222",
            "12222223333222222",
            "1222333222222222",
            "22222222",
            "22222222",
            ],
            altitude:[
            "altitude",
            "高1",
            "2222222222222222222222222222",
            "22",
            "1222222333333222222",
            "12222223333222222",
            "1222333222222222",
            "22222222",
            "22222222",
            ],
            lba:[
            "lba",
            "长宽高1",
            "2222222222222222222222222222",
            "22",
            "1222222333333222222",
            "12222223333222222",
            "1222333222222222",
            "22222222",
            "22222222",
            ],
            circlemouth:[
            "circlemouth",
            "圈口1",
            "2222222222222222222222222222",
            "22",
            "1222222333333222222",
            "12222223333222222",
            "1222333222222222",
            "22222222",
            "22222222",
            ],
            boresize:[
            "boresize",
            "内径1",
            "2222222222222222222222222222",
            "22",
            "1222222333333222222",
            "12222223333222222",
            "1222333222222222",
            "22222222",
            "22222222",
            ],
            facewidth:[
            "facewidthlba",
            "宽1",
            "2222222222222222222222222222",
            "22",
            "1222222333333222222",
            "12222223333222222",
            "1222333222222222",
            "22222222",
            "22222222",
            ],
          
          },
      }
    },


    methods:{
      editThisPro(item){
        var lStorage = window.localStorage;
        var itemrr = JSON.parse(localStorage.proDetailItem);
        item = itemrr;
        console.log("item = "+item.proName);
        console.log("itemrr = "+itemrr.proName);

      },
      reload: function(){
        var lStorage = window.localStorage;
        var itemrr = JSON.parse(localStorage.proDetailItem);
        return itemrr.name;
        // item = itemrr;
        // console.log("item = "+item.proName);
        // console.log("itemrr = "+itemrr.proName);
      },
      refresh(done) {
      // this.items = [];
        setTimeout(() => {
          done();
        }, 2000);
      },
      infinite(done) {
          setTimeout(() => {
            this.$refs.myscroller.finishInfinite(2); //没有数据时的处理函数
          }, 2000);

         return;
      },

      gotoDetail(item){
        alert("gotoDetail"+item.proName);
      },
      selectedThisPro(item){
        item.proSelected = !item.proSelected;
        if(item.proSelected == false){
          this.selectedAllPro= false;
        }else{
          let item;
          for(let i = 0;i<this.carDataArray.length;++i){
           item = this.carDataArray[i];
           if(item.proSelected == 0){
             this.selectedAllPro = false;
             return;
           }
          }

          this.selectedAllPro = true;
        }
      },
      selectedProDetail(item){
        item.proSelected = !item.proSelected;
        if(item.proSelected == false){
          this.selectedAllPro= false;
        }else{
          let item;
          for(let i = 0;i<this.carDataArray.length;++i){
           item = this.carDataArray[i];
           if(item.proSelected == 0){
             this.selectedAllPro = false;
             return;
           }
          }

          this.selectedAllPro = true;
        }
      },

      selectedAllProButtonClick(){
        this.selectedAllPro=!this.selectedAllPro;
        let item;
        for(let i = 0;i<this.carDataArray.length;++i){
          item = this.carDataArray[i];
          item.proSelected = this.selectedAllPro;
        }

      },
      sureButtonClick(){
        

      },
      delectedButtonClick(){
        

      },
      doingNothing(){
        //用来阻止事件冒泡

      },
      btn_pop_background(){
        this.seeOneProDetail=false;
      },

      
    },


    
   
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#car

  background #ffffff
  position absolute
  width 100%
.proDiv
  position fixed
  width 100%
  // height 100%
  top 0.44rem
  bottom 1rem
  overflow scroll
::-webkit-scrollbar
  width 0px
  height 0
.mainDiv  
  width 100%
  background red
  // bottom 0  
.sureChooseDiv
  position fixed
  width 100%
  height 0.5rem
  bottom 0.5rem
  background #ffffff
  .selected
    position absolute
    margin-top 0.175rem
    margin-left 0.15rem
    background #ffffff
    float left
    font-size 0.14rem
    color #333333
    .selectedIcon:after
      content '\e63d'
      color #e60e32  
    .noSelectedIcon:after
      content '\e65b'
      color #999999
.delectedOrSureDiv
  position absolute
  height 0.5rem
  width 70%
  background #ffffff
  right 0
  font-size 0.14rem
  border-top 1px solid #f2f2f2
  .sureButton
   position fixed
   color #ffffff
   background #e60e32
   right 0.15rem
   margin-right 0.15rem
   width 0.8rem
   height 0.3rem
   margin-top 0.1rem
   text-align center
   line-height 0.3rem
  .delectedButton
   position fixed
   color #333333
   background #f5f5f5
   right 1.15rem
   margin-right 0.2rem
   width 0.6rem  
   height 0.3rem
   margin-top 0.1rem
   text-align center
   line-height 0.3rem 
.gray_background
  position fixed
  width 100%
  top 0
  bottom 0
  background: rgba(0,0,0, 0.5);
  z-index 20
  .detailDiv
    position fixed
    top 1.6rem
    bottom 0
    width 100%
    background red
    z-index 22
    .proInfoDiv
      background #ffffff
      float left
      width 100%
      .detailViewImage
        width 1rem
        height 0.75rem
        margin-left 0.15rem
        margin-top -0.15rem
        float left 
      .proInfoMessage
        background #ffffff
        float left
        margin-left 0.15rem
        width 61.3%
        margin-top 0.05rem
        height 0.05rem
        .proInfoMessageName
          font-size 0.14rem
          color #333333
        .proInfoMessageNumber   
          font-size 0.14rem
          color #999999 
          margin-top 0.05rem
    .proAllChooseScroll
      background #ffffff
      position fixed
      width 100%
      top 2.1rem
      bottom 0
      overflow scroll
      ::-webkit-scrollbar
         width 0px
         height 0
      .attributeDiv
         background red
         .craftDiv
           background blue
           .craftTitle
             background #f2f2f2
           .craftName
             background #352632
             height 0.3rem
             width auto
             .craftNameSelected
               background #e60e32
               color #ffffff
             .craftNameNormal 
               background #ffffff 
               color #333333
             .craftNameDisabled
               background #ffffff
               color #e5e5e5







</style>

<!-- 
shipment_Ring 圈口
shipment_boresize 内径
shipment_breadth 宽
shipment_long  长
shipment_number  数量
shipment_printfont 字印
shipment_pro_weight 产品重
shipment_weight  总重
shipment_facewidth  面宽
shipment_lwh  长宽高
shipment_height  高 -->
