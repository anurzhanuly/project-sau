<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  background-color: #f5f7f9;
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
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.wrapper {
  height: 88vh;
}
</style>
