<script setup lang="ts">
import BottomNavigationItem from "./BottomNavigationItem.vue";
import { HomeIcon } from "@heroicons/vue/24/outline";
const bottomNavigation = [
  {
    path: "/",
    icon: HomeIcon,
    title: "خانه",
  },
  {
    path: "/",
    icon: HomeIcon,
    title: "خانه",
  },
  {
    path: "/",
    icon: HomeIcon,
    title: "خانه",
  },
  {
    path: "/",
    icon: HomeIcon,
    title: "خانه",
  },
];
</script>

<template>
  <div
    class="w-full fixed bottom-0 flex gap-4 shadow-2xl p-2"
  >
    <BottomNavigationItem
      v-for="(item, index) in bottomNavigation"
      :key="index"
      :path="item.path"
      :icon="item.icon"
      :title="item.title"
    />
  </div>
</template>
