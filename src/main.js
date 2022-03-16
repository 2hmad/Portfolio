import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueLazyload from "vue-lazyload";
import VueTypedJs from "vue-typed-js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faHome,
  faUserCheck,
  faGraduationCap,
  faLayerGroup,
  faBriefcase,
  faComments,
  faCheckCircle,
  faBan,
  faEnvelope,
  faPhone,
  faThumbtack,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

library.add(
  faCoffee,
  faHome,
  faUserCheck,
  faGraduationCap,
  faLayerGroup,
  faBriefcase,
  faComments,
  faCheckCircle,
  faBan,
  faEnvelope,
  faPhone,
  faThumbtack,
  faChevronLeft
);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router, VueLazyload, VueTypedJs);

app.mount("#app");
