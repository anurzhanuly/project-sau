<template>
  <header class="header">
    <NuxtLink to="/">
      <div class="logo" />
    </NuxtLink>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
}

.logo {
  background-image: url('/img/logo.png');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 60px;
  width: 200px;
}
</style>
