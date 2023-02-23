<template>
  <div class="main-screen-background">
    <div class="main-screen-image">
      <div class="main-screen-content">
        <header-bar />
        <main-bar />
      </div>
    </div>
  </div>
  <div class="main-screen-footer">
    <footer-bar />
  </div>
</template>

<script setup lang="ts">
import HeaderBar from "./components/HeaderBar.vue";
import FooterBar from "./components/FooterBar.vue";
import MainBar from "./components/MainBar.vue";
</script>

<style>
.main-screen-content {
  margin: 0 180px;
  min-height: 88vh;
}

.main-screen-background {
  background-color: #e4edfd;
  background-image: url("@/assets/main/background.png");
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: contain;
}

.main-screen-image {
  background-image: url("@/assets/main/main.png");
  background-repeat: no-repeat;
  background-position: 93% 50%;
}

.main-screen-footer {
  border-top: 1px solid #aacceb;
  background-color: #e4edfd;
}

@media (max-width: 1200px) {
  .main-screen-background {
    background-position: 20%;
    background-size: cover;
  }
}

@media (max-width: 770px) {
  .main-screen-content {
    margin: 0 60px;
  }

  .main-screen-image {
    background-size: contain;
    background-position: 93% 25%;
  }
}

@media (max-width: 480px) {
  .main-screen-content {
    margin: 0 15px;
  }
}
</style>
