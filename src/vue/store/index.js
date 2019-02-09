import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters'

Vue.use(Vuex);

const state = {
    count: 0,
    owner: {
        name: '',
        age: 20
    },
    users: ['a', 'b', 'c']
}

const store = new Vuex.Store({
    state,
    getters,
    actions: {
        increment({ commit }) {
            commit('increment');
        },
        decrement({ commit }) {
            commit('decrement');
        },
        addUser(context, user) {
            context.commit('addUser', user);
        },
        deleteUser(context, index) {
            context.commit('deleteUser', index);
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        addUser(state, name) {
            state.users.push(name);
        },
        deleteUser(state, index) {
            state.users.splice(index, 1);
        }
    },
});

export default store;