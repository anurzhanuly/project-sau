<template>
  <header class="header">
    <RouterLink to="/">
      <img src="@/assets/logo.png" class="header-image" alt="logo" />
    </RouterLink>
    <p class="header-button" @click="$router.push('/doctorSignin')">
      Кабинет врача
    </p>
  </header>
</template>

<script setup lang="ts"></script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
}

.header-button {
  float: right;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  color: #276ef1;
  border-bottom: 1px solid #276ef1;
  cursor: pointer;
}

.header-image {
  width: 200px;
  height: 40px;
}

@media (max-width: 480px) {
  .header-image {
    width: 150px;
    height: 30px;
  }

  .header-button {
    font-size: 15px;
  }
}

@media (max-width: 350px) {
  .header-image {
    width: 120px;
    height: 30px;
  }
}
</style>
