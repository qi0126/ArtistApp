<template>
  <div id="carEditDetail">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>

    <div class="currenNaviDiv">
        <navi-div :vueTitle='"编辑"' @backOutClick="backOutClick"></navi-div>
    </div>

    <div class="proInfo">
        <div class="proImageDiv">
            <img class="proImage" :src="this.itemMessage.proImage" alt="暂无图片">
            <div v-if="!this.itemMessage.proIsFix" class="newIcon">
                <i class="iconfont newIcon"></i>
            </div>
        </div>
        <div class="info">
            <div class="info_text1" v-text="this.itemMessage.proName"></div>
            <div class="info_text2" >编码:{{this.itemMessage.proNumber}}</div>
            <div class="info_text3" >品类:戒指</div>
            <div class="info_text4" >材质:K金</div>
        </div>

    </div>

    <div class="attributeDiv">
        <div class="craftDiv">
            <div class="craftTitleDiv">
                <div class="craftTextDiv">表面工艺</div>
                <div v-if="this.craftShow">
                   <div class="selectedTitleDiv">{{this.craft}}</div>
                </div>

                <div class="showOrHideDiv" @click="showForSelected('one')">
                    <i class="iconfont hideIcon" v-if="!this.craftShow"></i>
                    <i class="iconfont showIcon" v-if="this.craftShow"></i>
                </div>

            </div>


            <div v-show="!this.craftShow">
                <div class="forSelectedDiv">
                    <div v-for="item in this.currenSelectedItemForChoose.craft" :key="item.id">
                      <div v-if="item == craft">
                        <div class="selectedDiv">
                            <div v-if="item.length>5">
                                <div class="long">{{item}}</div>
                            </div>
                            <div v-else>
                                <div class="short">{{item}}</div>
                            </div>
                            
                        </div>

                      </div>
                      <div v-else>
                        <div class="normalDiv">
                            <div v-if="item.length>5">
                                <div class="long">{{item}}</div>
                            </div>
                            <div v-else>
                                <div class="short">{{item}}</div>
                            </div>
                        </div>
                      </div>
                    </div>


                </div>

            </div>

        </div>

        <div class="craftDiv">
            <div class="craftTitleDiv">
                <div class="craftTextDiv">外观形态</div>
                <div v-if="this.shapesShow">
                   <div class="selectedTitleDiv">{{this.shapes}}</div>
                </div>

                <div class="showOrHideDiv" @click="showForSelected('two')">
                    <i class="iconfont hideIcon" v-if="!this.shapesShow"></i>
                    <i class="iconfont showIcon" v-if="this.shapesShow"></i>
                </div>

            </div>


            <div v-show="!this.shapesShow">
                <div class="forSelectedDiv">
                    <div v-for="item in this.currenSelectedItemForChoose.shapes" :key="item.id">
                      <div v-if="item == shapes">
                        <div class="selectedDiv">
                            <div v-if="item.length>5">
                                <div class="long">{{item}}</div>
                            </div>
                            <div v-else>
                                <div class="short">{{item}}</div>
                            </div>
                            
                        </div>

                      </div>
                      <div v-else>
                        <div class="normalDiv">
                            <div v-if="item.length>5">
                                <div class="long">{{item}}</div>
                            </div>
                            <div v-else>
                                <div class="short">{{item}}</div>
                            </div>
                        </div>
                      </div>
                    </div>


                </div>

            </div>


        </div>  
             

        <div class="craftDiv">
            <div class="craftTitleDiv">
                <div class="craftTextDiv">成色</div>
                <div v-if="this.colourShow">
                   <div class="selectedTitleDiv">{{this.colour}}</div>
                </div>

                <div class="showOrHideDiv" @click="showForSelected('three')">
                    <i class="iconfont hideIcon" v-if="!this.colourShow"></i>
                    <i class="iconfont showIcon" v-if="this.colourShow"></i>
                </div>

            </div>


            <div v-show="!this.colourShow">
                <div class="forSelectedDiv">
                    <div v-for="item in this.currenSelectedItemForChoose.colour" :key="item.id">
                      <div v-if="item == colour">
                        <div class="selectedDiv">
                            <div v-if="item.length>5">
                                <div class="long">{{item}}</div>
                            </div>
                            <div v-else>
                                <div class="short">{{item}}</div>
                            </div>
                            
                        </div>

                      </div>
                      <div v-else>
                        <div class="normalDiv">
                            <div v-if="item.length>5">
                                <div class="long">{{item}}</div>
                            </div>
                            <div v-else>
                                <div class="short">{{item}}</div>
                            </div>
                        </div>
                      </div>
                    </div>


                </div>

            </div>


        </div>

        <div class="spesiseDiv">
            <div class="titleDiv">产品规格</div>

            <div class="spesiseMainDiv">
                <div v-for="(ite,index) in this.aaaaaaaaa" :key="ite.id">
                    <div class="oneSpesiseDiv">

                   
                 <div class="titleDiv">{{bbbbbbbbb[index]}}</div>
                    
                                    <div class="forSelectedDiv">
                    <div v-for="item in ite" :key="item.id">
                      <div v-if="item == colour">
                        <div class="selectedDiv">
                            <div v-if="item.length>5">
                                <div class="long">{{item}}</div>
                            </div>
                            <div v-else>
                                <div class="short">{{item}}</div>
                            </div>
                            
                        </div>

                      </div>
                      <div v-else>
                        <div class="normalDiv">
                            <div v-if="item.length>5">
                                <div class="long">{{item}}</div>
                            </div>
                            <div v-else>
                                <div class="short">{{item}}</div>
                            </div>
                        </div>
                      </div>
                    </div>
                    </div>
             </div>

                </div>


                </div>



        </div>


    </div>





    <div class="sureOrResetDiv">
        <div class="resetDiv">
            <div class="textDiv">重置</div>

        </div>

        <div class="sureDiv">
            <div class="textDiv">确认</div>

        </div>
    </div>
     










  </div>
</template>



<script type="text/ecmascript-6">
import naviDiv from '../../../components/navi/navi'
export default {
  name: "carEditDetail",
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
  components: {naviDiv},
  data() {
    return {
      title: "aaaaaa",
      itemMessage:"",
      proDetailIndex:0,
      craftShow:true,
      shapesShow:true,
      colourShow:true,
      craft:"拉丝",
      shapes:"五彩金兔",
      colour:"999",
      showOrHideDiv:[
          true,true,true
      ],
      bbbbbbbbb:["长","宽","高","长宽高","圈口","内景","长d d",],
      aaaaaaaaa:[
          [
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
            [
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
            [
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
            [
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
            [
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
            [
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
            [
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

      ],
      currenSelectedItemForChoose:{
            craft:[
            "craft22222222222",
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
      proDetailTitleName:["产品克重","出货数量","出货克重","长度","宽度","高度","圈口","内径","面宽","字印","长宽高",],
      
    };
  },
  computed: {},
  created() {
    var lStorage = window.localStorage;
    var item = JSON.parse(localStorage.proDetailItem);
    this.itemMessage = item;
    var ind = JSON.parse(localStorage.proDetailIndex);
    this.proDetailIndex = ind;
  },
  methods: {
      parentMsg: function (msg) {
        alert("dddddd"+msg);
      },
      backOutClick(){
        this.itemMessage.proName = "dddddd";
        var message = JSON.stringify(this.itemMessage); //对象转为字符串
        var lStorage = window.localStorage;
        lStorage.proDetailItem = message;
        
        history.go(-1);
      },
      showForSelected(index){
          if(index =="one"){
            //   this.showOrHideDiv[0]=!this.showOrHideDiv[0];
            this.craftShow= !this.craftShow;

          }else if(index == "two"){
            //   this.showOrHideDiv[1]=!this.showOrHideDiv[0];
            this.shapesShow= !this.shapesShow;

          }else if(index == "three"){
            //   this.showOrHideDiv[2]=!this.showOrHideDiv[0];
            this.colourShow= !this.colourShow;
              
          }
        

      },



  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #carEditDetail
    width 100%
    height 100%
    background-color #ffffff
    align-items center
    .currenNaviDiv
      width 100%
      height 0.44rem
      background-color #ffffff
    .proInfo
      position absolute
      height 1rem
      width 100%
      background #ffffff
      .proImageDiv
        position absolute
        width 1rem
        height 0.75rem
        margin-left 0.15rem
        margin-top 0.12rem
        float left
        .newIcon
          margin-right 0
          position absolute
          width 100%
          .newIcon:after
            float right
            content '\e67f'
            color #e60e32
        .proImage
          float left
          width 1rem
          height 0.75rem
      .info
        background #ffffff
        float left
        margin-left 1.12rem
        margin-top 0.16rem
        .info_text1
          margin-left 0.12rem
          margin-top 0rem
          font-size 0.14rem
          
        .info_text2
          margin-left 0.12rem
          margin-top 0.08rem
          font-size 0.12rem
          color #999999
          line-height 0.10rem
        .info_text3
          margin-left 0.12rem
          margin-top 0.08rem
          font-size 0.12rem
          color #999999
          line-height 0.10rem
        .info_text4
          margin-left 0.12rem
          margin-top 0.08rem
          font-size 0.12rem
          color #999999 
          line-height 0.10rem                   
    .attributeDiv
      position absolute
      top 1.44rem
      bottom 0.5rem
      background #ffffff
      width 100%
      overflow scroll
      .craftDiv
        background-color #ffffff
        width 100%
        float left
        padding-bottom 0.12rem
        border-bottom 2px solid #f2f2f2
        .craftTitleDiv
          background-color #ffffff
          width 100%
          height 0.36rem
          .craftTextDiv
            background-color #ffffff
            color #999999
            font-size 0.14rem
            margin-left 0.15rem
            height 0.36rem
            width auto
            line-height 0.48rem
            text-align left
            float left
          .selectedTitleDiv
            background-color #e60e32
            color #ffffff
            font-size 0.12rem
            margin-left 0.15rem
            margin-top 0.09rem
            height 0.3rem
            width 0.75rem
            line-height 0.3rem
            text-align center
            float left
            border-radius 0.025rem
          .showOrHideDiv
            background-color #ffffff
            margin-right 0.15rem
            margin-top 0.1rem
            height 0.24rem
            width 0.48rem
            line-height 0.24rem
            float right
            .hideIcon:after
              content '\e676'
              color #999999
              font-size 0.10rem
              background-color #ffffff
              float right
            .showIcon:after
              content '\e678'
              color #999999
              font-size 0.10rem
              background-color #ffffff
              float right   
        .forSelectedDiv 
          background #ffffff  
          height auto
          margin-left 1.35%
          margin-right 4%
          .selectedDiv
            .long
              background-color #e60e32
              color #ffffff
              font-size 0.12rem
              margin-left 0.10rem
              margin-top 0.09rem
              height 0.3rem
              width auto
              line-height 0.3rem
              text-align center
              float left
              border-radius 0.025rem
            .short
              background-color #e60e32
              color #ffffff
              font-size 0.12rem
              margin-left 0.10rem
              margin-top 0.09rem
              height 0.3rem
              width 0.75rem
              line-height 0.3rem
              text-align center
              float left
              border-radius 0.025rem
          .normalDiv  
            .long
              background-color #ffffff
              color #333333
              font-size 0.12rem
              margin-left 0.1rem
              margin-top 0.09rem
              height 0.3rem
              width auto
              line-height 0.3rem
              text-align center
              float left
              border-radius 0.025rem
              border 2px solid #f2f2f2
              padding 0 0.05rem 0 0.05rem
              
            .short
              background-color #e60e32
              color #ffffff
              font-size 0.12rem
              margin-left 0.10rem
              margin-top 0.09rem
              height 0.3rem
              width 0.75rem
              line-height 0.3rem
              text-align center
              float left
              border-radius 0.025rem   
          .disEnDiv  
            background-color #ffffff 
      .spesiseDiv 
        background-color #ffffff  
        .titleDiv
          background-color #ffffff
          color #999999
          font-size 0.14rem
          margin-left 0.15rem
          height 0.36rem
          width 100%
          line-height 0.48rem
          text-align left
          float left
          border-bottom 1px solid #f2f2f2
        .spesiseMainDiv
          .oneSpesiseDiv
            .titleDiv
              background-color #ffffff
              color #333333
              font-size 0.12rem
              margin-left 0.15rem
              height 0.36rem
              width 100%
              line-height 0.48rem
              text-align left
              float left             
            .forSelectedDiv
              background #ffffff  
              height auto
              margin-left 1.35%
              margin-right 4%
              .selectedDiv
                .long
                  background-color #e60e32
                  color #ffffff
                  font-size 0.12rem
                  margin-left 0.10rem
                  margin-top 0.09rem
                  height 0.3rem
                  width auto
                  line-height 0.3rem
                  text-align center
                  float left
                  border-radius 0.025rem
                .short
                  background-color #e60e32
                  color #ffffff
                  font-size 0.12rem
                  margin-left 0.10rem
                  margin-top 0.09rem
                  height 0.3rem
                  width 0.75rem
                  line-height 0.3rem
                  text-align center
                  float left
                  border-radius 0.025rem
              .normalDiv  
                .long
                  background-color #ffffff
                  color #333333
                  font-size 0.12rem
                  margin-left 0.1rem
                  margin-top 0.09rem
                  height 0.3rem
                  width auto
                  line-height 0.3rem
                  text-align center
                  float left
                  border-radius 0.025rem
                  border 2px solid #f2f2f2
                  padding 0 0.05rem 0 0.05rem
              
                .short
                  background-color #e60e32
                  color #ffffff
                  font-size 0.12rem
                  margin-left 0.10rem
                  margin-top 0.09rem
                  height 0.3rem
                  width 0.75rem
                  line-height 0.3rem
                  text-align center
                  float left
                  border-radius 0.025rem   
              .disEnDiv  
                background-color #ffffff 
    .sureOrResetDiv
      position fixed  
      background-color #ffffff  
      bottom 0
      width 100%
      height 0.5rem
      border-top 1px solid #f2f2f2
      .resetDiv
        width 50% 
        background-color #ffffff  
        height 0.5rem 
        float left
        .textDiv
          width 100%
          height 0.5rem
          line-height 0.5rem  
          text-align center
          font-size 0.18rem
          color #e60e32
      .sureDiv
        width 50% 
        background-color #e60e32  
        height 0.5rem 
        float right
        .textDiv
          width 100%
          height 0.5rem
          line-height 0.5rem  
          text-align center
          font-size 0.18rem
          color #ffffff          
    ::-webkit-scrollbar
      width 0px
      height 0  
     




        




</style>
