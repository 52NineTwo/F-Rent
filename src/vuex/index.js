import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        UserPhone: '',
    },
    mutations: {
        LoginPhone (state, phone) {
            state.UserPhone = phone;
            sessionStorage.setItem('userphone', JSON.stringify(state.UserPhone))
        }
    },
})