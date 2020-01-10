import Vue from 'vue'
import Vuex from 'vuex'
import getters from './modules/getters'
import mutations  from './modules/mutations'
import state from './modules/state'
import actions from './modules/actions'

Vue.use(Vuex)

const store = new Vuex.Store({
    getters,
    mutations,
    state,
    actions

})

export default store
