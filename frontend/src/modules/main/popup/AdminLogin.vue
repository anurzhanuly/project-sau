<template>
  <div class="popup">
    <div>
      <h3>Логин</h3>
      <input-text v-model="login" style="width: 100%" />
    </div>
    <div>
      <h3>Пароль</h3>
      <input-text v-model="password" type="password" style="width: 100%" />
    </div>
    <p-button
      label="Ввести"
      icon="pi pi-check"
      class="p-button-success"
      autofocus
      style="margin-top: 20px; width: 100%"
      @click="checkAdmin()"
    />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { error } from "@/utils/toast";
import { ref, inject } from "vue";

import PButton from "primevue/button";

import InputText from "primevue/inputtext";

const router = useRouter();
const login = ref("");
const password = ref("");
const dialogRef = inject<any>("dialogRef");

const checkAdminValidation = (): boolean => {
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

const checkAdmin = () => {
  if (checkAdminValidation()) {
    router.push({
      name: "admin",
    });
    dialogRef.value.close();
  }
};
</script>

<style scoped>
.popup {
  display: flex;
  flex-direction: column;
}

.popup h3 {
  margin: 10px 0px;
}
</style>
