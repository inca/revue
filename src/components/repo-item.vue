<template>
    <router-link class="repo-item"
                 :to="{
                     name: 'commits',
                     params: { repo: repo.name, owner: repo.owner.login }
                 }">
        <div class="repo-item__owner">
            {{ repo.owner.login }}
        </div>
        <div class="repo-item__name">
            {{ repo.name }}
        </div>
    </router-link>
</template>

<script>
module.exports = {

    props: {
        repo: { type: Object, required: true },
    },

};
</script>

<style lang="stylus">
.repo-item
    display flex
    flex-flow row nowrap
    padding .25em 0

.repo-item__owner
    color #777

    &::after
        content '/'
        opacity .5
        margin 0 .25em
</style>
