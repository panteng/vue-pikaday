var Vue = require('vue');
var VueRouter = require('vue-router');

// vue config
Vue.use(VueRouter);
Vue.config.debug = true;

// register directives
Vue.directive('pikaday', require('./directives/pikaday'));

// register views
Vue.component('v-demos', require('./views/demos'));

// app setup
var App = Vue.extend({
    template: require('./template.html'),
    replace: false
});

// router setup
var Router = new VueRouter({
    history: false,
    linkActiveClass: 'active'
});

Router.map({
    '/': {
        component: Vue.component('v-demos')
    }
});

Router.redirect({
    '*': '/'
});

Router.start(App, '#app');