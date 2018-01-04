<template>
  <div class="general">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
     
      <div class="Navi">
         <i id="back" class="iconfont anIcon" @click="backOutClick"></i>
         <span class="scanTitle">填写客d户信息</span>
         <button class="cleanButton" @click="cleanButtonClick">确定</button>
         <i id="back" class="iconfont shareIcon" @click="shareClick"></i>

     </div>

  
     

     


     


     
      

  </div>

 
</template>

<script>
import mHeader from "../../../components/tabbar/header";
import { Switch } from "mint-ui";

export default {
  name: "broadcast",
  components: {
    mHeader
  },
  data() {
    return {
      value: true,
      qrcodeValue: "https://fir.im/shangzhenpincc",
      productMessage:"123456我的产品信息",
      userMessage:"123456我的客户信息",
    };
  },
  mounted() {
    this._getQart();
  },

  methods: {
    backOutClick() {
      alert("backOut");
    },
    shareClick() {
      alert("shareClick");
    },
    cleanButtonClick() {
      alert("cleanButtonClick");
    },
    sureButtonClick() {
      alert("sureButtonClick");
    },
    rightArrowsButtonClick() {
      this.$router.push("/my/qrcodeShare/addProductMessage");
      alert("rightArrowsButtonClick" + this.qrcodeValue);
    },
    switchValueButtonClick(value) {
      this.switchValue = !this.switchValue;
      alert("switchValueButtonClick=" + value);
    },
    _getQart: function() {
      require("./qrcode.js");
      var qrcode = new QRCode(document.getElementById("qrcode"), {
        width: 200, //设置宽高
        height: 200
      });
      //     document.getElementById("getval").onkeyup =function(){
      //     qrcode.makeCode(document.getElementById("getval").value);
      // };
      var str = "东南西北的点点滴滴jjjjj";
      var out, i, len, c;
      out = "";
      len = str.length;
      for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if (c >= 0x0001 && c <= 0x007f) {
          out += str.charAt(i);
        } else if (c > 0x07ff) {
          out += String.fromCharCode(0xe0 | ((c >> 12) & 0x0f));
          out += String.fromCharCode(0x80 | ((c >> 6) & 0x3f));
          out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
        } else {
          out += String.fromCharCode(0xc0 | ((c >> 6) & 0x1f));
          out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
        }
      }
      qrcode.makeCode(str);
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
  z-index: 22;
}

.Navi {
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 10;
  height: 0.44rem;
  border-bottom: 1px solid #f2f2f2;
  background-color: #ffffff;
  width: 100%;
}

.scanTitle {
  padding-right: 0.15rem;
  width: 100%;
  font-size: 0.18rem;
  text-align: center;
  color: #333333;
}

#qrcode {
  position: fixed;
  width: 200px;
  height: 200px;
  color: #333333;
  background-color: #ffffff;
  padding-top: 0;
  margin-top: 0.89rem;
  margin-left: 23.5%;
}

.qrcodeTipSpan {
  width: 100%;
  color: #999999;
  background-color: #ffffff;
  margin-left: 0;
  text-align: center;
  float: left;
  font-size: 0.12rem;
  margin-top: 2.89rem;
}

.productDiv {
  margin-top: 0.62rem;
  width 100%
  height 0.38rem
  // padding-left 0.15rem
  float: left;
  border-bottom: 1px solid #f2f2f2;
}

.productMessageLabel {
  padding-left: 0.15rem;
  font-size: 0.13rem;
  float: left;
  text-align: left;
  width 20%
  
}
.productNameLabel {
  font-size: 0.13rem;
  float: left;
  text-align: right ;
  width 65%
  
}

.userDiv {
  margin-top: 0.24rem;
  width 100%
  height 0.40rem
  // padding-left 0.15rem
  float: left;
  
}

.cleanButton {
  padding-right: 0.15rem;
  // padding-top: 0.13rem;
  content: '\e664';
  color: #666666;
}
.sureButton {
  width: 50%;
  height: 0.5rem;
  background-color: #e60e32;
  float: right;
  font-size: 18px;
  color: #ffffff;
  position absolute;
  bottom 0;
  right  0;
  border 0
}



.anIcon:after {
  padding-left: 0.15rem;
  content: '\e63f';
  color: $base-color;
}

.shareIcon:after {
  padding-right: 0.15rem;
  // padding-top: 0.13rem;
  content: '\e664';
  color: #666666;
}



.rightArrowsIcon:after {
  padding-right 0.15rem
  content '\e640'
  color #cccccc
  font-size 0.13rem
  float right 
  // margin-top 0.21rem;
}
</style>