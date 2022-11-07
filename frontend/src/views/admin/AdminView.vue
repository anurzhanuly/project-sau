<template>
  <tab-menu :model="adminPages" />
  <router-view />
</template>

<script setup>
import TabMenu from "primevue/tabmenu";
import { ref } from "vue";

const adminPages = ref([
  {
    label: "Изменить JSON вопросов",
    icon: "pi pi-fw pi-pencil",
    to: "/admin/changeQuest",
  },
  {
    label: "Изменить рекомендации",
    icon: "pi pi-fw pi-file",
    to: "/admin/changeReccom",
  },
]);
</script>

<style scoped>
.section-admin {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.p-button-lg {
  margin-top: 20px;
}
</style>
