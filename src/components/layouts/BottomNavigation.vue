<script setup lang="ts">
import BottomNavigationItem from "./BottomNavigationItem.vue";
// import { HomeIcon } from "@heroicons/vue/24/outline";
import { HomeIcon , UserIcon } from "@heroicons/vue/20/solid";
import { SquaresPlusIcon } from "@heroicons/vue/24/solid";
const bottomNavigation = [
  {
    path: "/app/home",
    icon: HomeIcon,
    title: "خانه",
  },
  
  {
    path: "/app/manage",
    icon: SquaresPlusIcon,
    title: "خانه",
  },
  {
    path: "/app/profile",
    icon: UserIcon,
    title: "حساب من",
  },
];
</script>

<template>
  <div class="w-full flex justify-center fixed bottom-0 p-2">
    <div class="flex gap-6 shadow-2xl rounded-xl py-2 px-4 bg-white">
      <BottomNavigationItem
        v-for="(item, index) in bottomNavigation"
        :key="index"
        :path="item.path"
        :icon="item.icon"
        :title="item.title"
      />
    </div>
  </div>
</template>
