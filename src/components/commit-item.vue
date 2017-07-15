<template>
    <div class="commit-item">
        <img :src="commit.author.avatar_url"
             class="commit-item__avatar"/>
        <div class="commit-item__details">
            <div class="commit-item__message">
                {{ commit.commit.message }}
            </div>
            <div class="commit-item__date">
                {{ humanDate }}
            </div>
        </div>
        <div class="commit-item__sha">
            {{ shortSha }}
        </div>
    </div>
</template>

<script>
const moment = require('moment');

module.exports = {

    props: {
        commit: { type: Object, required: true },
    },

    computed: {

        shortSha() {
            return this.commit.sha.substring(0, 7);
        },

        humanDate() {
            return moment(this.commit.commit.author.date).fromNow();
        },

    },

};
</script>

<style lang="stylus">
.commit-item
    display flex
    flex-flow row nowrap
    padding .25em 0

.commit-item__avatar
    width 24px
    height 24px
    border-radius 100%
    margin-right .5em

.commit-item__sha
    opacity .5

.commit-item__details
    flex 1
    min-width 0

.commit-item__message
    overflow-x hidden
    white-space nowrap
    text-overflow ellipsis

.commit-item__date
    font-size .85em
    opacity .5
</style>
