<script setup lang="ts">
import {
  ArrowLeftEndOnRectangleIcon,
  LockClosedIcon,
  PhoneIcon,
  UserIcon,
  UserPlusIcon,
} from "@heroicons/vue/20/solid";
import Input from "../ui/Input.vue";
import Button from "../ui/Button.vue";
import PasswordInput from "../ui/PasswordInput.vue";
import Divider from "../ui/Divider.vue";
import { useButtonLoader } from "../../composables/useButtonLoader";
import { useRouter } from "vue-router";
import { ref } from "vue";
const { isLoading, setLoading, unsetLoading } = useButtonLoader();

const router = useRouter();

const goToSignin = () => {
  router.push("/auth/signin");
};
const firstName = ref("");
const lastName = ref("");
const phone = ref("");
const password = ref("");
</script>

<template>
  <div class="p-4 space-y-2">
    <h1 class="text-2xl font-bold text-gray-800">
      ایجاد <span class="text-teal-600 font-extrabold"> حساب کاربری </span>
    </h1>
    <Input
      title="نام"
      :icon="UserIcon"
      placeholder="نام خود را وارد کنید"
      v-model="firstName"
    />
    <Input
      title="نام خانوادگی"
      :icon="UserIcon"
      placeholder="نام خانوادگی خود را وارد کنید"
      v-model="lastName"
    />
    <Input
      title="شماره تماس"
      :icon="PhoneIcon"
      placeholder="شماره تماس خود را وارد کنید"
      v-model="phone"
    />
    <PasswordInput
      title="رمز عبور"
      placeholder="رمز عبور را وارد کنید"
      v-model="password"
      :icon="LockClosedIcon"
    />
    <Button
      block
      :icon="UserPlusIcon"
      :loading="isLoading"
      @click="isLoading ? unsetLoading() : setLoading()"
    >
      ایجاد حساب کاربری
    </Button>
    <Divider />

    <Button block tonal :icon="ArrowLeftEndOnRectangleIcon" @click="goToSignin"
      >ورود به حساب کاربری</Button
    >
  </div>
</template>
