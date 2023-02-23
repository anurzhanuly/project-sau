<template>
  <div class="onboarding-section">
    <base-swiper />
    <div class="onboarding-buttons">
      <!-- <p-button label="Далее" /> -->
      <p-button
        label="Пропустить"
        class="p-button-outlined"
        @click="goToSignup"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import BaseSwiper from "@/components/BaseSwiper.vue";
import PButton from "primevue/button";

const router = useRouter();

const goToSignup = (): void => {
  router.push({
    path: "/signup",
  });
};
</script>

<style>
@media only screen and (max-width: 600px) {
  .onboarding-section {
    background-color: rgba(170, 204, 235, 0.4);
    min-height: 100vh;
  }
  .onboarding-buttons {
    padding: 0 16px;
  }
  .onboarding-buttons .p-button {
    width: 100%;
    font-size: 22px;
    background: #276ef1;
    border-radius: 10px;
    margin-top: 50px;
  }
  .onboarding-buttons .p-button:last-child {
    background-color: #ffffff;
  }
}
</style>
