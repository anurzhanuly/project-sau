<template>
  <panelmenu v-model="items" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Panelmenu from "primevue/panelmenu";

const items = ref([
  {
    label: "Главная",
    icon: "pi pi-fw pi-home",
    url: ["/patientcab/main"],
  },
  {
    label: "Настройки",
    icon: "pi pi-fw pi-pencil",
    url: ["/patientcab/settings"],
  },
]);
</script>

<style scoped></style>
