import { defineStore } from "pinia";
import axios from "axios";
import { computed, ref } from "vue";
import {
  getRecommendationsJson,
  getQuestionsJson,
  putRecommendationsObj,
} from "../services/admin.js";
import type { Condition, Recommendation } from "@/types/recommendations.js";
import type { Questions } from "@/types/questions.js";

export const useAdminStore = defineStore("admin", () => {
  const allRecommendations = ref([] as Recommendation[]);
  const questions = ref([] as Questions[]);
  const questionsNames = ref([] as { value: string }[]);
  const checkedRecommendationName = ref("");
  const conditionIndex = ref(0);
  const conditionColumns = [
    {
      header: "Наименование вопроса",
      field: "questionName",
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
    {
      header: "Удаление",
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
      allRecommendations.value = JSON.parse(res.data.result);
    }

    return res;
  }

  async function saveRecommendationsData(
    recName: string,
    recomm: Record<string, string[]>,
  ) {
    const newRecommendation = JSON.parse(
      JSON.stringify(
        allRecommendations.value.filter(el => {
          return el.name === recName;
        })[0],
      ),
    );
    const recIndex: number =
      allRecommendations.value.indexOf(newRecommendation);
    newRecommendation.tests = recomm;
    allRecommendations.value[recIndex].tests = recomm;

    const res = await putRecommendationsObj(newRecommendation);

    return res;
  }

  function editLocalRecommendationsByIndex(
    recName: string,
    condIndex: number,
    tableIndex: number,
    updateTo: Recommendation,
  ) {
    if (allRecommendations.value[tableIndex]) {
      accurClientsStoreData.value[tableIndex] = updateTo;
    }
  }

  async function saveConditionsData(conditionName: string) {
    const newRecommendation = JSON.parse(
      JSON.stringify(
        allRecommendations.value.filter(el => {
          return el.name === conditionName;
        })[0],
      ),
    );

    const res = await putRecommendationsObj(newRecommendation);

    return res;
  }

  function createConditionInRec(newRecord: Condition, questionName: string) {
    const rec = allRecommendations.value.filter(el => {
      return el.name === checkedRecommendationName.value;
    })[0];
    const recIndex: number = allRecommendations.value.indexOf(rec);

    allRecommendations.value[recIndex].conditions[conditionIndex.value][
      questionName
    ] = newRecord;
  }

  function editLocalConditionsByIndex(tableIndex: number, updateTo: Condition) {
    const rec = allRecommendations.value.filter(el => {
      return el.name === checkedRecommendationName.value;
    })[0];
    const recIndex: number = allRecommendations.value.indexOf(rec);

    allRecommendations.value[recIndex].conditions[conditionIndex.value][
      tableIndex
    ] = { ...updateTo };
  }

  function deleteConditionByIndex(
    recName: string,
    conditionIndex: number,
    tableIndex: number,
  ) {
    const rec = allRecommendations.value.filter(el => {
      return el.name === recName;
    })[0];
    const recIndex = allRecommendations.value.indexOf(rec);
    console.log(allRecommendations.value[recIndex].conditions[conditionIndex]);
    // allRecommendations.value[recIndex].conditions[conditionIndex].splice(
    //   tableIndex,
    //   1,
    // );
  }

  return {
    allRecommendations,
    questions,
    questionsNames,
    conditionColumns,
    checkedRecommendationName,
    conditionIndex,
    editLocalConditionsByIndex,
    editLocalRecommendationsByIndex,
    getRecommendationsData,
    getQuestionsData,
    deleteConditionByIndex,
    createConditionInRec,
    saveConditionsData,
    saveRecommendationsData,
  };
});
