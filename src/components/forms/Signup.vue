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
import { z } from "zod";
import { useValidation } from "../../composables/useValidation";
import { useWatcher } from "../../composables/useWatchValidation";
const { isLoading, setLoading, unsetLoading } = useButtonLoader();
import { errorMessages } from "../../scripts/errorMessages";
import { regexPatterns } from "../../scripts/regexPatterns";
const router = useRouter();

const goToSignin = () => {
  router.push("/auth/signin");
};
const form = ref({
  firstName: "",
  lastName: "",
  phone: "",
  password: "",
});

const zodSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: errorMessages.minLength(2) })
    .max(20, { message: errorMessages.maxLength(30) }),
  lastName: z
    .string()
    .min(2, { message: errorMessages.minLength(2) })
    .max(20, { message: errorMessages.maxLength(20) }),
  phone: z
    .string()
    .regex(regexPatterns.phone, { message: errorMessages.phone }),
  password: z.string().min(6, { message: errorMessages.minLength(6) }),
});
const { success, errors, validate } = useValidation(zodSchema);

useWatcher(form, () => validate(form.value));

function signup() {
  setLoading();
  validate(form.value);
  if (!success.value) {
    unsetLoading();
    return;
  }
}
</script>

<template>
  <div class="p-4 space-y-4">
    <h1 class="text-2xl font-bold text-gray-800">
      ایجاد <span class="text-teal-600 font-extrabold"> حساب کاربری </span>
    </h1>
    <Input
      title="نام"
      :icon="UserIcon"
      placeholder="نام خود را وارد کنید"
      v-model="form.firstName"
      :error="errors?.firstName?._errors[0]"
    />
    <Input
      title="نام خانوادگی"
      :icon="UserIcon"
      placeholder="نام خانوادگی خود را وارد کنید"
      v-model="form.lastName"
      :error="errors?.lastName?._errors[0]"
    />
    <Input
      title="شماره تماس"
      :icon="PhoneIcon"
      placeholder="شماره تماس خود را وارد کنید"
      v-model="form.phone"
      :error="errors?.phone?._errors[0]"
    />
    <PasswordInput
      title="رمز عبور"
      placeholder="رمز عبور را وارد کنید"
      v-model="form.password"
      :icon="LockClosedIcon"
      :error="errors?.password?._errors[0]"
    />
    <Button
      class="mt-8 md:mt-12"
      block
      :icon="UserPlusIcon"
      :loading="isLoading"
      @click="signup"
    >
      ایجاد حساب کاربری
    </Button>
    <Divider />

    <Button block tonal :icon="ArrowLeftEndOnRectangleIcon" @click="goToSignin"
      >ورود به حساب کاربری</Button
    >
  </div>
</template>
