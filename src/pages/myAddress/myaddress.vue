<template>
  <div id="myAddress">
    <transition name="batar-changePage">
      <router-view class="batar-childPage"></router-view>
    </transition>
    <div class='title'>
      <!-- <span @click="btn_save">保存</span> -->
      <i class="iconfont backIcon" @click="btn_back"></i>
      <div class="text">我的地址</div>
    </div>
    <div class="main_div">
      <div class="item_div" v-for="(item, index) in items">
        <div class="contacts_div">
          <span class="contacts_name" v-text="item.name"></span>
          <span class="contacts_phone" v-text="item.phone"></span>
        </div>
        <div class="contactAddress" v-text="item.address">    
        </div>

        <div class="item_bottom">
          <div class="default_div" @click="btn_selec(item,index)">
            <i class="iconfont selectIcon" v-if="item.isdefault"></i>
            <i class="iconfont noSelectIcon" v-else></i>  
          </div>
          <div class="default_text">设为默认地址</div>
          <!-- <span>设为默认地址</span> -->
       
          <div class="head_icon_div">
            <i class="iconfont editIcon" @click="btn_edit(item,index)"></i>
            <i id="editicon" class="iconfont delectIcon" @click="btn_delect(item,index)"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="addButton_div" @click="btn_add">
       <img src="../../commons/imgs/addaddress.png">
    </div>
    
  </div>

</template>

<script type="text/ecmascript-6">
import { MessageBox } from "mint-ui";
import { Toast } from "mint-ui";
import { bus } from "../../commons/utils/bus.js";
export default {
  data() {
    return {
      name: "张三",
      id: "0000",
      key: "",
      dadaBase64: "",
      popupVisible: false,
      items: [
        {
          name: "zhangsan",
          phone: "12345678901",
          address: "上海f省道vsd是的发生大沙发沙发沙发说的法法师打发三等分山东法萨胜多负少",
          isdefault: true
        },
        {
          name: "阿斯蒂芬",
          phone: "5555555555",
          address: "上海sdafafafffffffffffffffffffffffffffff",
          isdefault: false
        },
        {
          name: "谁说的",
          phone: "12222222222",
          address: "上海sdafafafffffffffffffffffffffffffffff",
          isdefault: false
        },
        {
          name: "顺丰到付",
          phone: "666666666666",
          address: "上海sdafafafffffffffffffffffffffffffffff",
          isdefault: false
        },
        {
          name: "zhangsan",
          phone: "12345678901",
          address: "上海sdafafafffffffffffffffffffffffffffff",
          isdefault: true
        },
        {
          name: "阿斯蒂芬",
          phone: "5555555555",
          address: "上海sdafafafffffffffffffffffffffffffffff",
          isdefault: false
        },
        {
          name: "谁说的",
          phone: "12222222222",
          address: "上海sdafafafffffffffffffffffffffffffffff",
          isdefault: false
        },
        {
          name: "顺丰到付",
          phone: "666666666666",
          address: "上海sdafafafffffffffffffffffffffffffffff",
          isdefault: false
        }
      ]
    };
  },
  created() {},
  methods: {
    btn_back() {
      this.$router.push({
        path: "/my/personalData"
      });
    },
    btn_selec(item, index) {
      for (var i = 0; i < this.items.length; i++) {
        if (i == index) {
          this.items[i].isdefault = true;
          //  alert(this.items[index].isdefault);
        } else {
          this.items[i].isdefault = false;
        }
      }
    },
    btn_edit(item, index) {
      this.$router.push({
        path: "/my/personalData/myAddress/editAddress"
      });

      var address_item = JSON.stringify(item); //对象转为字符串
      var lStorage = window.localStorage;
      lStorage.address_item = address_item;
      // alert(index);
      // bus.$emit("address_item",address_item );
    },
    btn_delect(item, index) {
      if (item.isdefault) {

        MessageBox.confirm("该地址为默认地址,确定删除？").then(action => {
          this.items.splice(index, 1);
        });
      } else {
        MessageBox.confirm("确定删除？").then(action => {
          this.items.splice(index, 1);
        });
      }
    },
    btn_add() {
      this.$router.push({
        path: "/my/personalData/myAddress/addAddress"
      });
    }
  }
};
</script>
<style>
.mint-msgbox-cancel {
  width: 50%;
  border-right: 1px solid #ddd;
  font-size: 100%;
}
.mint-msgbox-confirm {
  color: #e60e32;
  font-size: 100%;
}
</style>


<style scoped lang="stylus" rel="stylesheet/stylus">
#myAddress
  position absolute
  width 100%
  height 100%
  top 0px
  background-color #f2f2f2
  z-index 20
  overflow scroll
::-webkit-scrollbar
  width 0px
  height 0
.title
  position fixed
  display flex
  align-items center
  z-index 10
  height 0.48rem
  border-bottom 1px solid #f2f2f2
  background-color #ffffff
  width 100%
  // span
  // position fixed
  // right 0.15rem
  // font-size 0.14rem
  // color #333333
  // height 0.48rem
  // display flex
  // align-items center
  // justify-content center
  .text
    // position fixed
    padding-right 0.15rem
    width 100%
    font-size 0.18rem
    text-align center
  .backIcon:after
    font-size 0.18rem
    padding-left 0.15rem
    content '\e63f'
    color #666666
.main_div
  margin-top 0.585rem
  .item_div
    width 94%
    margin-left 3%
    background-color #ffffff
    border-radius 0.05rem
    // height 1.5rem
    margin-top 3%
    .contacts_div
      margin-left 0.15rem
      padding-top 0.15rem
      .contacts_name
        font-size 0.14rem
        color #333333
      .contacts_phone
        margin-left 0.2rem
        font-size 0.14rem
        color #333333
    .contactAddress
      margin-top 0.12rem
      margin-left 0.15rem
      margin-right 0.15rem
      line-height 0.25rem
      font-size 0.14rem
      color #333333
    .item_bottom
      margin-left 0.15rem
      background-color #ffffff
      width 94%
      height 0.6rem
      // border-bottom 1px solid #f2f2f2
      // border 1px solid red
      .default_div
        margin-top 0.24rem
        display inline-block
        // border 1px solid red
        .selectIcon:after
          font-size 0.15rem
          padding-left 0rem
          content '\e63d'
          color #e60e32
        .noSelectIcon:after
          font-size 0.15rem
          padding-left 0rem
          content '\e65b'
          color #999999
      .default_text
        display inline-block
        padding-left 0.02rem
        font-size 0.14rem
        // border 1px solid red
        color #999999
      .head_icon_div
        margin-right 0.1rem
        margin-top 0.24rem
        display inline-block
        // border 1px solid red
        float right
        .editIcon:after
          font-size 0.2rem
          padding-left 0rem
          content '\e667'
          color #999999
        #editicon
          margin-left 0.15rem
        .delectIcon:after
          font-size 0.2rem
          padding-left 0rem
          content '\e666'
          color #999999
.addButton_div
  position fixed
  right 0.2rem
  bottom 0.2rem
  img
    width 0.5rem
    height 0.5rem
</style>
