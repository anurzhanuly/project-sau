import { defineStore } from "pinia";
import axios from "axios";
import { computed, ref } from "vue";
import { getRecommendationsJson, getQuestionsJson } from "../services/admin.js";

export const useAdminStore = defineStore("admin", () => {
  const recommendations = ref([]);
  const questions = ref([]);
  const questionsNames = ref([]);
  const conditionColumns = [
    {
      header: "Наименование вопроса",
      field: "name",
      hasDropdown: true,
      options: computed(() => questionsNames.value),
    },
    {
      header: "Условие",
      field: "compare",
      hasDropdown: true,
      options: [
        { value: "exact" },
        { value: "except" },
        { value: "greater" },
        { value: "less" },
        { value: "range" },
        { value: "optional" },
      ],
    },
    {
      header: "Значение",
      field: "value",
    },
    {
      header: "Номер рекомендации",
      field: "testCase",
    },
  ];

  async function getQuestionsData() {
    const res = await getQuestionsJson();

    if (!axios.isAxiosError(res)) {
      questions.value = res.data.content.pages.map(el => el.elements).flat(1);
      questionsNames.value = questions.value.map(el => {
        return { value: el.name };
      });
    }

    return res;
  }

  async function getRecommendationsData() {
    const res = await getRecommendationsJson();

    if (!axios.isAxiosError(res)) {
      recommendations.value = JSON.parse(res.data.result);
    }

    return res;
  }

  async function createConditionInRec(newRecord) {
    console.log(newRecord)
  }

  function deleteRecByIndex(recName, conditionIndex, keyInCondition) {
    const rec = recommendations.value.filter(el => {
      return el.name === recName;
    })[0];
    const recIndex = recommendations.value.indexOf(rec);
    delete recommendations.value[recIndex].conditions[conditionIndex][
      keyInCondition
    ];
  }

  return {
    recommendations,
    questions,
    questionsNames,
    conditionColumns,
    getRecommendationsData,
    getQuestionsData,
    deleteRecByIndex,
    createConditionInRec,
  };
});