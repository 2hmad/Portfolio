import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WorksView from "../views/Works.vue";
import WorkPageView from "../views/works/_id.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/works",
      name: "works",
      component: WorksView,
    },
    {
      path: "/works/:id",
      name: "workPage",
      component: WorkPageView,
    },
  ],
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
