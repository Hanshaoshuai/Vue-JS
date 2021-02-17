const state = {
  //要设置的全局访问的state对象
  lists: [7, 8, 9]
  //要设置的初始属性值
};
const getters = {
  //实时监听state值的变化(最新状态)
  isShow(state) {
    //承载变化的lists的值
    return state.lists;
  }
};
const actions = {
  //	increment (context) {
  //    	context.commit('increment')
  // 	},
  increment({ commit }, payload) {
    console.log("000000===", payload);
    commit("increments", payload);
  },
  async actionA({ commit }, payload) {
    console.log("async===", payload);
    setTimeout(() => {
      commit("increments", payload);
    }, 2000);
  }
};
const mutations = {
  increments(state, payload) {
    console.log("11111111===", payload);
    state.lists.push(payload.amount);
  }
};

export default {
  namespaced: true, //用于在全局引用此文里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
};
