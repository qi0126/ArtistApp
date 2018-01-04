<template>
  <div id="searchText">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
   
    <div class="navi">
        <div class="naviDiv">
           <div class="backDiv" @click="backOutClick">
               <i class="iconfont backIcon" ></i>
           </div>
           <div class="titleDiv">
              <img src="../../../../commons/imgs/search.png" class="searchImg" alt="暂无图片">
              <input class="search" v-model="key" @keyup="inputChange" placeholder="搜索：分类 品牌 系列 首饰">
           </div>
           <div class="rightTextDiv" @click="searchButtonClick">
              <i v-if="!this.tileShow" class="iconfont tileIcon" @click="listShowCurren"></i>
              <i v-if="this.tileShow" class="iconfont noTileIcon" @click="tileShowCurren"></i>
           </div>  
        </div>
    </div>








  </div>
</template>

<script type="text/ecmascript-6">
import naviDiv from '../../../../components/navi/naviSearch'
// import saveCell from '../../../components/FirstPage/ProductAbout/saveCell'
// import listCell from '../../../components/FirstPage/ProductAbout/saveListCell'
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
      key: "",
      searchKey:[{key:""}],
      showHistory:true,
      dataArray:[
          {
              name:"煮鱼花开系列金耳坠",
              number:"1",
              time:"2017-08-11 13:40:25",
              isNew:0,
              imgUlr:"https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=兔子&step_word=&hs=0&pn=9&spn=0&di=3417234530&pi=0&rn=1&tn=baiduimagedetail&is=3924119795%2C827834701&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3440392149%2C1457267033&os=2409315706%2C1613618627&simid=0%2C0&adpicid=0&lpn=0&ln=1975&fr=&fmq=1512364574941_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=17&oriquery=&objurl=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F03087bf40ad162d9056273f11bdfa9ec8b13cd4b.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bp57ptw5_z%26e3Bv54AzdH3Fwm99l90bm890amb9ba89AzdH3F&gsm=&rpstart=0&rpnum=0",
          },
          {
              name:"媳妇娃娃系列硬金子孙桶",
              number:"2",
              time:"2017-08-11 13:40:25",
              isNew:1,
              imgUlr:"https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=兔子&step_word=&hs=0&pn=9&spn=0&di=3417234530&pi=0&rn=1&tn=baiduimagedetail&is=3924119795%2C827834701&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3440392149%2C1457267033&os=2409315706%2C1613618627&simid=0%2C0&adpicid=0&lpn=0&ln=1975&fr=&fmq=1512364574941_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=17&oriquery=&objurl=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F03087bf40ad162d9056273f11bdfa9ec8b13cd4b.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bp57ptw5_z%26e3Bv54AzdH3Fwm99l90bm890amb9ba89AzdH3F&gsm=&rpstart=0&rpnum=0",
          },
          {
              name:"媳妇娃娃系列硬金项链",
              number:"3",
              time:"2017-08-11 13:40:25",
              isNew:1,
              imgUlr:"https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=兔子&step_word=&hs=0&pn=9&spn=0&di=3417234530&pi=0&rn=1&tn=baiduimagedetail&is=3924119795%2C827834701&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3440392149%2C1457267033&os=2409315706%2C1613618627&simid=0%2C0&adpicid=0&lpn=0&ln=1975&fr=&fmq=1512364574941_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=17&oriquery=&objurl=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F03087bf40ad162d9056273f11bdfa9ec8b13cd4b.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bp57ptw5_z%26e3Bv54AzdH3Fwm99l90bm890amb9ba89AzdH3F&gsm=&rpstart=0&rpnum=0",
          },
          {
              name:"风一样的男子的风度",
              number:"4",
              time:"2017-08-11 13:40:25",
              isNew:0,
              imgUlr:"https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=兔子&step_word=&hs=0&pn=9&spn=0&di=3417234530&pi=0&rn=1&tn=baiduimagedetail&is=3924119795%2C827834701&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3440392149%2C1457267033&os=2409315706%2C1613618627&simid=0%2C0&adpicid=0&lpn=0&ln=1975&fr=&fmq=1512364574941_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=17&oriquery=&objurl=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F03087bf40ad162d9056273f11bdfa9ec8b13cd4b.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bp57ptw5_z%26e3Bv54AzdH3Fwm99l90bm890amb9ba89AzdH3F&gsm=&rpstart=0&rpnum=0",
          },
          {
              name:"杀马特系列只志炫头饰",
              number:"5",
              time:"2017-08-11 13:40:25",
              isNew:0,
              imgUlr:"https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=兔子&step_word=&hs=0&pn=9&spn=0&di=3417234530&pi=0&rn=1&tn=baiduimagedetail&is=3924119795%2C827834701&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3440392149%2C1457267033&os=2409315706%2C1613618627&simid=0%2C0&adpicid=0&lpn=0&ln=1975&fr=&fmq=1512364574941_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=17&oriquery=&objurl=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F03087bf40ad162d9056273f11bdfa9ec8b13cd4b.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bp57ptw5_z%26e3Bv54AzdH3Fwm99l90bm890amb9ba89AzdH3F&gsm=&rpstart=0&rpnum=0",
          },
          {
              name:"走过路过不要错估系列旺仔小馒头",
              number:"6",
              time:"2017-08-11 13:40:25",
              isNew:1,
              imgUlr:"https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=兔子&step_word=&hs=0&pn=9&spn=0&di=3417234530&pi=0&rn=1&tn=baiduimagedetail&is=3924119795%2C827834701&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3440392149%2C1457267033&os=2409315706%2C1613618627&simid=0%2C0&adpicid=0&lpn=0&ln=1975&fr=&fmq=1512364574941_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=17&oriquery=&objurl=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F03087bf40ad162d9056273f11bdfa9ec8b13cd4b.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bp57ptw5_z%26e3Bv54AzdH3Fwm99l90bm890amb9ba89AzdH3F&gsm=&rpstart=0&rpnum=0",
          },
          {
              name:"走过路过不要错估系列旺仔小馒头",
              number:"6",
              time:"2017-08-11 13:40:25",
              isNew:1,
              imgUlr:"https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=兔子&step_word=&hs=0&pn=9&spn=0&di=3417234530&pi=0&rn=1&tn=baiduimagedetail&is=3924119795%2C827834701&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3440392149%2C1457267033&os=2409315706%2C1613618627&simid=0%2C0&adpicid=0&lpn=0&ln=1975&fr=&fmq=1512364574941_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=17&oriquery=&objurl=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F03087bf40ad162d9056273f11bdfa9ec8b13cd4b.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bp57ptw5_z%26e3Bv54AzdH3Fwm99l90bm890amb9ba89AzdH3F&gsm=&rpstart=0&rpnum=0",
          },
          {
              name:"走过路过不要错估系列旺仔小馒头",
              number:"6",
              time:"2017-08-11 13:40:25",
              isNew:1,
              imgUlr:"https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=兔子&step_word=&hs=0&pn=9&spn=0&di=3417234530&pi=0&rn=1&tn=baiduimagedetail&is=3924119795%2C827834701&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3440392149%2C1457267033&os=2409315706%2C1613618627&simid=0%2C0&adpicid=0&lpn=0&ln=1975&fr=&fmq=1512364574941_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=17&oriquery=&objurl=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F03087bf40ad162d9056273f11bdfa9ec8b13cd4b.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bp57ptw5_z%26e3Bv54AzdH3Fwm99l90bm890amb9ba89AzdH3F&gsm=&rpstart=0&rpnum=0",
          },
      ]

    };
  },
  methods: {
   
    searchButtonClick() {
      // console.log("key="+this.key);
      this.$router.push("/firstPage/scanOneScan");
      if (this.key == "") {
        this.showHistory = false;
      } else {
        this.showHistory = true;
      }
      
    },
    backOutClick() {
      this.$router.push("/firstPage");
     
    },
    gotoDetailClick(item) {
      console.log("gotoDetailClick"+"-"+item.number+"-"+item.name+"-"+item.isNew+"-"+item.time);
    },
    cleanButtonClick() {
      
      console.log("cleanButtonClick");
    },

    
    btn_delect() {
      this.key = "";
      this.delect_icon_show = false;
      this.$refs.btn_srarch_div_ref.style.backgroundColor = "#cccccc";
    },
    inputChange() {
        // alert("key="+this.key);
      if (this.key == "") {
        this.showHistory = false;
      } else {
        this.showHistory = true;
      }
    },

    

    
  },

  mounted() {
    document.body.appendChild(this.$el);
  },
  destroyed() {
    this.$el.remove();
  },
  components: {naviDiv}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">


#searchText 
  width: 100%;
  background-color #ffffff;
  .navi
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
          color: #999999;
          position absolute
          margin-left 0.15rem
          margin-top 0.15rem
      .rightTextDiv
        position absolute
        background #ffffff 
        margin-left 88%
        height 0.44rem
        width: 12%; 
        .tileIcon:after 
          content '\e64b'
          color #666666
          font-size 0.20rem
          float right 
          margin-top 0.15rem;
          background-color #ffffff
          width 0.3rem
          margin-right 0.09rem
        .noTileIcon:after 
          content '\e64d'
          color #666666
          font-size 0.20rem
          float right 
          margin-top 0.15rem;
          background-color #ffffff
          width 0.3rem
          margin-right 0.09rem
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
  .showSearchResultsDiv 
    background red
    .whiteDiv  
      background red  
      .cellButton
        height 0.475rem
        width 92%
        float left
        line-height 0.475rem
        background-color #ffffff;
        font-size 0.14rem
        text-align left
        margin-left 4%
        border-bottom 1px solid #f2f2f2
  .showHistoryDiv  
    width: 100%;
    background: #888999;
    .titleDiv
      position absolute
      width: 100%;
      height: 0.4rem;
      background: #ffffff;
      border-width 0;
      .redLine  
        position absolute
        width 0.04rem
        height 0.2rem;
        background red;
        margin-left 0.15rem;
        margin-top 0.15rem; 
      .textDiv  
        position absolute
        width 1rem
        height 0.2rem;
        background #ffffff;
        margin-left 0.25rem;
        margin-top 0.15rem;
        .historyTitleSpan 
          font-size 0.14rem
          color #333333
          line-height 0.2rem
      .cleanDiv
        width 1rem
        height 0.2rem;
        background #ffffff;
        float right
        margin-right 0.15rem;
        margin-top 0.15rem;         
        .cleanButton
          font-size 0.14rem
          color #333333
          line-height 0.2rem
          text-align right
  .showAllHistoryDiv
    position fixed
    width 100%
    top 0.84rem
    bottom 0
    overflow scroll
    .whiteDiv
      background-color #ffffff;
      margin-left 1.4%
      margin-right 4%
      width 94.6%

      .cellButton
        height 0.3rem
        width auto
        float left
        line-height 0.3rem
        background-color #ffffff;
        font-size 0.12rem
        text-align center
        border 1px solid #999999
        border-radius 0.03rem
        margin-left 0.1rem
        margin-top 0.06rem
        padding 0 0.05rem 0 0.05rem


  ::-webkit-scrollbar
    width 0px
    height 0



        

</style>
