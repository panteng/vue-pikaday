# Vue-Pikaday

A simple yet flexible custom directive for using [Pikaday](https://github.com/dbushell/Pikaday) in Vue.js (v2.x.x) apps.

![banner](https://raw.githubusercontent.com/panteng/vue-pikaday/master/banner.jpg)

## Demo
[Click Here](http://panteng.github.io/vue-pikaday)

## Usage

1. Install via npm:

        npm install vue-pikaday-directive --save

2. Register Vue-Pikaday as a directive in your Vue.js app:

        // this is your main.js file

        import Vue from 'vue';
        import V_Pikaday from 'vue-pikaday-directive';

        const App = new Vue({
            el: '#app',
            data: {
                startDate: '',
                endDate: ''
            },
            directives: {
                'pikaday': V_Pikaday
            }
        });


3. Vue-Pikaday need an `<input>` element to display date. Add `v-model` and `v-pikaday` directive to this `<input>`.

        // this is your index.html file
        ...
        <input id="this-is-start-date" type="text" v-model="startDate" v-pikaday>
        <input id="this-is-end-date" type="text" v-model="endDate" v-pikaday>
        ...

    You may wonder why we need both `v-model` and `v-pikaday` here.
    `v-model` is for data binding.
    `v-pikaday` is just for initializing the Pikaday instance. It DOES NOT do any data binding job.


4. If you need to set some custom options for a specific Pikaday instance (eg. a different format of date), you can do it by binding an options object to `v-pikaday` directive:

        // this is your index.html file
        ...
        <input id="this-is-start-date" type="text" v-model="startDate" v-pikaday>
        <input id="this-is-end-date" type="text" v-model="endDate" v-pikaday="endDatePikadayOptions">
        ...

        // this is your main.js file
        ...
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
            }
        });


5. If you need to access a Pikaday instance, you can do it by:

        // this is your main.js file

        ...
        mounted: function () {
            const startDateElement = document.querySelector('#this-is-start-date');    
            console.log(startDateElement.pikadayInstance);
            // you can access a Pikaday instance at the `mounted` stage of the parent VM,
            // by accessing the `pikadayInstance` property of the element
            // that v-pikaday directive is bind with
        }
        ...


## License

MIT
