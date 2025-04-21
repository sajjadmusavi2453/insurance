<script setup lang="ts">
type PropsType = {
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  tonal?: boolean;
  text?: boolean;
};
const props = defineProps<PropsType>();
</script>

<template>
  <button
    :class="`bg-teal-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-200 hover:bg-teal-700 ${
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
    }`"
  >
    <slot> </slot>
  </button>
</template>
