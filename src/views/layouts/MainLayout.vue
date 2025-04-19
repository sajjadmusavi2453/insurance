<script setup lang="ts">
console.log("MAin layout");
</script>
<template>
  <div>
    <router-view name="header"> </router-view>
    <main>
      <RouterView></RouterView>
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>
