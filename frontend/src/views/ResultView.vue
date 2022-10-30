<template>
  <section class="section-result">
    <div :class="{ hidden: isResultsHidden }" id="recommendations">
      <h2 class="result-header">Результаты:</h2>
      <div
        v-for="(resultItem, index) in result"
        :key="index"
        class="result-item"
      >
        <p-panel
          header="Рекомендуется:"
          :toggleable="true"
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
        </p-panel>
      </div>
      <div :class="{ hidden: isButtonsHidden }">
        <button class="btn" @click="makeResultPdf()">Открыть в pdf</button>
        <button class="btn" @click="openPromo">Получить промокод</button>
        <button class="btn" @click="test()">Карточка пациента</button>
      </div>
      <p-dialog
        header="Скидочный промокод: Симптом"
        v-model:visible="displayPromo"
        :style="{ width: '80vw' }"
      >
        <data-table :value="partners" responsiveLayout="scroll">
          <p-column field="name" header="Категория"> </p-column>
          <p-column field="company" header="Компания"> </p-column>
          <p-column field="address" header="Адрес"> </p-column>
        </data-table>
      </p-dialog>
    </div>
    <patient-card :class="{ hidden: isCardHidden }" id="patientCard" />
  </section>
</template>

<script setup>
import { useSurveyStore } from '../stores/surveyStore.js';
import partners from '../services/partners.js';
import { ref, computed } from 'vue';
import PPanel from 'primevue/panel';
import PDialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import PColumn from 'primevue/column';
import PatientCard from '../components/PatientCard.vue';

const surveyStore = useSurveyStore();

const isButtonsHidden = ref(false);
const isResultsHidden = ref(false);
const isCardHidden = ref(true);
const displayPromo = ref(false);

const result = computed(() => surveyStore.recommendations || []);

const openPromo = () => {
  displayPromo.value = true;
};

const makeResultPdf = () => {
  isButtonsHidden.value = true;
  setTimeout(() => {
    window.print();
    isButtonsHidden.value = false;
  }, 300);
};

const test = () => {
  const r = document.getElementById('recommendations');
  const cloneR = r.cloneNode(true)
  const p = document.getElementById('patientCard');
  r.innerHTML = p.innerHTML;
  window.print();
  r.innerHTML = cloneR.innerHTML;
};
</script>

<style scoped>
.section-result {
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 60px;
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

.hidden {
  visibility: hidden;
  position: absolute;
  right: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
