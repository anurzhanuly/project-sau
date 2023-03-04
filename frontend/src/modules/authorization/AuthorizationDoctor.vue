<template>
  <div class="authorization-section">
    <div class="onboarding-main">
      <base-swiper />
    </div>
    <div class="authorization-main">
      <div class="link-back" @click="$router.push('/')">
        <span>&lt; Назад</span>
      </div>
      <div class="authorization-wrapper p-fluid">
        <form class="authorization-form">
          <img src="@/assets/main/logo-auth.png" alt="Symptom logo" />
          <div>
            <h4>Имя <span>*</span></h4>
            <input-text v-model="login" />
          </div>
          <div>
            <h4>Фамилия <span>*</span></h4>
            <input-text v-model="password" />
          </div>
          <div>
            <h4>Номер телефона <span>*</span></h4>
            <input-text />
          </div>
          <p-button label="Вход" @click="checkDoctor" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseSwiper from "@/components/BaseSwiper.vue";
import { useRouter } from "vue-router";
import { error } from "@/utils/toast";
import { ref } from "vue";

import PButton from "primevue/button";
import InputText from "primevue/inputtext";

const router = useRouter();
const login = ref<string>("");
const password = ref<string>("");

const validation = (): boolean => {
  if (login.value !== "symptom") {
    error("Ошибка", "Неверный логин или пароль");
    return false;
  }

  if (password.value !== "adam") {
    error("Ошибка", "Неверный логин или пароль");
    return false;
  }

  return true;
};

const checkDoctor = (): void => {
  if (validation()) router.push("/cabinet");
};
</script>

<style>
@import "./styles/authorization.css";
</style>
