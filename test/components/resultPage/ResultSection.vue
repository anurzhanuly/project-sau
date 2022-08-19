<template>
  <section class="section-result">
    <h2 class="result-header">
      Результаты:
    </h2>
    <div>
      <div
        v-for="(resultItem, index) in result"
        :key="index"
        class="result-item"
      >
        <strong class="result-title">
          Вам рекомендуются следующие исследования:
        </strong>
        <ul class="result-list">
          <li v-for="(item, idx) in resultItem.tests" :key="idx">
            {{ item }}
          </li>
        </ul>
        <strong class="result-title"> Почему это важно:</strong>
        <p class="result-text">
          {{ resultItem.importance }}
        </p>
        <strong class="result-title">Так же рекомендуется:</strong>
        <ul class="result-list">
          <li v-for="(item, idx) in resultItem.recommendations" :key="idx">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <button class="btn">
      Открыть в pdf
    </button>
  </section>
</template>

<script setup>
import { useSurveyStore } from '~~/store/surveyStore.js';

const surveyStore = useSurveyStore();
const { resultAnswers } = surveyStore;

const result = ref(null);

onMounted(() => {
  const postQuestions = async () => {
    const response = await $fetch('https://project-sau.herokuapp.com/diseases/recommendations', {
      method: 'post',
      body: resultAnswers
    });

    if (!response.recommendations) {
      result.value = [
        {
          name: 'Короче,нет ничего',
          tests: [],
          recommendations: [],
          importance: ''
        }
      ];
    } else {
      result.value = response.recommendations;
    }
    console.log(response);
  };
  postQuestions();
});

</script>

<style scoped>
.section-result {
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 60px 80px 80px;
  margin: 40px auto;
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
  margin-bottom: 30px;
}

.result-title {
  margin-bottom: 7px;
}

.result-list {
  margin: 0 0 10px 30px;
}

.result-text {
  margin-bottom: 10px;
}

.hidden {
  display: none;
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

@media (max-width: 480px) {
  .btn {
    font-size: 14px;
    line-height: 18px;
    margin: 5px 0;
  }

  .section-result {
    padding: 50px 30px;
  }
}

@media (max-width: 768px) {
  .test-title {
    font-size: 22px;
  }

  .result-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
