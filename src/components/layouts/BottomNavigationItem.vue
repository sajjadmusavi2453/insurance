<script setup lang="ts">
import type { FunctionalComponent } from 'vue';

type PropsType = {
  path: string;
  icon: FunctionalComponent;
  title: string;
};
defineProps<PropsType>();
</script>
<template>
  <RouterLink :to="path" class="felx justify-center text-center w-full">
    <component class="w-6 h-6 mx-auto" :is="icon"></component>
    <span>
      {{ title }}
    </span>
  </RouterLink>
</template>
