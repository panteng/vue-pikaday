# Vue-Pikaday

A custom directive for using [Pikaday](https://github.com/dbushell/Pikaday) in Vue.js apps.

![banner](https://raw.githubusercontent.com/panteng/vue-pikaday/master/banner.jpg)

[Demo](http://panteng.me/demos/vue-pikaday)

## Usage

1. Download this repo and copy file `directives/pikaday.js` into your project.

2. Register Vue-Pikaday as a directive in your `main.js`:

        // main.js
        Vue.directive('pikaday', require('./directives/pikaday'));


3. Vue-Pikaday need an `<input>` element to display time. Add `v-pikaday` directive to this `<input>` and assign a string value to it.

        // template.html
        <input type="text" v-pikaday="defaultDate">
        
        // index.js
        module.exports = {
            template: require('./template.html'),
            data: function () {
                return {
                    defaultDate: ''
                };
            }
        }
        
4. If you want a different format of time, there's a `format` option to do this.

        // template.html
        <input type="text" v-pikaday="defaultDate" format="MMMM Do, YYYY">        

## License

MIT