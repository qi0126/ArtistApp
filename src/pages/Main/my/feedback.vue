<template>
  <div class="feedback">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
     
      <div class="Navi">
         <i id="back" class="iconfont anIcon" @click="backOutClick"></i>
         <span class="scanTitle">意见反馈</span>

     </div>

     <div class="questionDiv">
        <div class="programQuestionDiv">
          <span class="textSpan">程序问题</span>
          <div v-for="two in this.programQuestion" :key="two.twoIndex">
            <div v-if='two.selected'>
             <button class="cellButtonSelected" @click="programQuestionButtonClick(two)" >{{ two.name }}</button>
            </div>
            <div v-else>
             <button class="cellButton" @click="programQuestionButtonClick(two)" >{{ two.name }}</button>
            </div>
          </div>

          <div class="grayLine"></div>
        </div>
        <br/>

        <div class="businessQuestionDiv">
          <span class="textSpan">业务问题</span>
          <div v-for="two in this.businessQuestion" :key="two.twoIndex">
            <div v-if='two.selected'>
              <button class="cellButtonSelected" @click="businessQuestionButtonClick(two)" >{{ two.name }}</button>
            </div>
            <div v-else>
              <button class="cellButton" @click="businessQuestionButtonClick(two)" >{{ two.name }}</button>
            </div>
          </div>
          <div class="grayLine"></div>
        </div>       
     </div>

     <div class="opinionDiv">
       <span class="textSpan">问题与意见</span><br/>
       <div class="textareaDiv">
         <textarea maxlength="200" class="opinionTextarea" v-model="desc" @input="descInput" placeholder="请输入10字以上的描述，以便我们提供更好的帮助"></textarea>
         <span class="descNumberSpan">{{this.remnant}}/200</span>
       </div>
     </div>

    <div class="opinionDiv">
       <span class="textSpan">联系电话</span><br/>
       <textarea maxlength="20" class="searchInput" v-model="phoneNumber" @input="input_change" placeholder="请输入您的联系电话，便于我们与你联系（选填）"></textarea>
       <!-- <input class="searchInput" v-model="phoneNumber" @keyup="input_change" placeholder="请输入您的联系电话，便于我们与你联系（选填）"> -->
    </div>

    <button class="sureButton" @click="sureButtonClick">确定提交</button>
  

  </div>

 
</template>

<script>
export default {
  data() {
    return {
      value:true,
      remnant:0,
      phoneNumber:'',
      desc:'',
      programQuestion:[{name:"App问题",selected:false},{name:"跳转错误",selected:false},{name:"其他问题",selected:false}],
      businessQuestion:[{name:"客户建议",selected:false},{name:"产品错误",selected:false},{name:"数据错误",selected:false}],
      companyMessage:"深圳百泰投资控股集团有限公司是集生产加工、批发销售、零售加盟、文化典藏、金融投资等于一体的大型黄金珠宝首饰企业。截至目前，百泰集团旗下拥有深圳市和合百泰珠宝首饰有限公司、深圳市尚金缘珠宝实业有限公司、天津市尚金缘珠宝首饰有限公司、深圳市百泰金文化传播有限公司、深圳市百泰国礼投资有限公司等20余家各类子公司。2014年集团黄金产品总销量近200吨。集团拥有三个自主品牌：百泰首饰、环冠时尚、尚金缘。公司未来规划在全国建立五大产业基地，目前，总部（深圳）基地、东部（杭州）基地和北部（天津）基地已初具雏型。在品牌发展过程中，百泰集团及其品牌在国内外赢得了良好的声誉，曾获得“中国民营企业制造业500强”、“国家标准化良好行为AAAA级认证企业”、“贵金属及珠宝玉石饰品企业标准联盟”秘书长单位、“广东省百强民营企业”、“深圳市市长质量奖鼓励奖”、“深圳市民营领军骨干企业”、“深圳市高新技术企业”、“深圳市自主创新行业龙头企业”、“盐田区区长质量奖”，以及由中华人民共和国人力资源与社会保障部认定的“全国黄金行业先进集体”等多项荣誉称号。与国家级技术中心联合成立百泰黄金技术（艺术）研发中心，并与清华大学深圳艺术设计研究院、中国国家博物馆、世界黄金协会、香港中文大学、中国科学院深圳先进技术研究院等国内外多所著名机构建立了长期战略合作关系。百泰集团对自主创新有着坚持不懈的追求，大力开发具有自主知识产权的技术和产品，年开发新品数千款。截至2017年3月，共拥有有效专利170项，其中19项发明专利，36项实用新型专利，115项外观专利，著作权登记22项。同时，作为国家标准委员会的委员，百泰集团在黄金首饰标准体系领域开展了大量基础工作：搜集、制定、整理出黄金首饰行业标准400多个。2009年，发起筹建“贵金属及珠宝玉石饰品企业标准联盟”并被指定为秘书长单位。2006年，百泰集团率先在业内提出“文化黄金、时尚黄金”的产品理念。2008年百泰集团启动品牌加盟连锁业务，运营和拓展终端零售品牌——“百泰首饰”，迎来品牌化新阶段。到目前为止，“百泰首饰”品牌终端零售网点在全国的市场覆盖率达85%以上，在国内拥有自营店、特许经营店400余家。",

    };
  },
  methods: {
    backOutClick() {
      this.$router.push("/my");   
    },
    descInput(){

     this.remnant = this.desc.length;
     

    },


    input_change() {
       
    },
    sureButtonClick() {
      alert("sureButtonClick=");
    },
    programQuestionButtonClick(two) {
      let currenSelected = !two.selected;
      let currenRow ;
      for(let i = 0;i<this.programQuestion.length;++i){
        currenRow = this.programQuestion[i];
        currenRow.selected = false;
      }
      two.selected = currenSelected;
    },
    businessQuestionButtonClick(two) {
      let currenSelected = !two.selected;
      let currenRow ;
      for(let i = 0;i<this.businessQuestion.length;++i){
        currenRow = this.businessQuestion[i];
        currenRow.selected = false;
      }
      two.selected = currenSelected;
    },

  }
};
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">

.feedback {
  width: 3.75rem;
  margin: 0 auto;
  color: #999999;
  background-color: #ffffff;
  
  // z-index 99
  
  
}
.Navi {
  position fixed
  display flex
  align-items center
  z-index 100
  height 0.44rem
  padding-top 0rem
  margin-top 0
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

.questionDiv{
 
  width: 100%;
  padding-top 0.44rem;
  background-color: #fff;

}
.grayLine{
  width 100%
  height 0.01rem;
  float left;
  background #f2f2f2;
  margin-left 0.15rem;
  margin-top 0.12rem;

}
.programQuestionDiv{
  
  width: 100%;
  padding-top 0.25rem;
  background-color: #fff;
  float left 

}

.businessQuestionDiv{
  width: 100%;
  float left
  padding-top 0.4rem;
  background-color: #fff;
}
.opinionDiv{
  width: 100%;
  float left
  padding-top 0.25rem;
  background-color: #fff;
}

.textareaDiv{
  width 3.40rem
  margin-left 0.15rem
  margin-top 0.06rem
  float left
  padding-top 0.01rem;
  background-color: #fff;
  border 2px solid #f2f2f2
  border-radius 2px
}

.opinionTextarea {
  padding-left 0.08rem
  margin-top 0.025rem
  float left 
  width 3.30rem
  height 1.24rem
  font-size 0.14rem
  background-color #ffffff
  caret-color: red
  border-width 0
  border-color #ffffff
  resize none 

}

.searchInput {
  margin-left 0.15rem
  margin-top 0.05rem
  padding-left 0.08rem
  padding-top 0.12rem
  float left 
  width 3.30rem
  height 0.3rem
  font-size 0.12rem
  background-color #ffffff
  border 2px solid #f2f2f2
  resize none

}

.descNumberSpan{
  
  width 100%
  float right  
  margin-right 0.08rem;
  font-size 0.10rem
  color #999999
  text-align right 
} 


.textSpan{
  display flex;
  width 100%
  float left 
  margin-left 0.15rem;
  font-size 0.12rem
  color #999999

}
.cellButton {
  width: 0.9rem;
  height: 0.3rem;
  margin-top 0.10rem
  background-color: #ffffff;
  float: left;
  border-color: #f2f2f2;
  font-size: 12px;
  color: #333333;
  margin-left 0.1rem;
}
.cellButtonSelected {
  width: 0.9rem;
  height: 0.3rem;
  margin-top 0.10rem
  background-color: #e60e32;
  float: left;
  border-color: #f2f2f2;
  font-size: 12px;
  color: #ffffff;
  margin-left 0.1rem;
}

.sureButton {
  width: 100%;
  height: 0.5rem;
  background-color: #e60e32;
  float: right;
  font-size: 18px;
  color: #ffffff;
  position absolute;
  bottom 0;
  left 0;
}




  


.anIcon:after {
  padding-left 0.15rem
  content '\e63f'
  color #666666
}

</style>