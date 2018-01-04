<template>
    <div class="order">
        


            <m-tabbar v-model="select">

      

      <m-tabbar-item path="Buy" >
        购物车
      </m-tabbar-item>
      <m-tabbar-item path="Car" >
        采购
      </m-tabbar-item>
      <m-tabbar-item path="Sell" >
        销售
      </m-tabbar-item>
      <m-tabbar-item path="Soldier" >
        下属
      </m-tabbar-item>
      
   
    </m-tabbar>


       
       
      
    </div>
</template>
<script>

import mTabbar from '../../../components/tabbar/titleTabbar'
import mTabbarItem from '../../../components/tabbar/titleTabbar-item'
//  export default {};
export default {
  name: 'Order',
  components:{
  	mTabbar,
    mTabbarItem
  },
  data() {
      return {
        select:"Buy",
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
  z-index 88
#order
  font-size 0.14rem


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
