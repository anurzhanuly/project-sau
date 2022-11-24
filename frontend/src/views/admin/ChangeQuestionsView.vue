<template>
  <section class="section-questions__add">
    <h2>Вставьте сюда json с вопросами из survey</h2>
    <p-textarea v-model="surveyStr" rows="25" />
    <p-button
      label="Сохранить"
      class="p-button-lg"
      @click="changeSurveyQuestions"
    />
  </section>
</template>

<script lang="ts" setup>
import PTextarea from "primevue/textarea";
import PButton from "primevue/button";
import { ref } from "vue";
import { changeQuestionsJson } from "../../services/admin";
import type { QuestionsContent } from "@/types/questions";

const surveyStr = ref("");

const changeSurveyQuestions = async () => {
  const surveyJSON: QuestionsContent = JSON.parse(
    surveyStr.value.split("\n").join(""),
  );
  const questionsJson = surveyJSON.pages.filter(el => {
    return el.elements[0].type !== "expression";
  });

  const questions = {
    id: "114",
    content: { pages: questionsJson } as QuestionsContent,
  };

  await changeQuestionsJson(questions);
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
