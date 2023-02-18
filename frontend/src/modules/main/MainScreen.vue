<template>
  <header-bar />
  <main class="main"><router-view /></main>
  <footer-bar />
</template>

<script setup lang="ts">
import HeaderBar from "./components/HeaderBar.vue";
import FooterBar from "./components/FooterBar.vue";
</script>

<style>
.main {
  flex: 1 1 auto;
}
</style>
