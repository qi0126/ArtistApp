<template>
    <div id="save">
        <div class="bgNoProImage" v-show="this.carDataArray.length == 0">
          <img src="../../../commons/imgs/bgItemImage.png" class="bgImage" alt="暂无图片">
        </div>                
   
        <div class="searchDiv" v-show="this.carDataArray.length > 0">
            <div class="allSpeciseDiv" @click="allSpeciseButtonClick">
                <div class="allSpeciseButton">全部品类</div>
                <i v-if="this.showAllSpesies" class="iconfont upArrowsIcon" ></i>
                <i v-if="!this.showAllSpesies" class="iconfont downArrowsIcon" ></i>
            </div>


            <div class="sortWithTimeDiv" @click="sortWithTimeButtonClick">
                <div class="sortWithTimeText">按加入时间</div>
                 
                <div v-if="this.allGrayArrow==true">
                    <i class="iconfont allGrayIcon" ></i>
                </div>
                <div v-else>
                    <i v-if="this.upRedArrow" class="iconfont upRedIcon" ></i>
                    <i v-if="!this.upRedArrow" class="iconfont downredIcon" ></i>
                </div>
            </div>

            <i v-if="!this.tileShow" class="iconfont tileIcon" @click="listShowCurren"></i>
            <i v-if="this.tileShow" class="iconfont noTileIcon" @click="tileShowCurren"></i>
            <button class="editButton" @click="editButtonClick()">{{this.editButtonText}}</button> 
        </div>

       

        <div class="grayViewDiv" v-show="this.showAllSpesies &&this.carDataArray.length > 0" ref="grayViewRef" @click="allSpeciseButtonClick">
          <div class="whiteViewDiv" @click.stop="doNothing">
            <div class="saveArrowDiv">
               <img src="../../../commons/imgs/xiaojiao.png" class="saveArrow" alt="暂无图片">
            </div>

            <div v-if="this.allSpesiesArray.length<=14">
              <div  class="speciseDiv" ref="speciesRef" >
                <div v-for="item in this.allSpesiesArray" :key="item.id">
                  <div v-if="item.selected">
                    <button class="speciesButtonSelected" @click="speciesButtonClick(item)">{{item.name}}({{item.number}})</button>
                  </div>
                  <div v-else>
                    <button class="speciesButton" @click="speciesButtonClick(item)">{{item.name}}({{item.number}})</button>
                  </div>
                </div>

              </div>
            </div>
            <div v-else-if="this.allSpesiesArray.length>14">
                <div class="speciseScroll">
                  <div class="speciseScrollDiv">
                    <div v-for="item in this.allSpesiesArray" :key="item.id">
                      <div v-if="item.selected">
                        <button class="speciesButtonSelected" @click="speciesButtonClick(item)">{{item.name}}({{item.number}})</button>
                      </div>
                      <div v-else>
                        <button class="speciesButton" @click="speciesButtonClick(item)">{{item.name}}({{item.number}})</button>
                      </div>
                </div>
                  </div>
                </div>
            </div>
          </div>
       </div>


        
        <div v-if="this.showProEditButton==false &&this.carDataArray.length > 0">
          <div class="proDiv">
            <div v-if="this.tileShow">
              <div class="tileShowDiv" v-for="(it ,itIndex) in this.carDataArray" :key="itIndex">
                <save-cell :proItem="it" 
                           :showEditButton="showProEditButton"                   
                           @editThisPro="editThisPro(it)" 
                           @gotoDetail="gotoDetail(it)" 
                           @addInShopCar="addInShopCar(it)">
                </save-cell>
              </div> 
            </div>

            <div v-else>
              <div class="mainDiv" v-for="it in this.carDataArray" :key="it.id">
                <list-cell :proItem="it" 
                           :showEditButton="showProEditButton"                   
                           @editThisPro="editThisPro(it)" 
                           @gotoDetail="gotoDetail(it)" 
                           @addInShopCar="addInShopCar(it)">
                </list-cell>
              </div>             
            </div>
          </div>

        </div>
        
        <div v-else-if="this.showProEditButton==true && this.carDataArray.length > 0">
          <div class="proDivForEdit">
            <div v-if="this.tileShow">
              <div class="tileShowDiv" v-for="(it ,itIndex) in this.carDataArray" :key="itIndex">
                <save-cell :proItem="it" 
                           :showEditButton="showProEditButton"                   
                           @editThisPro="editThisPro(it)" 
                           @gotoDetail="gotoDetail(it)" 
                           @addInShopCar="addInShopCar(it)">
                </save-cell>
              </div> 
            </div>

            <div v-else>
              <div class="mainDiv" v-for="it in this.carDataArray" :key="it.id">
                <list-cell :proItem="it" 
                           :showEditButton="showProEditButton"                   
                           @editThisPro="editThisPro(it)" 
                           @gotoDetail="gotoDetail(it)" 
                           @addInShopCar="addInShopCar(it)">
                </list-cell>
              </div>             
            </div>
          </div>
        </div> 

 

        <div class="sureChooseDiv" v-show="this.showProEditButton==true&&this.carDataArray.length > 0">
          <div class="selected" @click="selectedAllProButtonClick">
            <i class="iconfont selectedIcon" v-if="this.selectedAllPro==true"></i>
            <i class="iconfont noSelectedIcon" v-if="this.selectedAllPro==false"></i>
              全选
          </div>

          <div class="delectedOrSureDiv">
            <div class="delectedButton" @click="delectedButtonClick">
              删除
            </div>
          </div>
        </div>
     
      
       
       

    </div>
</template>
<script type="text/ecmascript-6">

import saveCell from '../../../components/FirstPage/ProductAbout/saveCell'
import listCell from '../../../components/FirstPage/ProductAbout/saveListCell'
import { Switch } from 'mint-ui';

export default {
  name: "save",
  components: {
    saveCell,  
    listCell,
  },
  data() {
    return {
      value:true,
      searchKey:"",
      showProEditButton:false,
      showAllSpesies:false,
      upRedArrow:false,
      allGrayArrow:true,
      tileShow:true,
      editButtonText:"编辑",
      currenEditSave:true,
      selectedAllPro:false,
      allSpesiesArray:[
          {name:"all",number:"1",selected:true,isNew:1},
          {name:"one1",number:"2",selected:false},
          {name:"one2",number:"3",selected:false},
          {name:"one3",number:"4",selected:false,isNew:1},
          {name:"one4",number:"5",selected:false},
          {name:"one5",number:"6",selected:false},
          {name:"one6",number:"7",selected:false},
          {name:"one7",number:"8",selected:false},
          {name:"one5",number:"6",selected:false},
          {name:"one6",number:"7",selected:false},
          {name:"one7",number:"8",selected:false},
          {name:"one5",number:"6",selected:false},
          {name:"one6",number:"7",selected:false},
          {name:"one7",number:"8",selected:false},
          {name:"one7",number:"8",selected:false},
          
          
      ],
      products: [
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          name: "男",
          address: "上海",
          price: 100,
          isNew: 1
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰色",
          address: "深圳",
          price: 101,
          isNew: 1
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "季新款日系",
          address: "上海",
          price: 102,
          isNew: 1
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "港风",
          address: "深圳",
          price: 103
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          name: "男潮",
          address: "上海",
          price: 104
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰风",
          address: "深圳",
          price: 105
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "男潮",
          address: "上海",
          price: 106
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰港风",
          address: "深圳",
          price: 107
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          name: "TEE潮",
          address: "上海",
          price: 108
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "港风",
          address: "深圳",
          price: 101
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i1/TB1ACrrQVXXXXaaXFXXYXGcGpXX_M2.SS2_440x440q70.jpg",
          name: "TEE潮",
          address: "上海",
          price: 100
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰",
          address: "深圳",
          price: 101
        },
        {
          image:
            "http://gw.alicdn.com/bao/uploaded/i4/286003649/TB2cwn8X7onyKJjSZFtXXXNaVXa_!!286003649.jpg_440x440q70.jpg",
          name: "灰",
          address: "深圳",
          price: 101
        }
      ],
      allNoSelectedArray:[],
      forEditProArray:[],
      carDataArray:[],
      oldCarDataArray:[
          {
            proName:"1",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            isSelectedMe:0,
            proDetailArray:[
              {
                shipment_Ring:"圈口1",
                shipment_boresize:"内径1",
                shipment_breadth:"宽1",
                shipment_long:"长1",
                shipment_number:"数量1",
                shipment_printfont:"字印1",
                shipment_pro_weight:"产品重1",
                shipment_weight:"总重1",
                shipment_facewidth:"面宽1",
                shipment_lwh:"长宽高1",
                shipment_height:"高1",
                proSelected:0,
              },
              {
                shipment_Ring:"圈口2",
                shipment_boresize:"内径2",
                shipment_breadth:"宽2",
                shipment_long:"长2",
                shipment_number:"数量2",
                shipment_printfont:"字印2",
                shipment_pro_weight:"产品重2",
                shipment_weight:"总重2",
                shipment_facewidth:"面宽2",
                shipment_lwh:"长宽高2",
                shipment_height:"高2",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口3",
                shipment_boresize:"内径3",
                shipment_breadth:"宽3",
                shipment_long:"长3",
                shipment_number:"数量3",
                shipment_printfont:"字印3",
                shipment_pro_weight:"产品重3",
                shipment_weight:"总重3",
                shipment_facewidth:"面宽3",
                shipment_lwh:"长宽高3",
                shipment_height:"高3",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口4",
                shipment_boresize:"内径4",
                shipment_breadth:"宽4",
                shipment_long:"长4",
                shipment_number:"数量4",
                shipment_printfont:"字印4",
                shipment_pro_weight:"产品重4",
                shipment_weight:"总重4",
                shipment_facewidth:"面宽4",
                shipment_lwh:"长宽高4",
                shipment_height:"高4",
                proSelected:0,
              },
            ],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"2",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            isSelectedMe:0,
            proDetailArray:[
              {
                shipment_Ring:"圈口1",
                shipment_boresize:"内径1",
                shipment_breadth:"宽1",
                shipment_long:"长1",
                shipment_number:"数量1",
                shipment_printfont:"字印1",
                shipment_pro_weight:"产品重1",
                shipment_weight:"总重1",
                shipment_facewidth:"面宽1",
                shipment_lwh:"长宽高1",
                shipment_height:"高1",
                proSelected:0,
              },
              {
                shipment_Ring:"圈口2",
                shipment_boresize:"内径2",
                shipment_breadth:"宽2",
                shipment_long:"长2",
                shipment_number:"数量2",
                shipment_printfont:"字印2",
                shipment_pro_weight:"产品重2",
                shipment_weight:"总重2",
                shipment_facewidth:"面宽2",
                shipment_lwh:"长宽高2",
                shipment_height:"高2",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口3",
                shipment_boresize:"内径3",
                shipment_breadth:"宽3",
                shipment_long:"长3",
                shipment_number:"数量3",
                shipment_printfont:"字印3",
                shipment_pro_weight:"产品重3",
                shipment_weight:"总重3",
                shipment_facewidth:"面宽3",
                shipment_lwh:"长宽高3",
                shipment_height:"高3",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口4",
                shipment_boresize:"内径4",
                shipment_breadth:"宽4",
                shipment_long:"长4",
                shipment_number:"数量4",
                shipment_printfont:"字印4",
                shipment_pro_weight:"产品重4",
                shipment_weight:"总重4",
                shipment_facewidth:"面宽4",
                shipment_lwh:"长宽高4",
                shipment_height:"高4",
                proSelected:0,
              },
            ],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"1",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            isSelectedMe:0,
            proDetailArray:[
              {
                shipment_Ring:"圈口1",
                shipment_boresize:"内径1",
                shipment_breadth:"宽1",
                shipment_long:"长1",
                shipment_number:"数量1",
                shipment_printfont:"字印1",
                shipment_pro_weight:"产品重1",
                shipment_weight:"总重1",
                shipment_facewidth:"面宽1",
                shipment_lwh:"长宽高1",
                shipment_height:"高1",
                proSelected:0,
              },
              {
                shipment_Ring:"圈口2",
                shipment_boresize:"内径2",
                shipment_breadth:"宽2",
                shipment_long:"长2",
                shipment_number:"数量2",
                shipment_printfont:"字印2",
                shipment_pro_weight:"产品重2",
                shipment_weight:"总重2",
                shipment_facewidth:"面宽2",
                shipment_lwh:"长宽高2",
                shipment_height:"高2",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口3",
                shipment_boresize:"内径3",
                shipment_breadth:"宽3",
                shipment_long:"长3",
                shipment_number:"数量3",
                shipment_printfont:"字印3",
                shipment_pro_weight:"产品重3",
                shipment_weight:"总重3",
                shipment_facewidth:"面宽3",
                shipment_lwh:"长宽高3",
                shipment_height:"高3",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口4",
                shipment_boresize:"内径4",
                shipment_breadth:"宽4",
                shipment_long:"长4",
                shipment_number:"数量4",
                shipment_printfont:"字印4",
                shipment_pro_weight:"产品重4",
                shipment_weight:"总重4",
                shipment_facewidth:"面宽4",
                shipment_lwh:"长宽高4",
                shipment_height:"高4",
                proSelected:0,
              },
            ],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"2",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            isSelectedMe:0,
            proDetailArray:[
              {
                shipment_Ring:"圈口1",
                shipment_boresize:"内径1",
                shipment_breadth:"宽1",
                shipment_long:"长1",
                shipment_number:"数量1",
                shipment_printfont:"字印1",
                shipment_pro_weight:"产品重1",
                shipment_weight:"总重1",
                shipment_facewidth:"面宽1",
                shipment_lwh:"长宽高1",
                shipment_height:"高1",
                proSelected:0,
              },
              {
                shipment_Ring:"圈口2",
                shipment_boresize:"内径2",
                shipment_breadth:"宽2",
                shipment_long:"长2",
                shipment_number:"数量2",
                shipment_printfont:"字印2",
                shipment_pro_weight:"产品重2",
                shipment_weight:"总重2",
                shipment_facewidth:"面宽2",
                shipment_lwh:"长宽高2",
                shipment_height:"高2",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口3",
                shipment_boresize:"内径3",
                shipment_breadth:"宽3",
                shipment_long:"长3",
                shipment_number:"数量3",
                shipment_printfont:"字印3",
                shipment_pro_weight:"产品重3",
                shipment_weight:"总重3",
                shipment_facewidth:"面宽3",
                shipment_lwh:"长宽高3",
                shipment_height:"高3",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口4",
                shipment_boresize:"内径4",
                shipment_breadth:"宽4",
                shipment_long:"长4",
                shipment_number:"数量4",
                shipment_printfont:"字印4",
                shipment_pro_weight:"产品重4",
                shipment_weight:"总重4",
                shipment_facewidth:"面宽4",
                shipment_lwh:"长宽高4",
                shipment_height:"高4",
                proSelected:0,
              },
            ],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"1",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            isSelectedMe:0,
            proDetailArray:[
              {
                shipment_Ring:"圈口1",
                shipment_boresize:"内径1",
                shipment_breadth:"宽1",
                shipment_long:"长1",
                shipment_number:"数量1",
                shipment_printfont:"字印1",
                shipment_pro_weight:"产品重1",
                shipment_weight:"总重1",
                shipment_facewidth:"面宽1",
                shipment_lwh:"长宽高1",
                shipment_height:"高1",
                proSelected:0,
              },
              {
                shipment_Ring:"圈口2",
                shipment_boresize:"内径2",
                shipment_breadth:"宽2",
                shipment_long:"长2",
                shipment_number:"数量2",
                shipment_printfont:"字印2",
                shipment_pro_weight:"产品重2",
                shipment_weight:"总重2",
                shipment_facewidth:"面宽2",
                shipment_lwh:"长宽高2",
                shipment_height:"高2",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口3",
                shipment_boresize:"内径3",
                shipment_breadth:"宽3",
                shipment_long:"长3",
                shipment_number:"数量3",
                shipment_printfont:"字印3",
                shipment_pro_weight:"产品重3",
                shipment_weight:"总重3",
                shipment_facewidth:"面宽3",
                shipment_lwh:"长宽高3",
                shipment_height:"高3",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口4",
                shipment_boresize:"内径4",
                shipment_breadth:"宽4",
                shipment_long:"长4",
                shipment_number:"数量4",
                shipment_printfont:"字印4",
                shipment_pro_weight:"产品重4",
                shipment_weight:"总重4",
                shipment_facewidth:"面宽4",
                shipment_lwh:"长宽高4",
                shipment_height:"高4",
                proSelected:0,
              },
            ],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"2",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            isSelectedMe:0,
            proDetailArray:[
              {
                shipment_Ring:"圈口1",
                shipment_boresize:"内径1",
                shipment_breadth:"宽1",
                shipment_long:"长1",
                shipment_number:"数量1",
                shipment_printfont:"字印1",
                shipment_pro_weight:"产品重1",
                shipment_weight:"总重1",
                shipment_facewidth:"面宽1",
                shipment_lwh:"长宽高1",
                shipment_height:"高1",
                proSelected:0,
              },
              {
                shipment_Ring:"圈口2",
                shipment_boresize:"内径2",
                shipment_breadth:"宽2",
                shipment_long:"长2",
                shipment_number:"数量2",
                shipment_printfont:"字印2",
                shipment_pro_weight:"产品重2",
                shipment_weight:"总重2",
                shipment_facewidth:"面宽2",
                shipment_lwh:"长宽高2",
                shipment_height:"高2",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口3",
                shipment_boresize:"内径3",
                shipment_breadth:"宽3",
                shipment_long:"长3",
                shipment_number:"数量3",
                shipment_printfont:"字印3",
                shipment_pro_weight:"产品重3",
                shipment_weight:"总重3",
                shipment_facewidth:"面宽3",
                shipment_lwh:"长宽高3",
                shipment_height:"高3",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口4",
                shipment_boresize:"内径4",
                shipment_breadth:"宽4",
                shipment_long:"长4",
                shipment_number:"数量4",
                shipment_printfont:"字印4",
                shipment_pro_weight:"产品重4",
                shipment_weight:"总重4",
                shipment_facewidth:"面宽4",
                shipment_lwh:"长宽高4",
                shipment_height:"高4",
                proSelected:0,
              },
            ],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },                    
          {
            proName:"3",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            isSelectedMe:0,
            proDetailArray:[],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠4",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            isSelectedMe:0,
            proDetailArray:[],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠5",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            isSelectedMe:0,
            proDetailArray:[],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠6",
            proNumber:"222",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            isSelectedMe:0,
            proDetailArray:[],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠7",
            proNumber:"111",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            isSelectedMe:0,
            proDetailArray:[],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },
          {
            proName:"珠玉花开系列足金耳坠5",
            proNumber:"000934",
            proVNumber:"拉丝，五彩金兔，K金，999",
            proIsNew:1,
            proIsFixWeight:1,
            proSelected:0,
            isSelectedMe:0,
            proDetailArray:[
              {
                shipment_Ring:"圈口1",
                shipment_boresize:"内径1",
                shipment_breadth:"宽1",
                shipment_long:"长1",
                shipment_number:"数量1",
                shipment_printfont:"字印1",
                shipment_pro_weight:"产品重1",
                shipment_weight:"总重1",
                shipment_facewidth:"面宽1",
                shipment_lwh:"长宽高1",
                shipment_height:"高1",
                proSelected:0,
              },
              {
                shipment_Ring:"圈口2",
                shipment_boresize:"内径2",
                shipment_breadth:"宽2",
                shipment_long:"长2",
                shipment_number:"数量2",
                shipment_printfont:"字印2",
                shipment_pro_weight:"产品重2",
                shipment_weight:"总重2",
                shipment_facewidth:"面宽2",
                shipment_lwh:"长宽高2",
                shipment_height:"高2",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口3",
                shipment_boresize:"内径3",
                shipment_breadth:"宽3",
                shipment_long:"长3",
                shipment_number:"数量3",
                shipment_printfont:"字印3",
                shipment_pro_weight:"产品重3",
                shipment_weight:"总重3",
                shipment_facewidth:"面宽3",
                shipment_lwh:"长宽高3",
                shipment_height:"高3",
                proSelected:1,
              },
              {
                shipment_Ring:"圈口4",
                shipment_boresize:"内径4",
                shipment_breadth:"宽4",
                shipment_long:"长4",
                shipment_number:"数量4",
                shipment_printfont:"字印4",
                shipment_pro_weight:"产品重4",
                shipment_weight:"总重4",
                shipment_facewidth:"面宽4",
                shipment_lwh:"长宽高4",
                shipment_height:"高4",
                proSelected:0,
              },
            ],
            proImage:"http://gw.alicdn.com/bao/uploaded/i3/63118522/TB2kS3diOpnpuFjSZFkXXc4ZpXa_!!63118522.jpg_440x440q70.jpg",
          },          
        ],

    };
  },
  computed: {},
  mounted() {
    
  },
  created() {
    this.carDataArray = this.oldCarDataArray;
  },
  methods: {
    backOutClick() {
      this.$router.push("/my/qrcodeShare");
      
    },
    doNothing(){

    },
    getForChooseArray(){
      this.allNoSelectedArray = [];
      for(let i = 0;i<this.carDataArray.length;++i){
          this.allNoSelectedArray.push(false);
      }

    },
    gotoDetail(item){
        alert("gotoDetail"+item.proName);
    },
    addInShopCar(item){
        alert("addInShopCar"+item.proName);
    },

    
    sortWithTimeButtonClick(){
      this.allGrayArrow = false;
      this.upRedArrow = !this.upRedArrow;
      if(this.upRedArrow == true){
        this.carDataArray.sort(function(a,b){
          return a.proNumber-b.proNumber
        });
      }else{
        this.carDataArray.sort(function(a,b){
          return b.proNumber-a.proNumber
        });        
      }
     
      // var objectList = new Array();
      //   function Persion(name,age){
      //       this.name=name;
      //       this.age=age;
      //   }
      //   objectList.push(new Persion('jack',20));
      //   objectList.push(new Persion('tony',25));
      //   objectList.push(new Persion('stone',26));
      //   objectList.push(new Persion('mandy',23));
      //   //按年龄从小到大排序
      //   objectList.sort(function(a,b){
      //       return a.age-b.age});
      //   for(var i=0;i<objectList.length;i++){
      //       console.log('<br />age:'+objectList[i].age+' name:'+objectList[i].name);
      //       }


    },
    selectedAllProButtonClick(){

      this.selectedAllPro=!this.selectedAllPro;
      let item;
      for(let i = 0;i<this.carDataArray.length;++i){
        item = this.carDataArray[i];
        item.isSelectedMe = this.selectedAllPro;
      }


    },
    delectedButtonClick(){
      // var item;
      // for(let i = this.carDataArray.length;i>0;--i){
      //   item = this.carDataArray[i-1];
      //   if(this.carDataArray[i-1].isSelectedMe == 1){
      //     console.log("length = "+this.carDataArray.length);
      //     this.carDataArray.splice(i-1,1);
      //   }
      // } 
      let item;
      for(let i = this.carDataArray.length;i>0;--i){
        item = this.carDataArray[i-1];
        if(item.isSelectedMe == true){
          this.carDataArray.splice(i-1,1);

        }
        
      }
    },
    editButtonClick(){
        if(this.editButtonText === "编辑"){
            this.editButtonText = "完成";
            this.showProEditButton = true;
                      
        }else{
            this.editButtonText = "编辑";
            this.showProEditButton = false;
            var item;
            for(let i = this.carDataArray.length;i>0;--i){
              item = this.carDataArray[i-1];
              this.carDataArray[i-1].isSelectedMe = 0;
            } 
           
        }

    },
    input_change() {
      alert("input_change");
    },
    speciesButtonClick(item) {
        //全部按钮变为黑色
   
        var curren = item;
        for(let i = 0;i<this.allSpesiesArray.length;++i){
            curren = this.allSpesiesArray[i];
            curren.selected = false;

        }
        
        item.selected = true;
      
    },

    allSpeciseButtonClick(){
        this.showAllSpesies = !this.showAllSpesies;
        //计算分类以及分类的数量
        // let aaa = this.getNewAllSpeciseArray();

    },
    getNewAllSpeciseArray(){
      var arr = this.oldCarDataArray;
      var newArr = [];
      for(var i=0;i<arr.length;i++){
        var currenPro=arr[i];
        var temp=currenPro.proName;
        var count=0;
        for(var j=0;j<arr.length;j++){
          var currenProTwo=arr[j];
          if(currenProTwo.proName==temp){
          count++;
          currenProTwo.proName=-1;
          }
        }
        if(temp != -1){
          var dic = new Object();
          let age = count.toString();
          dic.name = temp;
          dic.number = 88;
          dic.selected = false;
          newArr.push(dic);
        }
      }
      console.log("newArray="+newArr[0]);
      return newArr;
    },
    listShowCurren(){
        this.tileShow = true;
    },
    tileShowCurren(){
        this.tileShow = false;
    },
    rightArrowsButtonClick() {
       this.$router.push("/my/general/informAndVoice");
       alert("rightArrowsButtonClick");
    },
    switchValueButtonClick(value) {
      this.switchValue = !this.switchValue;
      alert("switchValueButtonClick="+value);
    },
    itemClick(product) {
      alert(product.price);
      
    },

  }
};
</script>





<style scoped lang="stylus" rel="stylesheet/stylus">
#save
  width 100%
  height 100%
  background-color #ffffff
  ::-webkit-scrollbar
    width 0px
    height 0 
  .bgNoProImage
    position fixed
    background #ffffff
    width 100%
    top 0.44rem
    bottom 0.5rem
    .bgImage 
      height 100%
      width 100%
  .searchDiv 
    position fixed
    width: 100%;
    height 0.41rem
    color: #333333;
    background-color: #ffffff;
    padding-top 0
    z-index 22
    .allSpeciseDiv
      width: 30%;
      height 0.40rem
      background-color: #ffffff;
      padding-top 0
      margin-top 0
      float left
      .allSpeciseButton 
        width: 50%;
        color: #333333;
        background-color: #ffffff;
        margin-left: 0.15rem;
        text-align: left
        float left
        font-size: 0.13rem;
        margin-top 0.18rem;
        border 0
    .sortWithTimeDiv
      width: 40%;
      height 0.40rem
      background-color: #ffffff;
      padding-top 0
      margin-top 0
      float left
      .sortWithTimeText 
        width: 50%;
        color: #333333;
        background-color: #ffffff;
        margin-left: 0.15rem;
        text-align: right 
        float left
        font-size: 0.13rem;
        margin-top 0.18rem;
        border 0
    .editButton
      width: 12%;
      color: #666666;
      background-color: #ffffff;
      margin-right: 0.13rem;
      text-align: right 
      float right 
      font-size: 0.14rem;
      margin-top 0.18rem;
      border 0   
  .grayViewDiv
    position absolute
    width  100%
    height 5.71rem
    margin-top 0.40rem
    background: rgba(0,0,0, 0.5);
    z-index 23
    .whiteViewDiv
      background #ffffff
      .saveArrowDiv
        background #ffffff
        margin-top 0
        height 0.07rem
        width 100%
        .saveArrow
          background #ffffff
          margin-top 0
          width 100%
          height 0.07rem
          float left
      .speciseScroll
          position absolute
          margin-top 0
          width: 100%;
          height 2.88rem;
          color: #333333;
          background-color: #ffffff;
          padding-top 0
          overflow scroll
          z-index 24
          background-color: $scroll-content-bgc
        
          .speciesButtonSelected
            float left 
            width 50%
            height 0.48rem
            font-size 0.14rem
            text-align left 
            background-color #ffffff
            caret-color: red
            border-radius 0
            border-width 0
            margin-bottom 0.5px
            margin-top 0.5px
            border-right 1px solid #f2f2f2
            border-bottom 1px solid #f2f2f2
            color #e60e32
          .speciesButton
            float left 
            width 50%
            height 0.48rem
            font-size 0.14rem
            text-align left 
            background-color #ffffff
            caret-color: red
            border-radius 0
            border-width 0
            margin-bottom 0.5px
            margin-top 0.5px
            border-right 0.5px solid #f2f2f2
            border-bottom 1px solid #f2f2f2
            color #333333          
      .speciseDiv
          position absolute
          margin-top 0
          width: 100%;
          height auto;
          color: #333333;
          background-color: #ffffff;
          padding-top 0
          overflow: hidden
          z-index 24
          background-color: $scroll-content-bgc
          .speciesButtonSelected
            float left 
            width 50%
            height 0.48rem
            font-size 0.14rem
            text-align left 
            background-color #ffffff
            caret-color: red
            border-radius 0
            border-width 0
            margin-bottom 0.5px
            margin-top 0.5px
            border-right 1px solid #f2f2f2
            border-bottom 1px solid #f2f2f2
            color #e60e32
          .speciesButton
            float left 
            width 50%
            height 0.48rem
            font-size 0.14rem
            text-align left 
            background-color #ffffff
            caret-color: red
            border-radius 0
            border-width 0
            margin-bottom 0.5px
            margin-top 0.5px
            border-right 0.5px solid #f2f2f2
            border-bottom 1px solid #f2f2f2
            color #333333
  .sureChooseDiv
    position fixed
    background #ffffff 
    width 100%
    height 0.5rem
    bottom 0.5rem 
    border-top 1px solid #f2f2f2
    .selected
      position absolute
      margin-top 0.175rem
      margin-left 0.15rem
      background #ffffff
      float left
      font-size 0.14rem
      color #333333
      .selectedIcon:after
        content '\e63d'
        color #e60e32  
      .noSelectedIcon:after
        content '\e65b'
        color #999999
    .delectedOrSureDiv
        position absolute
        height 0.5rem
        width 70%
        background #ffffff
        right 0
        font-size 0.14rem
        .delectedButton
          position fixed
          color #ffffff
          background #e60e32
          right 0
          margin-right 0.2rem
          width 0.6rem  
          height 0.3rem
          margin-top 0.1rem
          text-align center
          line-height 0.3rem   
          border-radius 2px      
  .proDiv
    background #ffffff
    position fixed
    width 100%
    top 0.84rem
    bottom 0.5rem
    overflow scroll
    .tileShowDiv
      width 100%,
      background #ffffff
  .proDivForEdit
    background #ffffff
    position fixed
    width 100%
    top 0.84rem
    bottom 1rem
    overflow scroll
    .tileShowDiv
      width 100%,
      background #ffffff






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
.upRedIcon:after {
  
  content '\e673'
  color #e60e32
  font-size 0.12rem
  float left 
  margin-top 0.18rem;
  background-color #ffffff
  width 0.3rem
}

.downRedIcon:after {
  
  content '\e672'
  color #e60e32
  font-size 0.12rem
  float left 
  margin-top 0.18rem;
  background-color #ffffff
  width 0.3rem
}

.allGrayIcon:after {
  
  content '\e671'
  color #999999
  font-size 0.12rem
  float left 
  margin-top 0.18rem;
  background-color #ffffff
  width 0.3rem
}

.tileIcon:after {
  
  content '\e64b'
  color #666666
  font-size 0.20rem
  float left 
  margin-top 0.18rem;
  background-color #ffffff
  width 0.3rem
}
.noTileIcon:after {
  
  content '\e64d'
  color #666666
  font-size 0.20rem
  float left 
  margin-top 0.18rem;
  background-color #ffffff
  width 0.3rem
}

.upArrowsIcon:after {
  
  content '\e645'
  color #999999
  font-size 0.24rem
  float left 
  margin-top 0.12rem;
  background-color #ffffff
  width 0.3rem
}

.downArrowsIcon:after {
  
  content '\e644'
  color #999999
  font-size 0.24rem
  float left 
  margin-top 0.12rem;
  background-color #ffffff
  width 0.3rem
}
</style>