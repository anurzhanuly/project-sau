<template>
  <section class="section-questions__add">
    <h2 style="margin: 8px 0">Вставьте сюда json с вопросами из survey</h2>
    <p-textarea v-model="surveyStr" rows="25" />
    <p-button
      label="Сохранить"
      class="p-button-lg"
      @click="changeSurveyQuestions"
    />
  </section>
</template>

<script lang="ts" setup>
import type { QuestionsContent } from "@/modules/admin/types/questions";
import { useQuestionsStore } from "./store/changeQuestions.store";
import { ref } from "vue";

import PTextarea from "primevue/textarea";
import PButton from "primevue/button";

const questionStore = useQuestionsStore();
const surveyStr = ref<string>("");

const changeSurveyQuestions = async (): Promise<void> => {
  const surveyJSON: QuestionsContent = JSON.parse(
    surveyStr.value.split("\n").join(""),
  );

  const questionsJson = surveyJSON.pages.filter(el => {
    return el.elements[0].type !== "expression";
  });

  const questions = {
    id: "114",
    content: { pages: questionsJson },
  };

  await questionStore.changeQuestionsData(questions);
};
</script>

<style scoped>
.section-questions__add {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.p-button-lg {
  margin-top: 20px;
}
</style>
