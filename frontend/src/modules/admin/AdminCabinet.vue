<template>
  <tab-menu :model="adminPages" />
  <router-view />
</template>

<script lang="ts" setup>
import { useClinicsStore } from "@/modules/admin/views/clinics/store/clinics.store";
import { useAdminStore } from "@/modules/admin/stores/admin.store";
import { onMounted, ref } from "vue";
import TabMenu from "primevue/tabmenu";

const adminStore = useAdminStore();
const clinicsStore = useClinicsStore();

onMounted(() => {
  if (!adminStore.allRecommendations.length) {
    adminStore.getRecommendationsData();
  }

  if (!adminStore.questions.length) {
    adminStore.getQuestionsData();
  }

  if (!clinicsStore.clinics.length) {
    clinicsStore.getClinicsData();
    clinicsStore.getDoctorsData();
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
