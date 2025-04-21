<script setup lang="ts">
import { LockClosedIcon, UserIcon } from "@heroicons/vue/20/solid";
import Input from "../ui/Input.vue";
import Button from "../ui/Button.vue";
import { ref } from "vue";
import PasswordInput from "../ui/PasswordInput.vue";
const a = ref("");
</script>

<template>
  <div class="p-4 space-y-4">
    <h1 class="text-2xl font-bold text-gray-800">
      ورود به <span class="text-teal-600 font-extrabold"> پنل کاربری </span>
    </h1>
    <Input  :icon="UserIcon" />
    <PasswordInput  :icon="LockClosedIcon" v-model="a" />
    <Button block >
        ورود به حساب
    </Button>
    <Button block tonal >
        ورود به حساب
    </Button>
    <Button block text >
        ورود به حساب
    </Button>
  </div>
</template>
