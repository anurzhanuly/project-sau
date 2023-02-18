<template>
  <div class="section-patient">
    <div class="section-sidebar">
      <sidebar />
    </div>
    <div class="section-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "@/components/PatientSidebar.vue";
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
