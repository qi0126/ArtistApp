<template>
  <div class="SpeciesSearch">
   
    <div class="Navi">
         <i id="back" class="iconfont anIcon" @click="backOutClick"></i>
         <img src="../../../../commons/imgs/xiangji.png" class="searchButton" @click="searchButtonClick">
       
    </div>

    <div class="grayLine"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  methods: {
    backOutClick() {
      alert("backOut");
    },
    cheanHistoryClick() {
      alert("cheanHistory");
    },
    cheanHistoryClick() {
      alert("cheanHistory");
    },

  },
  components: {}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
$base-color = rgb(230, 14, 50);

.SpeciesSearch {
    width: 100%;
    margin: 0 auto;
    padding-bottom: 0.2rem;
    color: #999999;

    .Navi {
        width: 100%;
        height: 0.44rem;
        // background-color: blue;
    }

    #back {
        width: 0.18rem;
        // background-color: red;
        float left;
        display inline-block;
        margin-left 0.10rem;
        margin-top :0.15rem;
    }

    

    .title {
        width: 60%;
        height 0.25rem;
        float left ;
        background-color: red;
        font-size 18px;
        align-content center
        text-align center
        color #333333
        margin-top :0.15rem;
        
    }

    .cleanButton {
        width: 0.25rem;
        height 0.25rem;
        margin-top :0.10rem;
        margin-left 0.10rem;
       
        // background-color: red;
        float left ;
    }

    .grayLine {
        width: 100%
        height 0.02rem;
        background-color: #f2f2f2;
    }
    .searchButton {
        width: 100%
        height 0.30rem;
        background-color: #f2f2f2;
        float left 
    }


}

.searchButton:after {
    content: '\e63f';
    font-size: 0.18rem;
    
}
.anIcon:after {
    content: '\e63f';
    font-size: 0.18rem;
    
}
</style>
