import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { type AppRoute } from "./types";
import MainLayout from "../views/layouts/MainLayout.vue";
import BottomNavigation from "../components/layouts/BottomNavigation.vue";
import AuthLayout from "../views/layouts/AuthLayout.vue";
const routes: AppRoute[] = [
  {
    path: "/",
    name: "home",
    redirect: { name: "login" },
  },
  {
    path: "/auth",
    component: AuthLayout,
    children: [
      {
        path: "signin",
        name: "signin",
        meta: {
          title: "signin",
          layout: "auth",
        },
        components: {
          content: () => import("../views/pages/auth/SignIn.vue"),
        },
      },
      {
        path: "signup",
        name: "signup",
        meta: {
          title: "signup",
          layout: "auth",
        },
        components: {
          content: () => import("../views/pages/auth/SignUp.vue"),
        },
      },
    ],
  },

  {
    path: "/app",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "main",
        meta: {
          title: "main",
          layout: "dashboard",
        },
        components: {
          layout: () => import("../layouts/Dashboard.vue"),
          default: () => import("../views/pages/Main.vue"),
          footer: BottomNavigation,
        },
      },
    ],
  },

  // Catch-all NotFound
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes as RouteRecordRaw[],
});

export default router;
