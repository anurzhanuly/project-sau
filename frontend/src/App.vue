<template>
  <div class="wrapper">
    <main-screen />
  </div>
</template>

<script lang="ts" setup>
import MainScreen from "./modules/main/MainScreen.vue";
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  /* background-color: #f5f7f9; */
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
  font-family: 'Montserrat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.wrapper {
  /* max-width: 1500px;
  padding: 0 30px; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

@media (max-width: 580px) {
  .wrapper {
    padding: 0 15px;
  }
}
</style>
