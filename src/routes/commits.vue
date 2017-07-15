<template>
    <div class="commits">
        <div class="commits__header">
            <router-link class="commits__header-back"
                         to="/">
                &larr; All Repos
            </router-link>
            <div class="commits__header-repo">
                {{ owner }} / {{ repo }}
            </div>
        </div>
        <template v-if="loading">
            Loading commits...
        </template>
        <template v-if="error">
            {{ error }}
        </template>
        <div class="commits__list">
            <commit-item v-for="commit of commits"
                         :commit="commit">
            </commit-item>
        </div>
    </div>
</template>

<script>
const github = require('../github');

module.exports = {

    components: {
        'commit-item': require('../components/commit-item.vue'),
    },

    props: {
        owner: { type: String, required: true },
        repo: { type: String, required: true },
    },

    data() {
        return {
            loading: false,
            error: null,
            commits: [],
        };
    },

    mounted() {
        this.fetchCommits();
    },

    watch: {
        $route: 'fetchCommits',
    },

    methods: {

        async fetchCommits() {
            try {
                const { repo, owner } = this;
                this.loading = true;
                this.error = null;
                this.commits = await github(
                    `/repos/${owner}/${repo}/commits?per_page=100`);
            } catch (err) {
                this.error = err;
                this.commits = [];
            } finally {
                this.loading = false;
            }
        },

    },

};
</script>

<style lang="stylus">
.commits__header
    display flex
    flex-flow row nowrap
    margin-bottom 1em

.commits__header-back
    margin-right .5em
</style>
