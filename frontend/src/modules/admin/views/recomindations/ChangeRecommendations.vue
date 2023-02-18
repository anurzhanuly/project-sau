<template>
  <p-toast />
  <confirm-popup />
  <section class="section-recommendations-change">
    <recommendations-base />
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
      <div class="rec-buttons">
        <p-button
          label="Добавить"
          class="p-button-raised p-button-text"
          @click="createRecommendationTest"
        />
        <div>
          <input-number v-model="recommendationDeleteIndex" />
          <p-button
            label="Удалить"
            class="p-button-raised p-button-danger p-button-text"
            :disabled="!recommendationDeleteIndex"
            @click="confirmDeleteRecommendation($event)"
          />
        </div>
        <p-button
          label="Сохранить"
          class="p-button-raised p-button-success p-button-text"
          @click="saveRecommendationTests"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import RecommendationsBase from "../../components/RecommendationsBase.vue";
import { ref, watch } from "vue";
import PPanel from "primevue/panel";
import PButton from "primevue/button";
import PToast from "primevue/toast";
import ConfirmPopup from "primevue/confirmpopup";
import PTextarea from "primevue/textarea";
import InputNumber from "primevue/inputnumber";
import { useAdminStore } from "@/modules/admin/stores/admin.store";
import { useConfirm } from "primevue/useconfirm";
import axios from "axios";
import type { Error } from "@/types/response";
import { error, success } from "@/utils/toast";
import { storeToRefs } from "pinia";

const adminStore = useAdminStore();
const confirm = useConfirm();

const { checkedRecommendationName, allRecommendations } =
  storeToRefs(adminStore);

const copiedTests = ref<Record<string, string>>({});
const recommendationDeleteIndex = ref<number | null>(null);

watch(checkedRecommendationName, newRecommendationName => {
  const testRecommendations: Record<string, string[]> =
    allRecommendations.value.filter(el => el.name === newRecommendationName)[0]
      .tests;
  copiedTests.value = {};
  for (let key in testRecommendations) {
    copiedTests.value[key] = testRecommendations[key].join(",");
  }
});

const createRecommendationTest = () => {
  const testKeys = Object.keys(copiedTests.value);
  const key = `${+testKeys[testKeys.length - 1] + 1}`;
  copiedTests.value[key] = "";
};

const deleteRecommendation = () => {
  const filteredTests = {} as { [key: number]: string };
  Object.keys(copiedTests.value)
    .filter(elementInd => +elementInd !== recommendationDeleteIndex.value)
    .forEach((key, index) => {
      filteredTests[index + 1] = copiedTests.value[+key];
    });
  copiedTests.value = filteredTests;
  recommendationDeleteIndex.value = null;
};

const confirmDeleteRecommendation = (event: any) => {
  confirm.require({
    target: event.currentTarget,
    message: "Вы уверены?",
    acceptLabel: "Да",
    rejectLabel: "Нет",
    icon: "pi pi-info-circle",
    acceptClass: "p-button-danger",
    accept: deleteRecommendation,
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
    success("Успешно", "Изменения внесены");
  } else {
    if (axios.isAxiosError(res)) {
      const err = res.response?.data as Error;
      error("Ошибка", err.ERROR);
    }
  }
};
</script>

<style scoped>
.section-recommendations-change {
  display: flex;
  padding: 10px 0;
}

.recommendation-body {
  width: 70vw;
  padding-left: 20px;
}

.rec-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
</style>
