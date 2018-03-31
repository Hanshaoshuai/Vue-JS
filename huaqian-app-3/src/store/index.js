import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state={
    phone:'企融直通车',//手机号
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})