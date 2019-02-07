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
                    <button>-</button>
                </li>
            </ul>
            <form class="form" action="">
                <input class="input" type="text" />
                <button>등록</button>
            </form>
        </div>
    </div>
</template>

<script>
import { syntaxHighlight } from './../utils';

export default {
    components: {
    },
    data() {
        
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
        }
    }
}
</script>

<style>

</style>

