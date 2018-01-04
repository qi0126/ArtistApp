<template>
  <div id="tuiguang">
    <div class="sortMenu">
      <ul class="sortMenu-ul" >
        <li class="item" v-for="item in items" :key="item.id">
          <img :src="item.image" alt="暂无图片" class="img">
          <div v-text="item.address"></div>
          <div v-text="item.price"></div>
        </li>
      </ul>
    </div>
    
    <div>aaa</div>
    
    <mt-swipe :auto="3000" class="lunbo">
      <mt-swipe-item v-for="item in items" :key="item.id" class="list">
        <img :src="item.logourl" alt="暂无图片">
      </mt-swipe-item>
     
    </mt-swipe>
    
    
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  name: "find",

  data() {
    return {
      items: [
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          name: "男道2017夏季新款日系青少年纯棉短袖T恤男枫叶印花复古圆领TEE潮",
          address: "上海",
          price: 100,
          logourl:
            "http://img3.imgtn.bdimg.com/it/u=2226396175,2886745608&fm=200&gp=0.jpg"
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t恤日系棉麻夏装衣服男士青年学生纯色竹节纯棉宽松港风",
          address: "深圳",
          price: 101,
          logourl:
            "http://img4.imgtn.bdimg.com/it/u=2702361005,2757988983&fm=27&gp=0.jpg"
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "男道2017夏季新款日系青少年纯棉短袖T恤男枫叶印花复古圆领TEE潮",
          address: "上海",
          price: 100,
          logourl:
            "http://img1.imgtn.bdimg.com/it/u=2898369670,3367063921&fm=27&gp=0.jpg"
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t恤日系棉麻夏装衣服男士青年学生纯色竹节纯棉宽松港风",
          address: "深圳",
          price: 101,
          logourl:
            "http://img3.imgtn.bdimg.com/it/u=2226396175,2886745608&fm=200&gp=0.jpg"
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          name: "男道2017夏季新款日系青少年纯棉短袖T恤男枫叶印花复古圆领TEE潮",
          address: "上海",
          price: 100,
          logourl:
            "http://img5.imgtn.bdimg.com/it/u=4113602837,3561149152&fm=27&gp=0.jpg"
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t恤日系棉麻夏装衣服男士青年学生纯色竹节纯棉宽松港风",
          address: "深圳",
          price: 101,
          logourl:
            "http://img4.imgtn.bdimg.com/it/u=2528848569,840231679&fm=27&gp=0.jpg"
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "男道2017夏季新款日系青少年纯棉短袖T恤男枫叶印花复古圆领TEE潮",
          address: "上海",
          price: 100,
          logourl:
            "http://img2.imgtn.bdimg.com/it/u=2227196088,2072827140&fm=27&gp=0.jpg"
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色短袖t恤日系棉麻夏装衣服男士青年学生纯色竹节纯棉宽松港风",
          address: "深圳",
          price: 101,
          logourl:
            "http://img5.imgtn.bdimg.com/it/u=2174113107,1391415950&fm=27&gp=0.jpg"
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
#tuiguang {
  .sortMenu {
    width: 100%;
    background-color: #fff;
    overflow-x: scroll;
    -webkit-overflow-x: scroll;
  }

  .sortMenu-ul {
    // min-width: 500px;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
  }

  .sortMenu .item {
    display: inline-block;
    font-size: 22px;
    margin: 0px 0.5rem 0 0.5rem;
    height: 150px;
    // line-height: 40px;
    text-align: center;
    position: relative;
    text-overflow: ellipsis;
    word-break: keep-all;
  }

  .img {
    width: 100px;
    border-radius: 50%;
  }

  .lunbo {
    height: 150px;
    background-color: #aaae79;
    width: 100%;

    .list {
      width: 100%;

      img {
        width: 100%;
        height: 150px;
      }
    }
  }
}
</style>
<style>
.mint-swipe-indicator {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #eee;
  opacity: 1;
  margin: 0 3px;
  border: 1px solid #999;
}
.mint-swipe-indicator.is-active {
  background: #FFFF00;
  opacity: 1;
  /* border: 1px solid #FFFF00; */
}
</style>

