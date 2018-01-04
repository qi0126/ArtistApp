import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 状态对象
const state = {
  test: 'Hello Artist【APP】'
}

// 计算属性
const getters = {}

// 事件处理（同步）
const mutations = {}

// 事件处理（异步）
const actions = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
