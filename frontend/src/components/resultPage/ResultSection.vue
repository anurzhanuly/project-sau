<template>
  <section class="section-result">
    <div :class="{ hidden: isResults }">
      <h2 class="result-header">Результаты:</h2>
      <div
        v-for="(resultItem, index) in result"
        :key="index"
        class="result-item"
      >
        <Panel
          class="result-title"
          header="Вам рекомендуются следующие исследования:"
          toggleable="true"
        >
          <ul class="result-list">
            <li
              v-for="(item, index) in resultItem.tests"
              :key="index"
              class="result-list__item"
            >
              {{ item }}
            </li>
          </ul>
        </Panel>
        <Panel
          header="Так же рекомендуется:"
          toggleable="true"
          collapsed="true"
          class="result-title"
        >
          <ul class="result-list">
            <li
              v-for="(item, index) in resultItem.recommendations"
              :key="index"
              class="result-list__item"
            >
              {{ item }}
            </li>
          </ul>
        </Panel>
        <Panel
          class="result-title"
          header="Почему это важно:"
          toggleable="true"
          collapsed="true"
        >
          <p class="result-text">{{ resultItem.importance }}</p>
        </Panel>
      </div>
      <button class="btn" :class="{ hidden: isHidden }" @click="makeResultPdf()">
        Открыть в pdf
      </button>
      <button class="btn" :class="{ hidden: isHidden }" @click="openBasic">
        Получить промокод
      </button>
      <button class="btn" :class="{ hidden: isHidden }" @click="makeCardPdf()">
        Карточка пациента
      </button>
      <Dialog
        header="Скидочный промокод: Симптом"
        v-model:visible="displayBasic"
        :style="{ width: '80vw' }"
      >
        <DataTable :value="partners" responsiveLayout="scroll">
          <Column field="name" header="Категория"> </Column>
          <Column field="company" header="Компания"> </Column>
          <Column field="address" header="Адрес"> </Column>
        </DataTable>
      </Dialog>
    </div>
    <div :class="{ hidden: isCard }">
      <div class="patient-card">
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
                (resultAnswers.answers['3'][0] *
                  resultAnswers.answers['3'][0]) +
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
            resultAnswers.answers['25']
              ? resultAnswers.answers['25'].join()
              : '-'
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
    </div>
  </section>
</template>

<script setup>
import { useSurveyStore } from '../../stores/survey.js';
import axios from 'axios';
import partners from '../../services/partners.js';
import { ref, onMounted } from 'vue';
import Panel from 'primevue/panel';
import Dialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const surveyStore = useSurveyStore();
const { resultAnswers } = surveyStore;
const result = ref(null);
const isHidden = ref(false);
const isResults = ref(false);
const isCard = ref(true);
const displayBasic = ref(false);
const date = ref(new Date());

const openBasic = () => {
  displayBasic.value = true;
};

onMounted(() => {
  axios
    .post(
      'https://project-sau.herokuapp.com/diseases/recommendations',
      resultAnswers
    )
    .then((response) => {
      if (!response.data.recommendations) {
        result.value = [
          {
            name: 'Короче,нет ничего',
            tests: [],
            recommendations: [],
            importance: ''
          }
        ];
      } else {
        result.value = response.data.recommendations;
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

const makeResultPdf = () => {
  isHidden.value = true;
  setTimeout(() => {
    window.print();
    isHidden.value = false;
  }, 1);
};

const makeCardPdf = () => {
  isCard.value = false;
  isResults.value = true;
  isHidden.value = true;
  setTimeout(() => {
    window.print();
    isCard.value = true;
    isResults.value = false;
    isHidden.value = false;
  }, 1);
};
</script>

<style scoped>
.section-result {
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 60px 80px 80px;
  margin: 0 auto 40px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.result-header {
  margin-bottom: 40px;
}

.result-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

.result-list__item {
  margin-bottom: 10px;
}

.result-title {
  margin-bottom: 10px;
}

.result-list {
  margin: 0 0 10px 30px;
}

.result-text {
  margin-bottom: 10px;
}

.btn {
  background-color: #ffffff;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;
  margin-right: 20px;
}

.btn:focus-visible {
  box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
  transition: box-shadow 0.2s;
}

.btn:active {
  background-color: #f7f7f7;
  border-color: #000000;
  transform: scale(0.96);
}

.btn:disabled {
  border-color: #dddddd;
  color: #dddddd;
  cursor: not-allowed;
  opacity: 1;
}

.hidden {
  display: none;
}

.patient-card {
  display: flex;
  flex-direction: column;
}

.patient-card span {
  margin-bottom: 10px;
}

@media (max-width: 580px) {
  .btn {
    font-size: 14px;
    line-height: 18px;
  }

  .section-result {
    padding: 30px 20px;
  }

  .result-list {
    margin-left: 10px;
  }
}

@media (max-width: 768px) {
  .btn {
    margin: 5px 20px 5px 0;
  }

  .result-title {
    font-size: 12px;
  }

  .result-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
