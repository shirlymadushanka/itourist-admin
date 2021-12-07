import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/locations",
    name: "Locations",
    component: () => import("../views/Location.vue"),
  },
  {
    path: "/reports",
    name: "Reports",
    component: () => import("../views/Report.vue"),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Setting.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
