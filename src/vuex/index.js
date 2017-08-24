import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

Vue.use(Vuex)
export const User_Login_Success = 'User_Login_Success' //登录成功
export const User_Login_Out = 'User_Login_Out' //退出登录

export default new Vuex.Store({
    state: {
        UserLogin: JSON.parse(sessionStorage.getItem('user')) || {},
        UserPhone: '',
    },
    mutations: {
        [User_Login_Success](state, user) {
            sessionStorage.setItem('user', JSON.stringify(user))
        },
        [User_Login_Out](state) {
            sessionStorage.removeItem('user')
        },
        LoginPhone (state, phone) {
            state.UserPhone = phone;
            sessionStorage.setItem('userphone', JSON.stringify(state.UserPhone))
        }
    },
    actions: {
        [User_Login_Success]({commit}, user) {
            commit(User_Login_Success, user)
        },
        [User_Login_Out]({commit}) {
            commit(User_Login_Out)
        }
    }
})