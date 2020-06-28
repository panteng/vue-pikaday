import Pikaday from "pikaday";
import "pikaday/css/pikaday.css";

export default {
  bind: (el, binding) => {
    const instanceOptions = binding.value || {};

    // override `field` and `onSelect` option
    instanceOptions.field = el;
    instanceOptions.onSelect = function () {
      el.value = this.toString();
      el.dispatchEvent(new Event("input", { bubbles: true }));
    };

    el.pikadayInstance = new Pikaday(instanceOptions);
  },

  unbind: (el) => {
    el.pikadayInstance.destroy();
  },
};
