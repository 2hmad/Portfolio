import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueLazyload from "vue-lazyload";
import { VueTyper } from "vue-typer";
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
import { registerScrollSpy } from "vue3-scroll-spy";

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

registerScrollSpy(app);

app
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("vue-typer", VueTyper);

app.use(router, VueLazyload);

app.mount("#app");
