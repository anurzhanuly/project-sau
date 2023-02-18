<template>
  <div class="section-patient">
    <div class="section-sidebar">
      <patient-sidebar />
    </div>
    <div class="section-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import PatientSidebar from "@/modules/patientsCabinet/components/PatientSidebar.vue";
</script>

<style scoped>
.section-patient {
  display: flex;
}
.section-sidebar {
  flex: 1;
}

.section-content {
  flex: 3;
  margin-left: 40px;
}
</style>
