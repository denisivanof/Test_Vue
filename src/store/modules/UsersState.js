import *as axios from "axios";


export default {
    state: {
        users: []
    },
    actions: {
        async getUsers({commit}) {
            const res = await axios.get('http://jsonplaceholder.typicode.com/users')
            const users = res.data
            commit('updateUsers', users)
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        }
    },
    getters: {
        allUsers(state) {
            return state.users
        }
    }
}