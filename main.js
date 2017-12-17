import Vue from 'vue';
import V_Pikaday from './directives/pikaday';

const App = new Vue({
    el: '#app',
    data: {
        date: '2017-12-12'
    },
    directives: {
        'pikaday': V_Pikaday
    }
});
