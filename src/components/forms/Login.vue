<script setup lang="ts">
import {
  ArrowLeftEndOnRectangleIcon,
  LockClosedIcon,
  UserIcon,
  UserPlusIcon,
} from "@heroicons/vue/20/solid";
import Input from "../ui/Input.vue";
import Button from "../ui/Button.vue";
import PasswordInput from "../ui/PasswordInput.vue";
import Divider from "../ui/Divider.vue";
import { useButtonLoader } from "../../composables/useButtonLoader";
import { useRouter } from "vue-router";
const { isLoading, setLoading, unsetLoading } = useButtonLoader();

const router = useRouter();
const goToSignUp = () => {
  router.push("/auth/signup");
};
</script>

<template>
  <div class="p-4 space-y-2">
    <h1 class="text-2xl font-bold text-gray-800">
      ورود به <span class="text-teal-600 font-extrabold"> پنل کاربری </span>
    </h1>
    <Input
      title="نام کاربری"
      :icon="UserIcon"
      placeholder="نام کاربری خود را وارد کنید"
    />
    <PasswordInput
      title="رمز عبور"
      placeholder="رمز عبور را وارد کنید"
      :icon="LockClosedIcon"
    />
    <Button
      block
      :icon="ArrowLeftEndOnRectangleIcon"
      :loading="isLoading"
      @click="isLoading ? unsetLoading() : setLoading()"
    >
      ورود به حساب
    </Button>
    <Divider />

    <Button block tonal :icon="UserPlusIcon" @click="goToSignUp"
      >ایجاد حساب کاربری</Button
    >
  </div>
</template>
