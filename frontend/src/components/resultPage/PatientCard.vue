<template>
  <div class="patient-card" :class="{ hidden: isCard }">
    <h2 class="result-header">Карточка пациента:</h2>
    <span>Дата: {{ date.toLocaleDateString() }} г.</span>
    <span>Возраст: {{ resultAnswers.answers['1'][0] }}</span>
    <span>Пол: {{ resultAnswers.answers['2'][0] }}</span>
    <span>Рост: {{ resultAnswers.answers['3'][0] }}</span>
    <span>Вес: {{ resultAnswers.answers['4'][0] }}</span>
    <span
      >ИМТ:
      {{
        (
          resultAnswers.answers['4'][0] /
            (resultAnswers.answers['3'][0] * resultAnswers.answers['3'][0]) +
          ''
        ).slice(4, 6)
      }}</span
    >
    <span
      >Давление:
      {{
        resultAnswers.answers['10'] ? resultAnswers.answers['10'][0] : '-'
      }}</span
    >
    <span
      >Жалобы:
      {{
        resultAnswers.answers['25'] ? resultAnswers.answers['25'].join() : '-'
      }}</span
    >
    <span
      >Систолическое давление:
      {{
        resultAnswers.answers['10'] ? resultAnswers.answers['10'][0] : '-'
      }}</span
    >
    <span
      >Уровень глюкозы в крови:
      {{
        resultAnswers.answers['12'] ? resultAnswers.answers['12'][0] : '-'
      }}</span
    >
    <span
      >Хронические заболевания:
      {{
        resultAnswers.answers['6'] ? resultAnswers.answers['6'].join() : '-'
      }}</span
    >
    <span
      >Курение:
      {{
        resultAnswers.answers['20'] ? resultAnswers.answers['20'][0] : '-'
      }}</span
    >
    <span
      >Алкоголь:
      {{
        resultAnswers.answers['17'] ? resultAnswers.answers['17'][0] : '-'
      }}</span
    >
    <span
      >Семейные заболевания:
      {{
        resultAnswers.answers['8'] ? resultAnswers.answers['8'].join() : '-'
      }}</span
    >
    <span
      >Уровень физической активности:
      {{
        resultAnswers.answers['23'] ? resultAnswers.answers['23'][0] : '-'
      }}</span
    >
    <span
      >Рацион питания:
      {{
        resultAnswers.answers['24'] ? resultAnswers.answers['24'][0] : '-'
      }}</span
    >
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSurveyStore } from '../../stores/survey.js';

const surveyStore = useSurveyStore();
const { resultAnswers } = surveyStore;
const date = ref(new Date());
</script>

<style scoped>
.result-header {
  margin-bottom: 40px;
}

.patient-card {
  display: flex;
  flex-direction: column;
}

.patient-card span {
  margin-bottom: 10px;
}
</style>
