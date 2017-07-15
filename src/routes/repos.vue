<template>
    <div class="repos">
        <div class="loading" v-if="loading">Loading repos...</div>
        <div class="error" v-if="error">{{ error }}</div>
        <div class="repos__list">
            <repo-item v-for="repo of repos"
                       :repo="repo">
            </repo-item>
        </div>
    </div>
</template>

<script>
const githubFetch = require('../github');

module.exports = {

    components: {
        'repo-item': require('../components/repo-item.vue'),
    },

    props: ['user'],

    data() {
        return {
            loading: false,
            error: null,
            repos: [],
        };
    },

    mounted() {
        this.fetchRepos();
    },

    methods: {

        async fetchRepos() {
            try {
                this.error = null;
                this.loading = true;
                this.repos = await githubFetch('/user/repos?per_page=100');
            } catch (err) {
                this.error = err;
            } finally {
                this.loading = false;
            }
        },

    },

};
</script>
