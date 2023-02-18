<template>
  <section class="section-result">
    <h2 class="result-header">Результаты:</h2>
    <p-panel
      v-if="isResultVisible"
      header="Карточка пациента:"
      :toggleable="true"
    >
      <result-text-area />
    </p-panel>
    <p-panel header="Рекомендуется:" :toggleable="true">
      <ul
        v-for="(resultItem, index) in result"
        :key="index"
        class="result-list"
      >
        <li
          v-for="(item, idx) in resultItem.recommendations"
          :key="idx"
          class="result-list__item"
        >
          - {{ item }}
        </li>
      </ul>
      <div v-if="isButtonsVisible" class="btn-wrapper">
        <p-button
          label="Открыть в pdf"
          class="p-button-raised p-button-text"
          @click="makeResultPdf"
        />
      </div>
    </p-panel>
  </section>
</template>

<script lang="ts" setup>
import { useSurveyStore } from "../modules/survey/store/survey.store";
import { ref, computed } from "vue";
import PPanel from "primevue/panel";
import PButton from "primevue/button";
import ResultTextArea from "@/components/ResultTextArea.vue";

const surveyStore = useSurveyStore();
const result = computed(() => surveyStore.recommendations || []);

const isButtonsVisible = ref(true);
const isResultVisible = ref(true);

const makeResultPdf = () => {
  isButtonsVisible.value = false;
  isResultVisible.value = false;
  setTimeout(() => {
    window.print();
  });
  setTimeout(() => {
    isButtonsVisible.value = true;
    isResultVisible.value = true;
  }, 2000);
};
</script>

<style scoped>
.section-result {
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 40px;
  margin: 0 auto 40px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.result-header {
  margin-bottom: 40px;
}

.result-list__item {
  margin-bottom: 10px;
}

.result-list {
  margin: 0 0 30px 20px;
}

.p-panel {
  margin-bottom: 30px;
}

.btn-wrapper {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 580px) {
  .section-result {
    padding: 30px 20px;
  }

  .result-list {
    margin-left: 10px;
  }
}

@media (max-width: 768px) {
  .result-header {
    flex-direction: column;
    align-items: flex-start;
  }
}

.hidden {
  display: none;
}
</style>
