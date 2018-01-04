      <div class="gray_background" v-show="this.seeOneProDetail" @click="btn_pop_background">
          <div class="detailDiv" v-show="this.seeOneProDetail" @click.stop="doingNothing">
            <div class="proInfoDiv">
              <img  :src="this.currenSelectedItem.proImage" alt="暂无图片" class="detailViewImage">
              <div class="proInfoMessage">
                 <div class="proInfoMessageName" v-text="this.currenSelectedItem.proName" ></div>
                 <div class="proInfoMessageNumber" v-text="this.currenSelectedItem.proNumber"></div>
              </div>
            </div>

            <div class="proAllChooseScroll">
              <div class="proAllChooseDiv" >
                <!-- v-for="it in this.currenSelectedItemForChoose" :key="it.id" -->
                <div class="attributeDiv">
                  <div class="craftDiv">
                    <div class="craftTitle">表面工艺</div>
                    <div class="craftName" v-for="it in this.currenSelectedItemForChoose.craft" :key="it.id">
                      <div v-if="it === currenDetail.craft">
                        <div class="craftNameSelected">{{it}}</div>
                      </div>
                      <div v-else>
                        <div class="craftNameNormal">{{it}}</div>
                      </div>
                    </div>
                  </div>

                </div>

                <div class="specificationDiv">

                </div>

                <div class="weightAndCountDiv">

                </div>

                <div class="sureDiv">

                </div>

              </div>

            </div>
            

            
      

        
          </div>
      </div>

 