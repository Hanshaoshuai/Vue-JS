import Vue from "vue";
import Vuex from "vuex";
import footerStatus from "./modules/footerStatus";
import collection from "./modules/collection";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   lists: [7, 8, 9]
  // },
  // actions: {
  //   //	increment (context) {
  //   //    	context.commit('increment')
  //   // 	},
  //   increment({ commit }, payload) {
  //     console.log("000000===", payload);
  //     commit("increments", payload);
  //   },
  //   async actionA({ commit }, payload) {
  //     console.log("async===", payload);
  //     setTimeout(() => {
  //       commit("increments", payload);
  //     }, 2000);
  //   }
  // },
  // mutations: {
  //   increments(state, payload) {
  //     console.log("11111111===", payload);
  //     state.lists.push(payload.amount);
  //   }
  // },
  modules: {
    footerStatus,
    collection
  }
});
