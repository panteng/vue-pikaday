import Vue from "vue";
import V_Pikaday from "./directives/pikaday";

const App = new Vue({
  el: "#app",
  data: {
    startDate: "",
    endDate: "",
    endDatePikadayOptions: {
      format: "D/M/YYYY",
      // you can put more pikaday options here based on your needs
      // however `field` and `onSelect` option will be ignored
      // because they are being used by v-pikaday directive to initialize a Pikaday instance
    },
  },
  directives: {
    pikaday: V_Pikaday,
  },
  mounted: function () {
    const startDateElement = document.querySelector("#this-is-start-date");
    console.log(startDateElement.pikadayInstance);
    // you can access a Pikaday instance at the `mounted` stage of the parent VM,
    // by accessing the `pikadayInstance` property of the element that v-pikaday directive is bind with
  },
});
