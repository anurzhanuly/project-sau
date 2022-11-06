import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { postAnswers } from "../services/survey.js";

export const useSurveyStore = defineStore("survey", () => {
  const resultAnswers = ref({});
  const recommendations = ref([
    {
      name: "Короче,нет ничего",
      tests: ["Вы здоровы"],
      recommendations: ["Вы здоровы"],
      importance: "",
    },
  ]);

  async function postAnswersData(data) {
    resultAnswers.value = data.answers;
    const res = await postAnswers(data);
    console.log(res);
    if (!axios.isAxiosError(res)) {
      if (res.data.recommendations) {
        recommendations.value = res.data.recommendations;
      }
    }
    return res;
  }

  return { resultAnswers, recommendations, postAnswersData };
});
