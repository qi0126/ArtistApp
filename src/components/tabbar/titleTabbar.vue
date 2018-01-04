<template>
  <div class="mm-tabbar">
    <slot></slot>
  </div>
</template>
<script>
  import mTabbarItem from './tabbar-item';
  export default {
      props: ['value'],
        // computed:{
        //     value(){
        //         return this.$route.matched[0].name
        //     }
        // }
   
  }

</script>
<style lang="less">
  /*导入颜色变量*/
  
  @import "./var.less";
  .mm-tabbar {
    display: flex;
    flex-direction: row;
    position: fixed;
    z-index: 89;
    top: 1.48rem;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height: 50px;
    background: red;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      // background: green;
      transform: scaleY(0.5);
    }
  }

</style>
