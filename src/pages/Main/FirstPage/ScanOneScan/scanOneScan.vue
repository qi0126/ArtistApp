<template>
  <div class="scanOneScan">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>

    <div class="currenNaviDiv">
        <navi-div :vueTitle='"扫一扫"' :rightText='"清除记录"' @backOutClick="backOutClick" @rightTextClick="rightTextClick"></navi-div>
    </div>



    <div class="proListDiv">
      <div class="mainHisDiv" >
        <div v-for="item in this.dataArray" :key="item.number">
            <scan-cell :proItem='item' 
                       @gotoDetail="gotoDetail(item)" 
                       @rightTextClick="rightTextClick">
            </scan-cell>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import naviDiv from '../../../../components/navi/navi'
import scanCell from './scanOneScanCell'
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
      open: 1,
      dataArray:[
          {
              name:"煮鱼花开系列金耳坠",
              number:"1",
              time:"2017-08-11 13:40:25",
              isNew:0,
              imgUlr:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
              name:"媳妇娃娃系列硬金子孙桶",
              number:"2",
              time:"2017-08-11 13:40:25",
              isNew:1,
              imgUlr:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
              name:"媳妇娃娃系列硬金项链",
              number:"3",
              time:"2017-08-11 13:40:25",
              isNew:1,
              imgUlr:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
              name:"风一样的男子的风度",
              number:"4",
              time:"2017-08-11 13:40:25",
              isNew:0,
              imgUlr:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
              name:"杀马特系列只志炫头饰",
              number:"5",
              time:"2017-08-11 13:40:25",
              isNew:0,
              imgUlr:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
              name:"走过路过不要错估系列旺仔小馒头",
              number:"6",
              time:"2017-08-11 13:40:25",
              isNew:1,
              imgUlr:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
              name:"走过路过不要错估系列旺仔小馒头",
              number:"7",
              time:"2017-08-11 13:40:25",
              isNew:1,
              imgUlr:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
              name:"走过路过不要错估系列旺仔小馒头",
              number:"8",
              time:"2017-08-11 13:40:25",
              isNew:1,
              imgUlr:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
      ]

    };
  },
  methods: {
    getImgUrl(number) {
      let url = "../../../../commons/imgs/"+number+".png";
      return url;
    },
    cleanButtonClick() {
      alert("cleanButtonClick");
    },
    rightTextClick(){
      alert("cleanButtonClick");
    },
    backOutClick() {
      this.$router.push("/firstPage");
      
    },
    gotoDetail(item) {
      alert("gotoDetailClick"+"-"+item.number+"-"+item.name+"-"+item.isNew+"-"+item.time);
    },
   
    hide() {
      this.$emit("onHide");
    },
    onShow() {
      this.$emit("changeShow", false);
    },
    

    
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
  components: {naviDiv,scanCell}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
$base-color = rgb(230, 14, 50);

.scanOneScan 
  width: 3.75rem;
  margin: 0 auto;
  padding-bottom: 0.2rem;
  color: #999999;
  background-color #ffffff;
  .proListDiv 
    position fixed
    width 100%
    top 0.44rem
    bottom 0
    overflow scroll
    .mainHisDiv
      background-color #ffffff;    
  ::-webkit-scrollbar
    width 0px
    height 0

  






  






</style>
