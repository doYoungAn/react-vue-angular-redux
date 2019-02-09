import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        owner: {
            name: '',
            age: 20
        },
        users: ['a', 'b', 'c']
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
    getters: {
        all: (state) => {
            return state;
        },
        count: state => {
            return state.count;
        },
        owner: state => {
            return state.owner;
        },
        users: state => {
            return state.users;
        }
    }
});

export default store;