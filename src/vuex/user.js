import Vue from 'vue'

export const User_Login_Success = 'User_Login_Success' //登录成功
export const User_Login_Out = 'User_Login_Out' //退出登录

export default {
    state: {
        UserLogin: JSON.parse(sessionStorage.getItem('user')) || {},
        UserPhone: '13754319792',
    },
    mutations: {
        [User_Login_Success](state, user) {
            sessionStorage.setItem('user', JSON.stringify(user))
        },
        [User_Login_Out](state) {
            sessionStorage.removeItem('user')
        },
        LoginPhone (state, phone) {
            state.UserPhone = phone
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
}