<script setup lang="ts">
console.log("MAin layout");
</script>
<template>
  <div class="bg-gray-50">
    <router-view name="header"> </router-view>
    <main class="min-h-screen">
      <RouterView></RouterView>
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>
