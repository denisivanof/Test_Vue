import Vue from "vue";
import Vuex from 'vuex'
import UsersState from "@/store/modules/UsersState";
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        UsersState
    }
})