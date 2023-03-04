<template>
  <div class="base-header">
    <div class="base-header-content">
      <img
        src="@/assets/main/logo-auth.png"
        alt="Symptom logo"
        class="base-header-img"
        @click="$router.push('/')"
      />

      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <input-text type="text" placeholder="Поиск" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
</script>

<style>
.base-header {
  border-bottom: 1px solid #cacaca;
}

.base-header-content {
  display: flex;
  justify-content: space-between;
  margin: 15px 15px;
}

.base-header-img {
  cursor: pointer;
}
</style>
