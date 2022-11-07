<template>
  <section class="section-questions__add">
    <h2>Вставьте сюда json с вопросами из survey</h2>
    <p-textarea v-model="surveyJSON" rows="25" />
    <p-button
      label="Сохранить"
      class="p-button-lg"
      @click="changeSurveyQuestions"
    />
  </section>
</template>

<script setup>
import PTextarea from "primevue/textarea";
import PButton from "primevue/button";
import { ref } from "vue";
import { changeQuestionsJson } from "../../services/admin.js";

const surveyJSON = ref("");
const changeSurveyQuestions = async () => {
  const questionsJson = JSON.parse(
    surveyJSON.value.split("\n").join(""),
  ).pages.filter(el => {
    return el.elements[0].type !== "expression";
  });

  const questions = {
    id: "114",
    content: { pages: questionsJson },
  };

  const res = await changeQuestionsJson(questions);
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
