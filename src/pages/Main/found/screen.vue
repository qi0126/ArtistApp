<template>
  <div id="screen">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
    
    <div class="top_div">
      <div class="top_back_div" @click="btn_back">
        <i class="iconfont backIcon" ></i>
      </div>
      <div class="search_div">
        <img src="../../../commons/imgs/search.png" class="searchImg" alt="暂无图片">
        <input class="search" v-model="key" @keyup="input_change" placeholder="输入关键词细化识别结果">
        <i class="iconfont delectIcon" @click="btn_delect" v-show="delect_icon_show"></i>
      </div>
      <div class="btn_srarch_div"  ref="btn_srarch_div_ref" @click="btn_search">搜索</div>
    </div>

    <div class="date_div">
      <div class="date_f">
        <span>~</span>
      </div>
      <div class="date_da_div"> 
        <div class="date_start" @click="btn_date_start">
          <span class="date_start_text1" v-text="dateStart"></span>
        </div>
        <div class="date_end" @click="btn_date_end">
          <span  v-text="dateEnd"></span>
        </div>
      </div>
    </div>


    <mt-datetime-picker  
      ref="datePicker"  
      type="date"  
      :startDate="startDate"  
      :endDate="endDate"  
      v-model="dateValue_start"  
      @confirm="handleConfirm"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日">  
    </mt-datetime-picker>  

     <mt-datetime-picker  
      ref="datePicker2"  
      type="date"  
      :startDate="startDate"  
      :endDate="endDate"  
      v-model="dateValue_end"  
      @confirm="handleConfirm2"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日">  
    </mt-datetime-picker>  

   
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from "vue";
import { DatetimePicker } from "mint-ui";
Vue.component(DatetimePicker.name, DatetimePicker);

export default {
  data() {
    return {
      key: "",
      dateStart: "开始日期",
      dateEnd: "截止日期",
      delect_icon_show: false,
      endDate: new Date(),
      startDate: new Date("2007-01-01"),
      dateValue_start: "",
      dateValue_end: ""
    };
  },
  created() {},
  methods: {
    btn_back() {
      this.$router.push({
        path: "/found"
      });
    },
    btn_search() {},
    input_change() {
      if (this.key.length == 0) {
        this.delect_icon_show = false;
      } else {
        this.delect_icon_show = true;
      }
    },
    btn_delect() {
      this.key = "";
      this.delect_icon_show = false;
    },
    btn_date_start() {
      this.$refs.datePicker.open();
    },
    handleConfirm() {
      if (this.dateValue_start.length != 0) {
        var mon = this.dateValue_start.getMonth() + 1;
        var day = this.dateValue_start.getDate();
        this.dateStart =
          this.dateValue_start.getFullYear() +
          "年" +
          (mon < 10 ? "0" + mon : mon) +
          "月" +
          (day < 10 ? "0" + day : day) +
          "日";
      }else{
          this.dateStart ="2007年1月1日"
      }
    },
    btn_date_end(){
       this.$refs.datePicker2.open();
    },
    handleConfirm2() {
      if (this.dateValue_end.length != 0) {
        var mon = this.dateValue_end.getMonth() + 1;
        var day = this.dateValue_end.getDate();
        this.dateEnd =
          this.dateValue_end.getFullYear() +
          "年" +
          (mon < 10 ? "0" + mon : mon) +
          "月" +
          (day < 10 ? "0" + day : day) +
          "日";
      }else{
          this.dateEnd ="2007年1月1日"
      }
    },
  }
};
</script>
<style>
.mint-datetime-action {
  color: #e60632;
  font-size: 0.14rem;
}
</style>
<style scoped lang="stylus" rel="stylesheet/stylus">
#screen
  .top_div
    position fixed
    padding-top 0rem
    background-color #ffffff
    width 100%
    height 0.48rem
    border-bottom 1px solid #f2f2f2
    .top_back_div
      padding-left 0.15rem
      margin-top 0.17rem
      float left
      .backIcon:after
        font-size 0.18rem
        content '\e63f'
        color #666666
    .search_div
      margin-left 0.2rem
      margin-top 0.11rem
      display inline-block
      width 2.62rem
      height 0.28rem
      background-color #f2f2f2
      // border 1px solid red
      .searchImg
        padding-left 0.1rem
        margin-top 0.06rem
        width 0.16rem
        height 0.16rem
      input
        position fixed
        padding-left 0.09rem
        margin-top 0.015rem
        padding-top 0.01rem
        // border 1px solid red
        width 1.95rem
        height 0.22rem
        font-size 0.14rem
        background-color #f2f2f2
        border 0
      .delectIcon:after
        float right
        padding-right 0.05rem
        padding-top 0.07rem
        content '\e677'
        color #999999
    .btn_srarch_div
      // display flex
      float right
      padding-top 0.18rem
      margin-right 0.15rem
      width auto
      background-color #ffffff
      text-align center
      font-size 0.14rem
      color #333333
  .date_div
    margin-top 0.485rem
    height 0.48rem
    border-bottom 1px solid #f2f2f2
    // border 1px solid red
    // background-color #f2f2f2
    .date_da_div
      .date_start
        margin-top 0.09rem
        display inline-block
        background-color #f2f2f2
        height 0.3rem
        width 41%
        margin-left 0.15rem
        .date_start_text1
          position fixed
          margin-left 0.15rem
          margin-top 0.08rem
          color #999999
          font-size 0.14rem
          // border 1px solid red
      .date_end
        margin-left 0.3rem
        display inline-block
        background-color #f2f2f2
        height 0.3rem
        width 41%
        span
          position fixed
          margin-left 0.15rem
          margin-top 0.08rem
          color #999999
          font-size 0.14rem
  .date_f
    position absolute
    margin-top 0.18rem
    margin-left 48.5%
    span
      // position fixed
      color #999999
      font-size 0.14rem
</style>
