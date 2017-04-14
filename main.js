(function () {
    'use strict';
    
    var Vue = require('vue');

    // vue config
    Vue.config.debug = true;

    // register directives
    Vue.directive('pikaday', require('./directives/pikaday'));

    // app setup
    var App = new Vue({
        el: '#app',
        data: {
            defaultDate: '',
            chineseDate: '',
            differentFormatDate: ''
        }
    });
   
})();