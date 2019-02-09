<template>
    <div class="wrapper">
        <h1>Vue</h1>
        <pre v-html="syntaxHighlight($store.getters.all)"></pre>
        <div class="content">
            <div>
                <span>{{ $store.getters.count }}</span>
                <button @click="increment">증가</button>
                <button @click="decrement">감소</button>
            </div>
            <ul>
                <li v-for="(user, index) of $store.getters.users" v-bind:key="index">
                    <span>{{ user }}</span>
                    <button @click="deleteUser(i)">-</button>
                </li>
            </ul>
            <form class="form" @submit.prevent="addUser">
                <input class="input" type="text" v-model="$data.user"/>
                <button type="submit">등록</button>
            </form>
        </div>
    </div>
</template>

<script>
import { syntaxHighlight } from './../utils';

export default {
    data() {
        return {
            user: ''
        }
    },
    created() {
        console.log('루트 뷰', this);
    },
    methods: {
        syntaxHighlight(json) {
            return syntaxHighlight(json)
        },
        increment() {
            this.$store.commit('increment');
        },
        decrement() {
            this.$store.commit('decrement');
        },
        addUser() {
            this.$store.commit('addUser', this.$data.user);
            this.$data.user = '';
        },
        deleteUser(index) {
            this.$store.commit('deleteUser', index);
        }
    }
}
</script>

<style>

</style>

