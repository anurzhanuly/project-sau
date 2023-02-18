<template>
  <tab-menu :model="adminPages" />
  <router-view />
</template>

<script lang="ts" setup>
import { useAdminStore } from "@/stores/adminStore";
import { onMounted, ref } from "vue";
import TabMenu from "primevue/tabmenu";

const adminStore = useAdminStore();

onMounted(() => {
  if (!adminStore.allRecommendations.length) {
    adminStore.getRecommendationsData();
  }

  if (!adminStore.questions.length) {
    adminStore.getQuestionsData();
  }

  if (!adminStore.allClinics.length) {
    adminStore.getClinicsData();
  }
});

const adminPages = ref([
  {
    label: "Изменить JSON вопросов",
    icon: "pi pi-fw pi-pencil",
    to: "/admin/quest",
  },
  {
    label: "Изменить условия рекомендаций",
    icon: "pi pi-fw pi-file",
    to: "/admin/cond",
  },
  {
    label: "Изменить рекомендации",
    icon: "pi pi-fw pi-book",
    to: "/admin/recom",
  },
  {
    label: "Изменить наименование",
    icon: "pi pi-fw pi-database",
    to: "/admin/magic",
  },
  {
    label: "Список клиник",
    icon: "pi pi-fw pi-book",
    to: "/admin/clinics",
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
