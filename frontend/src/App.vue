<template>
  <div class="wrapper">
    <router-view />
    <dynamic-dialog />
    <p-toast />
  </div>
</template>

<script setup lang="ts">
import DynamicDialog from "primevue/dynamicdialog";
import PToast from "primevue/toast";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

a {
  text-decoration: none;
  color: #2c3e50;
}

li {
  list-style: none;
}

#app {
  font-family: "Montserrat";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.wrapper {
  height: 88vh;
}
</style>
