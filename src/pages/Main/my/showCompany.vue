<template>
  <div class="showCompany">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
     
      <div class="Navi">
         <i id="back" class="iconfont anIcon" @click="backOutClick"></i>
         <span class="scanTitle">百泰集团</span>

     </div>

     <div class="advertisDiv">
        <mt-swipe :auto="3000" class="advertis">
          <mt-swipe-item v-for="item in this.dataArray" :key="item.id" class="advertisList">
            <!-- <img :src="item.imgUlr" alt="暂无图片" @click="lunboButtonClick(item)"> -->
            <img src="../../../commons/imgs/1.png" alt="暂无图片" @click="lunboButtonClick(item)">
          </mt-swipe-item>
     
        </mt-swipe>
     </div>

     <div class="companyMessageDiv">
        <p class="companyMessageSpan" style="color:#333333;">{{this.companyMessage}}</p>
        <p class="companyMessageSpan" style="color:#333333;">{{this.companyMessage}}</p>
     </div>
     

  

    

     
      

  </div>

 
</template>

<script>
import mHeader from "../../../components/tabbar/header";
import { Switch } from 'mint-ui';

export default {
  name: "broadcast",
  components: {
    mHeader
  },
  data() {
    return {
      value:true,
      dataArray:[
          {
              name:"花开系列",
              number:"1",
              time:"2017-08-11 13:40:25",
              isNew:0,
              imgUlr:"http://img2.imgtn.bdimg.com/it/u=2227196088,2072827140&fm=27&gp=0.jpg",
          },
          {
              name:"媳妇娃娃系列硬金子孙桶",
              number:"2",
              time:"2017-08-11 13:40:25",
              isNew:1,
              imgUlr:"http://img3.imgtn.bdimg.com/it/u=2226396175,2886745608&fm=200&gp=0.jpg",
          },
          {
              name:"媳妇娃娃系列硬金项链",
              number:"3",
              time:"2017-08-11 13:40:25",
              isNew:1,
              imgUlr:"http://img4.imgtn.bdimg.com/it/u=2702361005,2757988983&fm=27&gp=0.jpg",
          },
          {
              name:"风一样的男子的风度",
              number:"4",
              time:"2017-08-11 13:40:25",
              isNew:0,
              imgUlr:"http://img3.imgtn.bdimg.com/it/u=2226396175,2886745608&fm=200&gp=0.jpg",
          },
          {
              name:"杀马特系列只志炫头饰",
              number:"5",
              time:"2017-08-11 13:40:25",
              isNew:0,
              imgUlr:"http://img4.imgtn.bdimg.com/it/u=2702361005,2757988983&fm=27&gp=0.jpg",
          },
          {
              name:"走过路过不要错估系列旺仔小馒头",
              number:"6",
              time:"2017-08-11 13:40:25",
              isNew:1,
              imgUlr:"http://img3.imgtn.bdimg.com/it/u=2226396175,2886745608&fm=200&gp=0.jpg",
          },
          {
              name:"走过路过不要错估系列旺仔小馒头",
              number:"6",
              time:"2017-08-11 13:40:25",
              isNew:1,
              imgUlr:"http://img4.imgtn.bdimg.com/it/u=2702361005,2757988983&fm=27&gp=0.jpg",
          },
          {
              name:"走过路过不要错估系列旺仔小馒头",
              number:"6",
              time:"2017-08-11 13:40:25",
              isNew:1,
              imgUlr:"http://img3.imgtn.bdimg.com/it/u=2226396175,2886745608&fm=200&gp=0.jpg",
          },
      ],
      companyMessage:"深圳百泰投资控股集团有限公司是集生产加工、批发销售、零售加盟、文化典藏、金融投资等于一体的大型黄金珠宝首饰企业。截至目前，百泰集团旗下拥有深圳市和合百泰珠宝首饰有限公司、深圳市尚金缘珠宝实业有限公司、天津市尚金缘珠宝首饰有限公司、深圳市百泰金文化传播有限公司、深圳市百泰国礼投资有限公司等20余家各类子公司。2014年集团黄金产品总销量近200吨。集团拥有三个自主品牌：百泰首饰、环冠时尚、尚金缘。公司未来规划在全国建立五大产业基地，目前，总部（深圳）基地、东部（杭州）基地和北部（天津）基地已初具雏型。在品牌发展过程中，百泰集团及其品牌在国内外赢得了良好的声誉，曾获得“中国民营企业制造业500强”、“国家标准化良好行为AAAA级认证企业”、“贵金属及珠宝玉石饰品企业标准联盟”秘书长单位、“广东省百强民营企业”、“深圳市市长质量奖鼓励奖”、“深圳市民营领军骨干企业”、“深圳市高新技术企业”、“深圳市自主创新行业龙头企业”、“盐田区区长质量奖”，以及由中华人民共和国人力资源与社会保障部认定的“全国黄金行业先进集体”等多项荣誉称号。与国家级技术中心联合成立百泰黄金技术（艺术）研发中心，并与清华大学深圳艺术设计研究院、中国国家博物馆、世界黄金协会、香港中文大学、中国科学院深圳先进技术研究院等国内外多所著名机构建立了长期战略合作关系。百泰集团对自主创新有着坚持不懈的追求，大力开发具有自主知识产权的技术和产品，年开发新品数千款。截至2017年3月，共拥有有效专利170项，其中19项发明专利，36项实用新型专利，115项外观专利，著作权登记22项。同时，作为国家标准委员会的委员，百泰集团在黄金首饰标准体系领域开展了大量基础工作：搜集、制定、整理出黄金首饰行业标准400多个。2009年，发起筹建“贵金属及珠宝玉石饰品企业标准联盟”并被指定为秘书长单位。2006年，百泰集团率先在业内提出“文化黄金、时尚黄金”的产品理念。2008年百泰集团启动品牌加盟连锁业务，运营和拓展终端零售品牌——“百泰首饰”，迎来品牌化新阶段。到目前为止，“百泰首饰”品牌终端零售网点在全国的市场覆盖率达85%以上，在国内拥有自营店、特许经营店400余家。",

    };
  },
  methods: {
    backOutClick() {

      alert("backOut");
    },
     rightArrowsButtonClick() {
       this.$router.push("/my/general/informAndVoice");
       alert("rightArrowsButtonClick");
    },
    switchValueButtonClick(value) {
      this.switchValue = !this.switchValue;
      alert("switchValueButtonClick="+value);
    },
    lunboButtonClick(item) {
      alert("item.imgUlr="+item.name);
    },
    turn: function(){  
        console.log(this.value)  
    }
  }
};
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">

.showCompany {
  width: 3.75rem;
  margin: 0 auto;
  color: #999999;
  background-color: #ffffff;
  z-index 32
}


.Navi {
  position fixed
  display flex
  align-items center
  z-index 10
  height 0.44rem
  border-bottom 1px solid #cccccc
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

.companyMessageDiv{
  width: 100%;
  padding-top 1.94rem;
  background-color: #fff;

}
.companyMessageSpan{
  width: 100%;
  padding-top 0.15rem;
  background-color: #fff;
  font-size 0.14rem,
  letter-spacing 1px;
  line-height 0.28rem;
  
  // text-indent 2em;

}

  
.advertisDiv {
    display flex;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    position fixed
    padding-top 0.44rem;
    background-color #ffffff
    width 100%
  }
  .advertis {
    height: 1.5rem;
    background-color: #aaae79;
    width: 100%;

    .advertisList {
      width: 100%;

      img {
        width: 100%;
        height: 1.5rem;
      }
    }
  }


.anIcon:after {
  padding-left 0.15rem
  content '\e63f'
  color #666666
}

</style>