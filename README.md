# Vue-Pikaday

A custom directive for using Pikaday in Vue.js apps.

![banner](https://raw.githubusercontent.com/panteng/vue-pikaday/master/banner.jpg)

[Demo](http://panteng.me/demos/vue-pikaday)

## Usage

1. Download this repo and copy file `./src/directives/pikaday.js` into your project.

2. Register Vue-Echarts as a directive in your `main.js`:

        // main.js
        Vue.directive('pikaday', require('./directives/pikaday'));  //  your project structure may be different from mine, so feel free to change the path of `pikaday.js`.
       
3. Vue-Pikaday need an `<input>` element to display time and panel.

        // template.html
        <input type="text" placeholder="Pick a date">
        
4. Add `v-pikaday` directive to this `<input>` and assign a string value to it.

        // template.html
        <input type="text" placeholder="Pick a date" v-pikaday="defaultDate">
        
        // index.js
        module.exports = {
            template: require('./template.html'),
            data: function () {
                return {
                    defaultDate: ''
                };
            }
        }
        
5. If you want a different format of time, there's a property to do this.

        // template.html
        <input type="text" placeholder="Pick a date" v-pikaday="defaultDate" format="MMMM Do, YYYY">

## License

MIT