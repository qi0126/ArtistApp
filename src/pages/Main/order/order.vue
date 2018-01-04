<template>
    <div class="order">
          <transition name="batar-changePage">
              <router-view class="batar-childPage"></router-view>
          </transition>


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
          <prince :is="currentTab" keep-alive></prince>
          

        
       
       
      
    </div>
</template>
<script>

import Buy from './buy';
import Car from './car'
import Sell from './sell'
import Save from './save'
import Soldier from './soldier'
import tileCell from '../../../components/FirstPage/ProductAbout/carCell'
//  export default {};
export default {
  name: 'order',
  components:{
  	Car,
    Buy,
    Sell,
    Soldier,
    Save,
    tileCell
  },
  data() {
      return {
        proTtem:{
               proName:"七巧玲珑金系列",
               proNumber:"SCV9527",
               proIsNew:0,
               proIsFix:1,
               proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
              },
        proItemArray:[
               {
               proName:"七巧玲珑金系列111",
               proNumber:"SCV9527",
               proIsNew:1,
               proIsFix:1,
               proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
              },
                             {
               proName:"七巧玲珑金系列222",
               proNumber:"SCV9527",
               proIsNew:1,
               proIsFix:1,
               proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
              },

        ],      
        currentTab:'car',
        titleArray:[
          {title:'car',selected:true,name:"购物车"},
          {title:'buy',selected:false,name:"采购"},
          {title:'sell',selected:false,name:"销售"},
          {title:'soldier',selected:false,name:"下属"},
          {title:'save',selected:false,name:"收藏夹"},
        ],
        carDataArray:[
          {
            proName:"珠玉花开系列足金耳坠1",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠2",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠3",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠4",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠5",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠6",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠7",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠8",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },          
        ],

      }
  },

  methods:{
    toggleTab: function(tab) {
      for(let i = 0;i<this.titleArray.length;++i){
        let item = this.titleArray[i];
        item.selected=false;
      }
      this.currentTab = tab.title; 
      tab.selected=true; 
    },
    aaaaa(a){
      alert("aaaaa----"+a.proName);
    },

        bbbbb(d){
      alert("bbbbb"+d.proName);
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .order
   position fixed
   width 100%
   z-index 11
   .titleTabbar
    width 100%
    height 0.4rem
    background-color #ffffff
    border-bottom 2px solid #f2f2f2
    .tab
      width 15%
      background-color #ffffff
      float left
      font-size 0.18rem
      margin-left 2.5%
      margin-right 2.5%
      text-align center
      padding-top 0.09rem
      border-bottom 2px solid #ffffff
      a
       color #999999
    
    .tabSelected
     width 15%
     margin-left 2.5%
     margin-right 2.5%
     height 0.31rem
     background-color #ffffff
     float left
     font-size 0.18rem
     text-align center
     padding-top 0.09rem 
     border-bottom 2px solid red
     a
       color #e60e32
.aaaaad{
  padding-left 0.8%
}  
   
</style>