# Vue-Pikaday

A simple custom directive for using [Pikaday](https://github.com/dbushell/Pikaday) in Vue.js apps.

![banner](https://raw.githubusercontent.com/panteng/vue-pikaday/master/banner.jpg)

## Demo
[Click Here](http://panteng.github.io/vue-pikaday)

## Usage

1. Download this repo and copy file `directives/pikaday.js` into your project.

2. Register Vue-Pikaday as a directive in your Vue.js app:

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
        

3. Vue-Pikaday need an `<input>` element to display time. Add `v-model` and `v-pikaday` directive to this `<input>`.

        <input type="text" v-model="date" v-pikaday>

    You may wonder why we need both `v-model` and `v-pikaday` here.
    `v-model` is for data binding.
    `v-pikaday` is just for initializing the Pikaday plugin. It DOES NOT do any data binding job.
        
        
4. If you need some options for Pikaday plugin, add them in `directives/pikaday.js`.

        ...
        el.pikadayInstance = new Pikaday({
            field: el,
            onSelect: () => {
                var event = new Event('input', { bubbles: true });
                el.value = el.pikadayInstance.toString();
                el.dispatchEvent(event);
            },
            // add more Pikaday options below if you need
            // all available options are listed on https://github.com/dbushell/Pikaday
        });
        ...


## License

MIT