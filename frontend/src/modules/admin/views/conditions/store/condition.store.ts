import { getQuestionsJson } from "../services/condition.refbooks";
import type { Questions } from "@/modules/admin/types/questions";
import { defineStore } from "pinia";
import axios from "axios";
import { computed, ref } from "vue";

export const useConditionsStore = defineStore("conditions", () => {
  const questions = ref<Questions[]>([]);
  const questionsNames = ref<{ value: string }[]>([]);
  const conditionIndex = ref<number>(0);
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
      questions.value = res.data.content.pages
        .map((el: { elements: any }) => el.elements)
        .flat(1);
      questionsNames.value = questions.value.map(el => {
        return { value: el.name };
      });
    }

    return res;
  }

  return {
    conditionIndex,
    conditionColumns,
    getQuestionsData,
  };
});
