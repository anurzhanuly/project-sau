<template>
  <div class="recommendation-nav">
    <h4>Рекомендации</h4>
    <label
      v-for="(recomm, index) in allRecommendations"
      :key="index"
      :for="`${index}`"
      class="label"
      :class="{ checked: checkedRecommendationName === recomm.name }"
    >
      <input
        :id="`${index}`"
        v-model="checkedRecommendationName"
        type="radio"
        class="hidden"
        :value="recomm.name"
      />
      {{ recomm.name }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAdminStore } from "../stores/admin.store";

const adminStore = useAdminStore();
const { allRecommendations, checkedRecommendationName } =
  storeToRefs(adminStore);
</script>

<style>
.recommendation-nav {
  width: 20vw;
  display: flex;
  flex-direction: column;
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
  border: 1px solid #879aac;
  border-radius: 10px;
  margin-top: 10px;
  padding: 20px;
  font-weight: 400;
  cursor: pointer;
}

.checked {
  background: #689be7;
  color: #fff;
}
</style>
