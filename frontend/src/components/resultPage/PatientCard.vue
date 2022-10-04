<template>
  <div class="patient-card" :class="{ hidden: isCard }">
    <h2 class="card-header">Карточка пациента:</h2>
    <div class="card-row">
      <div class="card-item">
        <span>Дата:</span>
        <span>123</span>
      </div>
      <div class="card-item">
        <span>Пол:</span>
        <span>123</span>
      </div>
      <div class="card-item">
        <span>Возраст:</span>
        <span>123</span>
      </div>
      <div class="card-item">
        <span>Врач:</span>
        <span>123</span>
      </div>
    </div>
    <div class="card-row">
      <div class="card-item">
        <span>Рост:</span>
        <span>123</span>
      </div>
      <div class="card-item">
        <span>Вес:</span>
        <span>123</span>
      </div>
      <div class="card-item">
        <span>ИМТ:</span>
        <span>123</span>
      </div>
      <div class="card-item">
        <span>Давление:</span>
        <span>123</span>
      </div>
    </div>
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
.card-header {
  margin-bottom: 40px;
}

.patient-card {
  display: flex;
  flex-direction: column;
}

.card-row {
  border: 1px solid #222222;
  border-right: 0px;
  border-bottom: 0px;
  display: flex;
}

.card-item {
  border-right: 1px solid #222222;
  padding: 20px;
  width: 100%;
}
</style>
