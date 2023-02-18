<template>
  <panelmenu :model="items" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Panelmenu from "primevue/panelmenu";
import type { MenuItem } from "primevue/menuitem";

const items = ref<MenuItem[]>([
  {
    label: "Главная",
    icon: "pi pi-fw pi-home",
    url: "/patientcab/main",
  },
  {
    label: "Настройки",
    icon: "pi pi-fw pi-pencil",
    url: "/patientcab/settings",
  },
]);
</script>

<style scoped></style>
