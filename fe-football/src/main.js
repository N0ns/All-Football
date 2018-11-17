import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false
import index from './containers/index.vue'
import detail from './containers/detail.vue'
import Vuex from 'vuex'
import "../lib/css/common.css";
Vue.use(Vuex)
// 创建中介
const store = new Vuex.Store({
  // 公告栏，信息表
  state: {
    nav: 0, //频道
    api:''
  },
  // 修改公告栏
  mutations: {
    setAuthor(state, data) {
      state.author = data;
    },
    setApi(state, data) {
      state.api = data;
    },
    setNav(state, data) {
      state.nav = data;
    }
  },
  // 获取公告信息
  getters: {
    // 获取房源的方法
    getInformation: state => {
      // 把所有的房源信息
      return state
    },
    getApi: state => {
      // 把所有的房源信息
      return state.navs
    },
    getNav: state => {
      // 把所有的房源信息
      return state.nav
    },
  },
  // 汇总公告信息
  actions: {
    doneSetApi(context, data) {
      // 触发mutations里面的setAuthor方法
      // 可以在这里触发多个mutations
      context.commit('setApi', data)
    },
    doneSetNav(context, data) {
      context.commit('setNav', data)
    }
  }
})
const routes = [{
    path: '/',
    component: index
  },
  {
    path: '/home',
    component: index
  },
  {
    path: '/match',
    component: index
  },
  {
    path: '/stat',
    component: index
  },
  {
    path: '/detail',
    component: detail
  }

]
const router = new VueRouter({
  routes
})
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')