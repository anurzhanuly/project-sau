<template>
  <div class="section-admin">
    <p-textarea
      v-model="questionsJson"
      rows="25"
      aria-label="Вставьте сюда json с вопросами из survey"
    />
    <p-button
      label="Сохранить"
      class="p-button-lg"
      @click="changeSurveyQuestions"
    />
  </div>
</template>

<script setup>
import PTextarea from "primevue/textarea";
import PButton from "primevue/button";
import { ref } from "vue";
import { changeQuestionsJson } from "../services/admin.js";

const questionsJson = ref("");
const changeSurveyQuestions = async () => {
  const questions = {
    id: "114",
    content: questionsJson.value.split("\n").join(""),
  };

  const res = await changeQuestionsJson(questions);
  console.log(res);
};
</script>

<style scoped>
.section-admin {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.p-button-lg {
  margin-top: 20px;
}
</style>
