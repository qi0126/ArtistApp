<template>
  <div id="app">
    <router-view/>


    <m-tabbar v-model="select">
      <m-tabbar-item path="FirstPage" >
        <i class="iconfont firstPageNorIcon" slot="icon-normal"></i>
         <i class="iconfont firstPageSelIcon" slot="icon-active"></i>
        首页
      </m-tabbar-item>
      <m-tabbar-item path="Found" >     
         <i class="iconfont foundNorIcon" slot="icon-normal"></i>
         <i class="iconfont foundSelIcon" slot="icon-active"></i>     
        发现
      </m-tabbar-item>
      <m-tabbar-item path="Order" >   
         <i class="iconfont orderNorIcon" slot="icon-normal"></i>
         <i class="iconfont orderSelIcon" slot="icon-active"></i>
        订单
      </m-tabbar-item>
      <m-tabbar-item path="My" >     
         <i class="iconfont myNorIcon" slot="icon-normal"></i>
         <i class="iconfont mySelIcon" slot="icon-active"></i>
        我的
      </m-tabbar-item> 
    </m-tabbar>


  </div>
</template>

<script>
import mTabbar from './components/tabbar/tabbar'
import mTabbarItem from './components/tabbar/tabbar-item'
//  export default {};
export default {
  name: 'app',
  components:{
  	mTabbar,
    mTabbarItem
  },
  data() {
      return {
        select:"FirstPage",
        msg: 'Welcome to Your Vue.js App',
        transitionName: 'slide-right'
      }
    }
}
  
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
*
  -webkit-touch-callout none
  -webkit-user-select none
  -khtml-user-select none
  -moz-user-select none
  -ms-user-select none
  user-select none
#app
  font-size 0.14rem
  z-index 8


.firstPageNorIcon:after {
  content: '\e65c';
  font-size: 0.20rem; 
}
.firstPageSelIcon:after {
  content: '\e65f';
  font-size: 0.20rem; 
  color red;
}
.foundNorIcon:after {
  content: '\e652';
  font-size: 0.20rem; 
}
.foundSelIcon:after {
  content: '\e653';
  font-size: 0.20rem; 
  color red;
}
.orderNorIcon:after {
  content: '\e661';
  font-size: 0.20rem; 
}
.orderSelIcon:after {
  content: '\e654';
  font-size: 0.20rem; 
  color red;
}
.myNorIcon:after {
  content: '\e65e';
  font-size: 0.20rem; 
}
.mySelIcon:after {
  content: '\e665';
  font-size: 0.20rem; 
  color red;
}
</style>
