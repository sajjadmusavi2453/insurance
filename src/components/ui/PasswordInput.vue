<script setup lang="ts">
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/20/solid";
import { computed, ref, type FunctionalComponent } from "vue";
// import InputLabel from "./InputLabel.vue";

type PropsType = {
  placeholder?: string;
  icon?: FunctionalComponent;
  modelValue?: string;
  inputClass?: string;
  title?: string;
  desc?: string;
};

const props = defineProps<PropsType>();
const show = ref(false);
const emit = defineEmits(["update:modelValue", "onEnter"]);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
// const reactiveData = ref("");
const haseTitle = computed(() => !!props.title);
</script>

<template>
  <div class="relative w-full focus-within:text-teal-800 text-gray-400">
    <p class="pb-1 font-bold text-sm md:text-base">
      {{ title }}
    </p>
    <div class="relative w-full">
      <input
        :type="show ? 'text' : 'password'"
        v-model="value"
        :placeholder="placeholder"
        :class="`w-full outline-none h-full rounded-lg bg-white pl-8 rtl:pr-8 transition-all py-2 sm:py-3 ring-2 ring-gray-300 focus:ring-2 focus:ring-teal-600`"
        @keypress.enter="$emit('onEnter')"
      />
      <component
        :is="icon"
        class="w-6 h-6 md:w-8 md:h-8 absolute left-1 rtl:right-1 top-1/2 -translate-y-1/2"
      />
      <component
        :is="show ? EyeSlashIcon : EyeIcon"
        @click="show = !show"
        class="w-6 h-6 md:w-8 md:h-8 absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer"
      />
    </div>
    <small class="m-0 text-rose-500 font-bold text-xs md:text-sm"
      >متن ارور</small
    >
  </div>
</template>
