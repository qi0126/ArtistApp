<template>
  <div class="informAndVoice">

    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>

  	<div class="Navi">
      <i id="back" class="iconfont anIcon" @click="backOutClick"></i>
      <span class="scanTitle">通知与铃声</span>
    </div>
     

   <div class="leftTextDiv">
          
      <span class="leftTextSpan">新消息通知</span>
      <mt-switch class="rightSwitch" v-model="this.newMessageNotification" @change="newMessageSwitchValueButtonClick(newMessageNotification)"></mt-switch>
      <span class="leftTextSpan">铃声提醒</span>
      <mt-switch class="rightSwitch" v-model="this.voiceTip" @change="voiceTipSwitchValueButtonClick(voiceTip)"></mt-switch>
      <span class="leftTextSpan">角标提醒</span>
      <mt-switch class="rightSwitch" v-model="this.badgeTip" @change="badgeTipSwitchValueButtonClick(badgeTip)"></mt-switch>
     
          
      
   </div>
  </div>
</template>

<script>
  import mHeader from '../../../components/tabbar/header'
  export default {
    name: 'broadcast',
    components: {
      mHeader
    },
    data() {
    return {
      value:true,
      newMessageNotification:true,
      voiceTip:true,
      badgeTip:true,

    };
  },
    methods:{
      backOutClick() {     
        this.$router.push("/my/general");
      },
      newMessageSwitchValueButtonClick(open) {  
        open = !open;   
        // alert("newMessageSwitchValueButtonClick"+open);
      },
      voiceTipSwitchValueButtonClick(open) {   
        open = !open;   
        // alert("voiceTipSwitchValueButtonClick"+open);
      },
      badgeTipSwitchValueButtonClick(open) {    
        open = !open;  
        // alert("badgeTipSwitchValueButtonClick"+open);
      },
    }
  }
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
.informAndVoice {
  width: 3.75rem;
  margin: 0 auto;
  color: #999999;
  background-color: #ffffff;
  z-index 32
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


.anIcon:after {
  padding-left 0.15rem
  content '\e63f'
  color $base-color
}
</style>