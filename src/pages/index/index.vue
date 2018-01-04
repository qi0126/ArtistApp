<template>
  <div class="index">
    <m-tabbar v-model="select">
      <m-tabbar-item id='tab1'>
        <img src="../../commons/imgs/4.png" alt="" slot="icon-normal"> 
        <img src="../../commons/imgs/4.png" alt="" slot="icon-active"> 
        首页
      </m-tabbar-item>
      <m-tabbar-item id='tab2'>
        <img src="../../commons/imgs/4.png" alt="" slot="icon-normal"> 
        <img src="../../commons/imgs/4.png" alt="" slot="icon-active"> 
        发现
      </m-tabbar-item>
      <m-tabbar-item id='tab3'>
        <img src="../../commons/imgs/4.png" alt="" slot="icon-normal"> 
        <img src="../../commons/imgs/4.png" alt="" slot="icon-active"> 
        订单
      </m-tabbar-item>
      <m-tabbar-item id='tab4'>
        <img src="../../commons/imgs/4.png" alt="" slot="icon-normal"> 
        <img src="../../commons/imgs/4.png" alt="" slot="icon-active"> 
        我的
      </m-tabbar-item>
   
    </m-tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
  import mTabbar from '../../components/tabbar/tabbar'
  import mTabbarItem from '../../components/tabbar/tabbar-item'
export default {
  name: 'index',
    components: {
      mTabbar,
      mTabbarItem
    },
  data() {
    return {
      select:"tab1"
    };
  },
  
};
</script>

<style scoped lang="less">
    
