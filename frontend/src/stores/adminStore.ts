import { defineStore } from "pinia";
import axios from "axios";
import { computed, ref } from "vue";
import {
  getRecommendationsJson,
  getQuestionsJson,
  putRecommendationsObj,
  deleteDisease,
} from "../services/admin.js";
import type { Condition, Recommendation } from "@/types/recommendations.js";
import type { Questions } from "@/types/questions.js";
import type { Clinics, Doctors } from "@/types/clinics.js";

export const useAdminStore = defineStore("admin", () => {
  const allRecommendations = ref([] as Recommendation[]);
  const allClinics = ref([] as Clinics[]);
  const allDoctors = ref([] as Doctors[]);
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
  const clinicsColumns = [
    {
      header: "Название клиники",
      field: "name",
      hasDropdown: false,
      options: [],
    },
    {
      header: "Город",
      field: "city",
      hasDropdown: true,
      options: [{ value: "Астана" }, { value: "Алматы" }],
    },
    {
      header: "Адрес",
      field: "place",
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

  const doctorsColumns = ref([
    {
      header: "Фио",
      field: "fullName",
      hasDropdown: false,
      options: [],
    },
    {
      header: "Cпециальность",
      field: "spec",
      hasDropdown: false,
      options: [],
    },
    {
      header: "Опыт",
      field: "exp",
      hasDropdown: false,
      options: [],
    },
    {
      header: "Удаление",
      field: "",
      hasDropdown: false,
      options: [],
    },
  ]);

  // Удалить потом
  const clinics = ref([
    {
      name: "Damumed",
      city: "Астана",
      place: "Центральная ул., Астана 020000",
    },
    {
      name: "Almuker",
      city: "Алматы",
      place: "Центральный стадион",
    },
  ]);

  const doctors = ref([
    {
      fullName: "Казыбек Алмас Кудайбергенулы",
      spec: "Нейрохирург",
      exp: "8 лет",
    },
  ]);

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

  async function getClinicsData() {
    // const res = await getClinicsjson();

    // if (!axios.isAxiosError(res)) {
    //   allClinics.value = JSON.parse(res.data.result);
    // }

    // TODO: wait REST
    allClinics.value = clinics.value;
    allDoctors.value = doctors.value;

    const res = clinics.value;

    return res;
  }

  function editLocalClinicsByIndex(index: number, updateTo: Clinics) {
    allClinics.value[index] = { ...updateTo };
  }

  function editLocalDoctorByIndex(index: number, updateTo: Doctors) {
    allDoctors.value[index] = { ...updateTo };
  }

  function createClinicData(newRecord: Clinics) {
    allClinics.value.push(newRecord);
  }

  function deleteClinicByIndex(clinic: Clinics) {
    const foundedIndex = allClinics.value.indexOf(clinic);
    allClinics.value = allClinics.value.filter(
      (_, index) => index !== foundedIndex,
    );
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
    const newRecommendation = allRecommendations.value.filter(el => {
      return el.name === recName;
    })[0];

    newRecommendation.tests = recomm; // по ссылке изменяю так же allRecommendations

    const res = await putRecommendationsObj(newRecommendation);

    return res;
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
    allRecommendations.value[recIndex].conditions[conditionIndex.value] =
      allRecommendations.value[recIndex].conditions[
        conditionIndex.value
      ].filter((el, index) => {
        if (index !== condIndex) {
          return el;
        }
      });
  }

  async function deleteDiseaseById(disease: string) {
    const deleteRecommendationObj = JSON.parse(
      JSON.stringify(
        allRecommendations.value.filter(el => {
          return el.name === disease;
        })[0],
      ),
    );

    const res = await deleteDisease(deleteRecommendationObj);
    return res;
  }

  return {
    allRecommendations,
    questions,
    questionsNames,
    conditionColumns,
    checkedRecommendationName,
    conditionIndex,
    clinicsColumns,
    allClinics,
    allDoctors,
    doctorsColumns,
    deleteClinicByIndex,
    createClinicData,
    editLocalDoctorByIndex,
    getClinicsData,
    editLocalClinicsByIndex,
    editLocalConditionsByIndex,
    getRecommendationsData,
    getQuestionsData,
    deleteConditionByIndex,
    createConditionInRec,
    saveConditionsData,
    saveRecommendationsData,
    deleteDiseaseById
  };
});
