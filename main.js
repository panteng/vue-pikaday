import Vue from 'vue';
import V_Pikaday from './directives/pikaday';

const App = new Vue({
    el: '#app',
    data: {
        startDate: '',

        endDate: '',
        endDatePikadayOptions: {
            format: 'D/M/YYYY',
            // you can put more pikaday options here, based on your needs
            // `field` and `onSelect` option will be ignored
            // because they are used by v-pikaday directive to initialize Pikaday instance
        },
    },
    directives: {
        'pikaday': V_Pikaday
    },
    mounted: function () {
        const startDateElement = document.querySelector('#this-is-start-date');
        console.log(startDateElement.pikadayInstance);
        // you can access a specific Pikaday instance at the `mounted` stage,
        // by accessing the `pikadayInstance property` of the element
        // that v-pikaday directive is bind with
    }
});
