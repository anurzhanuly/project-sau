<template>
  <div class="wrapper">
    <ToolbarBase />
    <FooterBase />
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

.wrapper {
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main {
  flex: 1 1 auto;
}
</style>
