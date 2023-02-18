import { defineStore } from "pinia";
import { postAnswers } from "../services/survey.refbooks";
import { getQuestionsJson } from "../../../services/admin.js";
import type { QuestionsContent } from "../types/survey";
import axios from "axios";
import { ref } from "vue";

export const useSurveyStore = defineStore("survey", () => {
  const resultAnswers = ref<Record<string, string[]>>();
  const questions = ref<QuestionsContent>();
  const recommendations = ref([
    {
      name: "Короче, нет ничего",
      tests: ["Вы здоровы"],
      recommendations: ["Вы здоровы"],
      importance: "",
    },
  ]);

  async function getQuestionsData() {
    const res = await getQuestionsJson();
    if (!axios.isAxiosError(res)) {
      questions.value = res.data.content;
    }

    return res;
  }

  async function postAnswersData(data: { answers: Record<string, string[]> }) {
    resultAnswers.value = data.answers;
    const res = await postAnswers(data);

    if (!axios.isAxiosError(res)) {
      if (res.data.recommendations) {
        recommendations.value = res.data.recommendations;
      }
    }
    return res;
  }

  return {
    resultAnswers,
    questions,
    recommendations,
    postAnswersData,
    getQuestionsData,
  };
});
