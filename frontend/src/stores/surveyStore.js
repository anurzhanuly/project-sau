import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useSurveyStore = defineStore('survey', () => {
  const resultAnswers = ref({});
  const recommendations = ref([]);

  function postAnswersData(data) {
    resultAnswers.value = data.answers;

    axios
      .post('https://project-sau.herokuapp.com/diseases/recommendations', data)
      .then((response) => {
        console.log(response)
        if (!response.data.recommendations) {
          recommendations.value = [
            {
              name: 'Короче,нет ничего',
              tests: ['Вы здоровы'],
              recommendations: ['Вы здоровы'],
              importance: ''
            }
          ];
        } else {
          recommendations.value = response.data.recommendations;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return { resultAnswers, recommendations, postAnswersData };
});
