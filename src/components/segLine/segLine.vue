<template>
  <div class="segLine">
    <div class="leftLine"></div>
    <span class="desc">{{ this.desc }}</span>
    <div class="rightLine"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    desc: {
      type: String,
      default: '123'
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.segLine
  display flex
  align-items center
  .leftLine
    flex 1
    height 1px //兼容android
    background -webkit-linear-gradient(left, white, #9D9D9D) 
  .rightLine
    flex 1
    height 1px //兼容android
    background -webkit-linear-gradient(left, #9D9D9D, white)
  .desc
    padding 0 0.1rem
</style>
