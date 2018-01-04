<template>
  <div id="content">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>

    <scroller class="main_div"
      :on-refresh="refresh" 
      ref="myscroller">
        <div class="item_div" v-for="(item,index) in items" @click="itemClick(item,index)">

          <div class="item_type1_div" v-if="item.type==0">
            <div class="info">
              <div class="info_text1" v-text="item.name"></div>
              <div class="info_text2" v-text="item.address"></div>
              <div class="info_bottom">
                <div class='info_date' v-text="item.date"></div>
                <div class="info_right">
                  <i class="iconfont shareIcon"  @click="btn_share(item,index)"></i>
                  <span v-text="item.price"></span>
                </div>
              </div>
              
            </div>
             <div class="img">
              <img :src="item.image" alt="暂无图片">
            </div>
          </div>

          <div class="item_type2_div" v-else-if="item.type==1">
            <!-- <div class='palyIcon_div'>
              <img src="../../../commons/imgs/bofang.png" class="newIcon">
            </div> -->
             

            <div class="info_text1" v-text="item.name" @click="btn_into_video(item,index)"></div>
            <div class="img">
              <!-- poster="../../../static/imgs/test1.png" -->
               <!-- <my-video class="myVideo" :sources="item.image"  :options = 'this.video.options'></my-video> -->
               <!-- <my-video class="myVideo" :sources="item.image"  :options = 'this.video.options'></my-video> -->
              <video class="myVideo" controls="controls" :src="item.image" poster="http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg" >

              </video>
               <!-- <Canvas-video :src="item.image"></Canvas-video> -->
             
              <!-- <video-player :options="videoOptions"></video-player> -->
              <!-- <img :src="item.image" alt="暂无图片"> -->
              
              <!-- <video-player  class="myVideo"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"
                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)"
                 @ended="onPlayerEnded($event)"
                 @waiting="onPlayerWaiting($event)"
                 @playing="onPlayerPlaying($event)"
                 @loadeddata="onPlayerLoadeddata($event)"
                 @timeupdate="onPlayerTimeupdate($event)"
                 @canplay="onPlayerCanplay($event)"
                 @canplaythrough="onPlayerCanplaythrough($event)"
 
                 @statechanged="playerStateChanged($event)"
                 @ready="playerReadied">
              </video-player> -->
            </div>

            <div class="info">
              <div class="info_text2" v-text="item.address"></div>
              <div class='info_date' v-text="item.date"></div>
              <div class="info_right">
                <i class="iconfont shareIcon" @click="btn_share(item,index)"></i>
                <span v-text="item.price"></span>
              </div>
            </div>

          </div>
         
        </div>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  data() {
    return {
      playerOptions: {
        // videojs options
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src:
              "http://img-cdn.wanyouxi.com/video/20170601_mdzz_recommend_video.mp4"
          }
        ],
        poster:
          "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg"
      },
      items: [
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          name: "男道2017夏季新款日纯棉宽松港风",
          address: "上海",
          price: 100,
          date: "2017-12-12",
          type: 0
        },
        {
          image:
            "http://img-cdn.wanyouxi.com/video/20170601_mdzz_recommend_video.mp4",
          name: "灰色短袖t恤日系棉麻夏装衣服男纯棉宽松港风的事故发生电风扇东风股份胜多负少个 ",
          address: "深圳",
          price: 101,
          date: "2017-12-1",
          type: 1
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "日系青少年纯棉短袖T恤",
          address: "上海",
          price: 102,
          date: "2017-12-9",
          type: 0
        },
        {
          image:
            "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
          name: "灰色短袖t恤日系棉麻夏装衣服男",
          address: "深圳按时收到积分萨",
          price: 103,
          date: "2017-9-2",
          type: 1
        },
        {
          image:
            "http://img-cdn.wanyouxi.com/video/20170601_mdzz_recommend_video.mp4",
          name: "日系青少年纯棉短袖T恤",
          address: "上海",
          price: 102,
          date: "2017-12-9",
          type: 1
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t恤日系棉麻夏装衣服男",
          address: "深圳按时收到积分萨",
          price: 103,
          date: "2017-9-2",
          type: 0
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "日系青少年纯棉短袖T恤",
          address: "上海",
          price: 102,
          date: "2017-12-9",
          type: 0
        },
        {
          image:
            "http://img-cdn.wanyouxi.com/video/20170601_mdzz_recommend_video.mp4",
          name: "灰色短袖t恤日系棉麻夏装衣服男",
          address: "深圳按时收到积分萨",
          price: 103,
          date: "2017-9-2",
          type: 1
        }
      ]
    };
  },
  methods: {
    refresh(done) {
      setTimeout(() => {
        done();
      }, 300);
    },
    itemClick(item, index) {
      // alert(item.price);
      // this.callNative("video", item.image, data => {
      //   this.photo_img = "data:image/png;base64," + data + "";
      // });
    },
    btn_into_video(item, index) {
      this.$router.push({
        path: "/found/video"
      });
    },
    btn_share(item,share) {
      this.callNative("share", '', data => {
       
      });
    },
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#content
  .main_div
    background-color #ffffff
    .item_div
      margin-left 0.15rem
      margin-right 0.15rem
      .item_type1_div
        height 1.03rem
        border-bottom 1px solid #f2f2f2
        .info
          margin-top 0.13rem
          // border 1px solid red
          display inline-block
          width 55%
          .info_text1
            font-size 0.14rem
            color #333333
            line-height 0.18rem
            height 0.36rem
          .info_text2
            margin-top 0.08rem
            font-size 0.1rem
            color #999999
            line-height 0.18rem
            overflow hidden /* 自动隐藏文字 */
            text-overflow ellipsis /* 文字隐藏后添加省略号 */
            white-space nowrap /* 强制不换行 */
          .info_bottom
            .info_date
              display inline-block
              margin-top 0.02rem
              font-size 0.1rem
              color #999999
            .info_right
              float right
              display inline-block
              margin-top 0.02rem
              .shareIcon:after
                font-size 0.1rem
                padding-left 0.15rem
                content '\e675'
                color #999999
              span
                font-size 0.1rem
                color #999999
        .img
          margin-top 0.12rem
          display inline-block
          float right
          img
            width 1.4rem
            height 0.79rem
      .item_type2_div
        height 2.55rem
        border-bottom 1px solid #f2f2f2
        // .palyIcon_div
        // position fixed
        // margin-top 1.1rem
        // margin-left 42%
        // img
        // width 0.3rem
        // height 0.3rem
        .info_text1
          margin-top 0.15rem
          font-size 0.14rem
          color #333333
          line-height 0.18rem
          overflow hidden /* 自动隐藏文字 */
          text-overflow ellipsis /* 文字隐藏后添加省略号 */
          white-space nowrap /* 强制不换行 */
        .img
          margin-top 0.15rem
          .myVideo
            width 100%
            height 1.85rem
          .myVideo[data-v-4d8263fa]
            width 100%
            height 1.85rem
        .info
          margin-top 0.05rem
          // border 1px solid red
          .info_text2
            display inline-block
            font-size 0.1rem
            color #999999
            line-height 0.18rem
          .info_date
            display inline-block
            margin-left 0.1rem
            font-size 0.1rem
            color #999999
          .info_right
            float right
            display inline-block
            margin-top 0.02rem
            .shareIcon:after
              font-size 0.1rem
              padding-left 0.15rem
              content '\e675'
              color #999999
            span
              font-size 0.1rem
              color #999999
video::-webkit-media-controls-enclosure
  /* 禁用播放器控制栏的样式 */
  // width 95%
  // height 0.2rem
 
  // margin-bottom 0.15rem
  // opacity 0.5
  // display none !important
  // color #333333
</style>
