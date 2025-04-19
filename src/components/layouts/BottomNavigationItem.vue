<script setup lang="ts">
import type { FunctionalComponent } from "vue";

type PropsType = {
  path: string;
  icon: FunctionalComponent;
  title: string;
};
defineProps<PropsType>();
</script>
<template>
  <RouterLink
    :to="path"
    class="felx justify-center text-center w-full p-2 rounded-lg text-gray-400  transition-all duration-300"
    active-class="text-teal-600 bg-teal-100 scale-105 ring-2 ring-teal-600"
  >
    <component class="w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 mx-auto" :is="icon"></component>
    <!-- <span>
      {{ title }}
    </span> -->
  </RouterLink>
</template>
