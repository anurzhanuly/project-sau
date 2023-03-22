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

body {
  --primary: #2196f3;
  --background: #ffffff;
  --background-dim: #f3f3f3;
  --background-dim-light: #f9f9f9;
  --primary-foreground: #ffffff;
  --foreground: #161616;
  --base-unit: 8px;
}
</style>
