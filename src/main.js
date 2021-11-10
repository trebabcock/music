import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlay,
  faStepForward,
  faStepBackward,
  faPause,
  faPlayCircle,
  faPauseCircle,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./registerServiceWorker";

library.add(
  faPlay,
  faStepForward,
  faStepBackward,
  faPause,
  faPlayCircle,
  faPauseCircle,
  faEllipsisV
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
