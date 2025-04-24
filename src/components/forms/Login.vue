<script setup lang="ts">
import {
  ArrowLeftEndOnRectangleIcon,
  LockClosedIcon,
  PhoneIcon,
  UserPlusIcon,
} from "@heroicons/vue/20/solid";
import Input from "../ui/Input.vue";
import Button from "../ui/Button.vue";
import PasswordInput from "../ui/PasswordInput.vue";
import Divider from "../ui/Divider.vue";
import { useButtonLoader } from "../../composables/useButtonLoader";
import { useRouter } from "vue-router";
import { useValidation } from "../../composables/useValidation";
import { ref, watch } from "vue";
import { z } from "zod";
import { useWatcher } from "../../composables/useWatchValidation";
import { regexPatterns } from "../../scripts/regexPatterns";
import { errorMessages } from "../../scripts/errorMessages";
const { isLoading, setLoading, unsetLoading } = useButtonLoader();

const router = useRouter();
const goToSignUp = () => {
  router.push("/auth/signup");
};

const form = ref({
  phone: "",
  password: "",
});
const schema = z.object({
  phone: z
    .string()
    .regex(regexPatterns.phone, { message: errorMessages.phone }),
  password: z.string().min(6, { message: errorMessages.minLength(6) }),
});
const { errors, success, validData, validate } = useValidation(schema);

function login() {
  validate(form.value);
  if (!validData.value) return;
  console.log(form.value);
}
useWatcher(form, () => validate(form.value));
</script>

<template>
  <div class="p-4 space-y-4">
    <h1 class="text-2xl font-bold text-gray-800">
      ورود به <span class="text-teal-600 font-extrabold"> پنل کاربری </span>
    </h1>
    <Input
      title="نام کاربری"
      :icon="PhoneIcon"
      placeholder="نام کاربری خود را وارد کنید"
      v-model="form.phone"
      :error="errors?.phone?._errors[0]"
    />
    <PasswordInput
      title="رمز عبور"
      placeholder="رمز عبور را وارد کنید"
      :icon="LockClosedIcon"
      v-model="form.password"
      :error="errors?.password?._errors[0]"
    />
    <Button
      class="mt-8 md:mt-16"
      block
      :icon="ArrowLeftEndOnRectangleIcon"
      :loading="isLoading"
      @click="login"
    >
      ورود به حساب
    </Button>
    <Divider />

    <Button block tonal :icon="UserPlusIcon" @click="goToSignUp"
      >ایجاد حساب کاربری</Button
    >
  </div>
</template>
