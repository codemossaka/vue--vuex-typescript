import Vue from 'vue'
import Vuex from 'vuex'
import counter from "@/vuex/counter";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tab: []
  },
  // mutations: {
  //   add: function (state: any, val: string) {
  //     state.tab.push(val)
  //   }
  // },
  // actions: {
  //
  // }
  modules:{
    counter
  }
})
