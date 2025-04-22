<script setup lang="ts">
import type { FunctionalComponent } from "vue";
import Loader from "./Loader.vue";

type PropsType = {
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  tonal?: boolean;
  text?: boolean;
  icon?: FunctionalComponent
};
const props = defineProps<PropsType>();
</script>

<template>
  <button
    :class="`flex justify-center gap-2 bg-teal-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-200 hover:bg-teal-700 cursor-pointer ${
      block ? 'w-full' : ''
    }
    ${
      tonal
        ? '!bg-teal-100 !text-teal-600 focus:!ring-teal-600  hover:!text-teal-700'
        : ''
    }
    ${
      text
        ? '!bg-transparent !text-teal-600 focus:!ring-0 hover:!bg-teal-50'
        : ''
    }
      ${loading ? 'opacity-50' : ''}  `"
  >
    <Loader v-if="loading" />
    <component v-else-if="icon" :is="icon" class="w-5 h-5"></component>
    <slot> </slot>
  </button>
</template>
