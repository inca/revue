'use strict';

const VueRouter = require('vue-router');

module.exports = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '',
            component: require('./routes/layout.vue'),
            children: [
                {
                    path: '/',
                    component: require('./routes/repos.vue'),
                },
                {
                    name: 'commits',
                    path: '/:owner/:repo',
                    component: require('./routes/commits.vue'),
                    props: true,
                },
            ],
        },
    ],
});
