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
  const recommendations = ref([] as Recommendation[]);
  const questions = ref([] as Questions[]);
  const questionsNames = ref([] as { value: string }[]);
  const checkedRecommendationName = ref("");
  const conditionIndex = ref(0);
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

  async function saveRecommendationsData(
    recName: string,
    recomm: Record<string, string[]>,
  ) {
    const recommendation = JSON.parse(
      JSON.stringify(
        recommendations.value.filter(el => {
          return el.name === recName;
        })[0],
      ),
    );
    recommendation.tests = recomm;
    console.log(recommendation);
    const res = await putRecommendationsObj(recommendation);

    return res;
  }

  async function saveConditionsData(recName: string) {
    const recommendation = JSON.parse(
      JSON.stringify(
        recommendations.value.filter(el => {
          return el.name === recName;
        })[0],
      ),
    );
    const res = await putRecommendationsObj(recommendation);

    return res;
  }

  function createConditionInRec(newRecord: Condition, questionName: string) {
    const rec = recommendations.value.filter(el => {
      return el.name === checkedRecommendationName.value;
    })[0];
    const recIndex: number = recommendations.value.indexOf(rec);

    recommendations.value[recIndex].conditions[conditionIndex.value][
      questionName
    ] = newRecord;
  }

  function deleteConditionByIndex(
    recName: string,
    conditionIndex: number,
    keyInCondition: string,
  ) {
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
    checkedRecommendationName,
    conditionIndex,
    getRecommendationsData,
    getQuestionsData,
    deleteConditionByIndex,
    createConditionInRec,
    saveConditionsData,
    saveRecommendationsData,
  };
});
