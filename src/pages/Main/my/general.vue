<template>
  <div class="general">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
     
      <div class="Navi">
         <i id="back" class="iconfont anIcon" @click="backOutClick"></i>
         <span class="scanTitle">通用</span>

     </div>
     

  

     <div class="leftTextDiv">
          <span class="leftTextSpan">通知与铃声</span>
          <i id="rightArrows" class="iconfont rightArrowsIcon" @click="rightArrowsButtonClick"></i>
          <span class="leftTextSpan">非WiFi环境下手动加载图片</span>
          <mt-switch class="rightSwitch" v-model="value" @change="switchValueButtonClick(value)"></mt-switch>
          <span class="leftTextSpan">清除缓存</span>
          <span class="rightLabel">125M</span>
     </div>

     
      

  </div>

 
</template>

<script>
import mHeader from "../../../components/tabbar/header";
import { Switch } from 'mint-ui';

export default {
  name: "broadcast",
  components: {
    mHeader
  },
  data() {
    return {
      value:true,

    };
  },
  methods: {
    backOutClick() {
     
      this.$router.push("/my");
    },
     rightArrowsButtonClick() {
       this.$router.push("/my/general/informAndVoice");
       
    },
    switchValueButtonClick(value) {
      this.switchValue = !this.switchValue;
      alert("switchValueButtonClick="+value);
    },
    turn: function(){  
        console.log(this.value)  
    }
  }
};
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">

.general {
  width: 3.75rem;
  margin: 0 auto;
  color: #999999;
  background-color: #ffffff;
  z-index 22
}


.Navi {
  position fixed
  display flex
  align-items center
  z-index 10
  height 0.44rem
  border-bottom 1px solid #cccccc
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

  
.leftTextDiv {
  position fixed
  width: 100%;
  color: #333333;
  background-color: #ffffff;
  padding-top 0
  margin-top 0.44rem
  border-top 0.16rem solid #f2f2f2
  
  
}
.leftTextSpan {
  width: 70%;
  color: #333333;
  background-color: #ffffff;
  margin-left: 0.15rem;
  text-align: left
  float left
  font-size: 0.14rem;
  margin-top 0.26rem;
}

.rightSwitch{
  padding-right 0.15rem
  font-size 0.12rem
  float right 
  margin-top 0.16rem;
  
}
.rightLabel{
  padding-right 0.15rem
  font-size 0.14rem
  float right 
  text-align right 
  margin-top 0.22rem;

}


.anIcon:after {
  padding-left 0.15rem
  content '\e63f'
  color $base-color
}
.rightArrowsIcon:after {
  padding-right 0.15rem
  content '\e640'
  color #cccccc
  font-size 0.12rem
  float right 
  margin-top 0.21rem;
}
</style>