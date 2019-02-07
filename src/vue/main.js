import Vue from 'vue';
import App from './App.vue';
import store from './store';

new Vue({
    store,
    el: '#vue-root',
    render: h => h(App)
});