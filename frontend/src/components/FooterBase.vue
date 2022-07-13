<template>
  <footer class="header">
    <RouterLink to="/">
      <div class="logo"></div>
    </RouterLink>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  margin-top: auto;
}

.logo {
  background-image: url("../assets/logo.png");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 60px;
  width: 200px;
}
</style>
