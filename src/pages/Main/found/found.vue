<template>
  <div id="found">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
    <div class="title_div">
      <div class="titleTabbar">
        <div v-for="item in this.titleArray" :key="item.title">
          <div v-if="item.selected">
            <div class="tabSelected" @click="toggleTab(item)"><a>{{item.name}}</a></div>
          </div>

          <div v-else>
            <div class="tab" @click="toggleTab(item)"><a>{{item.name}}</a></div>
          </div>
        </div>
       
      </div>
    </div>
    <prince class="vue_class" :is="currentTab" keep-alive></prince>
  </div>
</template>
<script type="text/ecmascript-6">
import Find from './find'
import Contents from './content'
import PublicNumber from './publicNumber'
export default {
  name: 'found',
  components:{
  	Find,
    Contents,
    PublicNumber
  },
  data() {
    return {
      currentTab: "Find",
      titleArray: [
        { title: "Find", selected: true, name: "发现" },
        { title: "Contents", selected: false, name: "内容" },
        { title: "PublicNumber", selected: false, name: "公众号" }
      ]
    };
  },
  created() {},
  methods: {
    toggleTab(tab) {
      for(let i = 0;i<this.titleArray.length;++i){
        let item = this.titleArray[i];
        item.selected=false;
      }
      this.currentTab = tab.title; 
      tab.selected=true; 
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#found
  position absolute
  width 100%
  top  0
  bottom 0
  background-color #f2f2f2
  z-index 11
  
  .title_div
    position fixed
    width 100%
    height 0.48rem
    background-color #ffffff
    .titleTabbar
      width 100%
      height 0.48rem
      background-color #ffffff
      border-bottom 1px solid #f2f2f2
      padding-left  17%
      .tab
        width auto
        background-color #ffffff
        float left
        font-size 0.18rem
        margin-left 6%
        margin-right 6%
        padding-top 0.16rem
        border-bottom 2px solid #ffffff
        // border 1px solid red
        a
          color #999999
      .tabSelected
        width auto
        margin-left 6%
        margin-right 6%
        height 0.3rem
        background-color #ffffff
        float left
        font-size 0.18rem
        padding-top 0.16rem
        border-bottom 2px solid red
        a
         color #e60e32
  .vue_class
    position fixed
    width 100%
    top 0.485rem
    bottom 0
    // height 5rem
          
    
</style>
