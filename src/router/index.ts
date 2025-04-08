import {
  createMemoryHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";
import { type AppRoute } from "./types";
import MainLayout from "../views/layouts/MainLayout.vue";
import BottomNavigation from "../components/layouts/BottomNavigation.vue";
const routes: AppRoute[] = [
  {
    path: "/",
    name: "home",
    component: () => MainLayout,
    components: {
      // layout: MainLayout,
      default: () => import("../views/pages/Main.vue"),
      footer: BottomNavigation,
    },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes: routes as RouteRecordRaw[],
});

export default router;
