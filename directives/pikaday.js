import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';

export default {
    bind: (el, binding) => {
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
    },

    unbind: (el) => {
        el.pikadayInstance.destroy();
    }
}