<template>
  <div class="patient-card" :class="{ hidden: isCard }">
    <h2 class="card-header">Карточка пациента:</h2>
    <div class="card-row">
      <div class="card-item">
        <p>Дата:</p>
        <p>{{ date.toLocaleDateString() }}</p>
      </div>
      <div class="card-item">
        <p>Пол:</p>
        <p>123</p>
      </div>
      <div class="card-item">
        <p>Возраст:</p>
        <p>123</p>
      </div>
      <div class="card-item">
        <p>Врач:</p>
        <p></p>
      </div>
    </div>
    <div class="card-row">
      <div class="card-item">
        <p>Рост:</p>
        <p>123</p>
      </div>
      <div class="card-item">
        <p>Вес:</p>
        <p>123</p>
      </div>
      <div class="card-item">
        <p>ИМТ:</p>
        <p>123</p>
      </div>
      <div class="card-item">
        <p>Давление:</p>
        <p>sdfsdfsdfsdfsdfsf</p>
      </div>
    </div>
    <div class="card-row">
      <div class="card-item">
        <p>Жалобы:</p>
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
      <div class="card-item">
        <p>Анамнез заболевания:</p>
        <ul>
          <li>Анамнез заболевания</li>
          <li>Анамнез заболевания</li>
          <li>Анамнез заболевания</li>
        </ul>
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
  width: 100%;
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
  display: flex;
  justify-content: space-between;
}
</style>
