<template>
  <base-header />
  <div class="pages-main">
    <div class="pages-nav">
      <label
        v-for="(page, index) in cabinetViews"
        :key="index"
        :for="`${index}`"
        class="label"
        :class="{ selected: selectedPage === page.label }"
        @click="router.push(page.to)"
      >
        <i :class="page.icon" />
        <input
          :id="`${index}`"
          v-model="selectedPage"
          type="radio"
          class="hidden"
          :value="page.label"
        />
        {{ page.label }}
      </label>
    </div>
    <div class="pages-view">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from "@/components/BaseHeader.vue";
import { RouterView } from "vue-router";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

onMounted(() => {
  router.push("/cabinet/main");
});

const router = useRouter();
const selectedPage = ref<any>("Главная");
const cabinetViews = ref([
  {
    label: "Главная",
    icon: "pi pi-fw pi-book",
    to: "/cabinet/main",
  },
  {
    label: "Пациенты",
    icon: "pi pi-fw pi-users",
    to: "/cabinet/patients",
  },
  {
    label: "Настройки",
    icon: "pi pi-fw pi-exclamation-circle",
    to: "/cabinet/settings",
  },
]);
</script>

<style scoped>
.pages-main {
  display: flex;
}
.pages-nav {
  height: max-content;
  width: 280px;
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  background-color: #ffffff;
}

.pages-view {
  width: -webkit-fill-available;
}

.hidden {
  visibility: hidden;
  position: absolute;
  right: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.label {
  display: block;
  margin-top: 1px;
  padding: 14px;
  font-weight: 400;
  cursor: pointer;
}

.selected {
  background: #eef5fb;
  border-right: 3px solid #276ef1;
}
</style>
