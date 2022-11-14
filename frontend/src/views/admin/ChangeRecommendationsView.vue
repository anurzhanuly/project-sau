<template>
  <p-toast />
  <confirm-popup />
  <section class="section-recommendations-change">
    <div class="recommendation-nav">
      <label
        v-for="(recomm, index) in recommendationsJSON"
        :key="index"
        :for="index"
        class="label"
        :class="{ checked: checkedRecommendationName === recomm.name }"
      >
        <input
          :id="index"
          v-model="checkedRecommendationName"
          type="radio"
          class="hidden"
          :value="recomm.name"
        />
        {{ recomm.name }}
      </label>
    </div>
    <div v-if="checkedRecommendationName !== ''" class="recommendation-body">
      <p-panel
        v-for="(testKey, _) in Object.keys(copiedTests)"
        :key="_"
        :header="testKey"
        :toggleable="true"
        :collapsed="true"
      >
        <p-textarea
          v-model="copiedTests[testKey]"
          style="width: 100%; height: 100%"
        />
      </p-panel>
      <p-button label="Сохранить" class="p-button-lg" />
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, computed } from "vue";
import PPanel from "primevue/panel";
import PButton from "primevue/button";
import PToast from "primevue/toast";
import PTextarea from "primevue/textarea";
import { useAdminStore } from "../../stores/adminStore";

const adminStore = useAdminStore();

const checkedRecommendationName = ref("");
const copiedTests = ref({});

onMounted(() => {
  if (!adminStore.recommendations.length) {
    adminStore.getRecommendationsData();
  }
});

const recommendationsJSON = computed(() => adminStore.recommendations);

watch(checkedRecommendationName, newRecommendationName => {
  copiedTests.value = recommendationsJSON.value.filter(
    el => el.name === newRecommendationName,
  )[0].tests;
});
</script>

<style scoped>
.section-recommendations-change {
  display: flex;
  padding: 10px 0;
}

.recommendation-nav {
  width: 20vw;
  display: flex;
  flex-direction: column;
}

.recommendation-item {
  cursor: pointer;
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

.checked::before {
  content: "✔";
}

.recommendation-body {
  width: 70vw;
  padding-left: 20px;
}

.p-button-lg {
  margin-top: 20px;
}
</style>
