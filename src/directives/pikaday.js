require('pikaday/css/pikaday.css');

var Pickaday = require('pikaday');

module.exports = {
    twoWay: true,
    params: ['lang', 'format'],
    bind: function () {
        var _this = this;
        var i18n;

        // uncomment this if you need Chinese version
        //i18n = {
        //    previousMonth: '上个月',
        //    nextMonth: '下个月',
        //    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        //    weekdays: ['星期日', '星期一', '星期三', '星期四', '星期五', '星期六'],
        //    weekdaysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
        //};

        // comment this if you need Chinese version
        i18n = {
            previousMonth: 'Last Month',
            nextMonth: 'Next Month',
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        };


        _this.instanse = new Pickaday({
            field: _this.el,
            i18n: i18n,
            format: _this.params.format || 'YYYY-MM-DD',
            onSelect: function () {
                _this.set(this.getMoment().format(_this.params.format || 'YYYY-MM-DD'));
            }
        });
    },
    update: function (val, oldVal) {
        var _this = this;

        _this.el.value = val;
        _this.instanse.setDate(val);
    },
    unbind: function () {
        var _this = this;

        _this.instanse.destory();
    }
};