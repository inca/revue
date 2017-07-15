<template>
    <div class="layout">
        <div class="loading" v-if="loading">Loading...</div>
        <div class="error" v-if="error">{{ error }}</div>
        <div class="layout__main"
             v-if="user">
            <div class="layout__header">
                <h2 class="layout__username">Hey, {{ user.login}}!</h2>
                <img class="layout__avatar"
                     :src="user.avatar_url" />
            </div>
            <div class="layout__body">
                <router-view :user="user">
                </router-view>
            </div>
        </div>
    </div>
</template>

<script>
const githubFetch = require('../github');

module.exports = {

    data() {
        return {
            loading: false,
            user: null,
        };
    },

    mounted() {
        this.authenticate();
    },

    methods: {

        async authenticate() {
            try {
                this.loading = true;
                this.user = await githubFetch({
                    url: '/user',
                    token: '',
                });
            } catch (err) {
                this.user = null;
                this.error = err;
            } finally {
                this.loading = false;
            }
        },

    },

};
</script>

<style lang="stylus">
@import 'stylesheets/index'

.layout
    display flex
    flex-flow column nowrap
    align-items center

    padding 2em

.layout__main
    width 400px
    background #fff
    border-radius 2px
    box-shadow 0 1px 3px rgba(0,0,0,.25)

.layout__header
    display flex
    flex-flow row nowrap
    align-items center
    justify-content space-between
    padding 0 1em
    border-bottom 1px solid #eee

.layout__body
    padding .5em 1em

.layout__avatar
    width 32px
    height 32px
    border-radius 100%
</style>
