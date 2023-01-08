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
      hasDropdown: false,
      options: [],
    },
    {
      header: "Номер рекомендации",
      field: "testCase",
      hasDropdown: false,
      options: [],
    },
    {
      header: "Удаление",
      field: "",
      hasDropdown: false,
      options: [],
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

  function editLocalRecommendationByIndex(
    tableIndex: number,
    updateTo: Condition,
  ) {
    const rec = allRecommendations.value.filter(el => {
      return el.name === checkedRecommendationName.value;
    })[0];
    const recIndex: number = allRecommendations.value.indexOf(rec);

    allRecommendations.value[recIndex].conditions[conditionIndex.value][
      tableIndex
    ] = { ...updateTo };
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

  function editLocalConditionsByIndex(tableIndex: number, updateTo: Condition) {
    const rec = allRecommendations.value.filter(el => {
      return el.name === checkedRecommendationName.value;
    })[0];
    const recIndex: number = allRecommendations.value.indexOf(rec);

    allRecommendations.value[recIndex].conditions[conditionIndex.value][
      tableIndex
    ] = { ...updateTo };
  }

  function createConditionInRec(newRecord: Condition) {
    const rec = allRecommendations.value.filter(el => {
      return el.name === checkedRecommendationName.value;
    })[0];
    const recIndex: number = allRecommendations.value.indexOf(rec);
    allRecommendations.value[recIndex].conditions[conditionIndex.value].push({
      ...newRecord,
    });
  }

  function deleteConditionByIndex(condition: Condition) {
    const rec = allRecommendations.value.filter(el => {
      return el.name === checkedRecommendationName.value;
    })[0];
    const recIndex = allRecommendations.value.indexOf(rec);
    const condIndex =
      allRecommendations.value[recIndex].conditions[
        conditionIndex.value
      ].indexOf(condition);
    console.log(condition, condIndex);
    console.log(
      allRecommendations.value[recIndex].conditions[conditionIndex.value],
    );
    allRecommendations.value[recIndex].conditions[conditionIndex.value] =
      allRecommendations.value[recIndex].conditions[
        conditionIndex.value
      ].filter((el, index) => {
        if (index !== condIndex) {
          return el;
        }
      });
  }

  return {
    allRecommendations,
    questions,
    questionsNames,
    conditionColumns,
    checkedRecommendationName,
    conditionIndex,
    editLocalConditionsByIndex,
    getRecommendationsData,
    getQuestionsData,
    deleteConditionByIndex,
    createConditionInRec,
    saveConditionsData,
    saveRecommendationsData,
  };
});
