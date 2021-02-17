const state = {
  urlNme: "img/imgs/WxTop.png",
  hederTop: true, //初始化一个colects数组
  to:{name:null},
  from:{name:null}
};
const getters = {
  renderCollects(state) {
    //承载变化的collects
    return state.urlNme;
  }
};

const actions = {
  headChange(context, item) {
    //触发mutations里面的pushCollects ,传入数据形参item 对应到items
    context.commit("headChange", item);
    // console.log(item)
  }
};

const mutations = {
  headChange(state, items) {
    //如何变化collects,插入items
    state.hederTop=items.amount.hederTop;
    state.urlNme=items.amount.url;
    if(items.amount.to && items.amount.from){
      state.to=items.amount.to
      state.from=items.amount.from
    }
    // console.log("就将计就计1111",items)
  }
};

export default {
  namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
};
