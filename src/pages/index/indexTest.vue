<template>
  <div class="index">
    <span>{{ $store.state.test }}</span>
    <button @click="goNative">调用原生</button>
    <img :src="img">

    
  
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data() {
    return {
      select:"tab1",
      img: ""
    };
  },
  methods: {
    goNative() {
      this.callNative("getImg", {}, data => {
        this.img = data;
      });
    },
    getWG() {
      let params = {
        PRS: {
          address: "深圳"
        }
      };
      this.Axios.get("/account/micro/gateway/config", params)
        .then(res => {
          this.$messagebox.alert("网关配置接口调用成功");
        })
        .catch(err => {
          this.extCatch(err, this.getWG);
        });
    }
  },
  created() {
    this.getWG();
  }
};
</script>

<style scoped lang="less">
    
</style>
// <style scoped lang="stylus" rel="stylesheet/stylus">
// .index
//   display flex
//   flex-direction column
//   span
//     font-size 0.5rem
// </style>
