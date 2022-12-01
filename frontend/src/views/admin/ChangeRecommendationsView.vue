<template>
  <p-toast />
  <section class="section-recommendations-change">
    <div class="recommendation-nav">
      <label
        v-for="(recomm, index) in recommendationsJSON"
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
      <p-button
        label="Сохранить"
        class="p-button-lg"
        @click="saveRecommendationTests"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, computed } from "vue";
import PPanel from "primevue/panel";
import PButton from "primevue/button";
import PToast from "primevue/toast";
import PTextarea from "primevue/textarea";
import { useAdminStore } from "../../stores/adminStore";
import { useToast } from "primevue/usetoast";
import axios from "axios";
import type { Error } from "@/types/response.";

const adminStore = useAdminStore();
const toast = useToast();

const checkedRecommendationName = ref("");
const copiedTests = ref({} as Record<string, string>);

onMounted(() => {
  if (!adminStore.recommendations.length) {
    adminStore.getRecommendationsData();
  }
});

const recommendationsJSON = computed(() => adminStore.recommendations);

watch(checkedRecommendationName, newRecommendationName => {
  const testRecommendations: Record<string, string[]> =
    recommendationsJSON.value.filter(el => el.name === newRecommendationName)[0]
      .tests;
  copiedTests.value = {};
  for (let key in testRecommendations) {
    copiedTests.value[key] = testRecommendations[key].join(",");
  }
});

const addToast = (severity: string, summary: string, message: string) => {
  toast.add({
    severity,
    summary,
    detail: message,
    life: 3000,
  });
};

const saveRecommendationTests = async () => {
  const newTests = {} as Record<string, string[]>;
  for (let key in copiedTests.value) {
    newTests[key] = copiedTests.value[key].split(".,");
  }
  const res = await adminStore.saveRecommendationsData(
    checkedRecommendationName.value,
    newTests,
  );

  if (res.status === 200) {
    addToast("success", "Успешно", "Изменения внесены");
  } else {
    if (axios.isAxiosError(res)) {
      const err = res.response?.data as Error;
      addToast("error", "Ошибка", err.ERROR);
    }
  }
};
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
