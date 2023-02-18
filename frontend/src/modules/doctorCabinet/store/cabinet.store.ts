import { defineStore } from "pinia";

export const useCabinetStore = defineStore("cabinet", () => {
  const mainColumns = [
    {
      header: "Пациент",
      field: "patient",
      hasButton: false,
    },
    {
      header: "Дата опроса",
      field: "surveyDate",
      hasButton: false,
    },
    {
      header: "Жалобы",
      field: "complaints",
      hasButton: false,
    },
    {
      header: "",
      field: "",
      hasButton: true,
    },
  ];

  const myPatientsColumns = [
    {
      header: "Пациент",
      field: "patient",
      hasButton: false,
    },
    {
      header: "Дата опроса",
      field: "surveyDate",
      hasButton: false,
    },
    {
      header: "Жалобы",
      field: "complaints",
      hasButton: false,
    },
    {
      header: "Номер телефона",
      field: "phone",
      hasButton: false,
    },
    {
      header: "",
      field: "",
      hasButton: true,
    },
  ];

  // TODO убрать как будет REST
  const myConsultation = [
    {
      patient: "Имя Фамилия",
      surveyDate: "21/01/2023 12:56:06",
      complaints: "Текст...",
      phone: "+7 777 567 54 67",
    },
    {
      patient: "Имя Фамилия",
      surveyDate: "21/01/2023 12:56:06",
      complaints: "Текст...",
      phone: "+7 777 567 54 67",
    },
    {
      patient: "Имя Фамилия",
      surveyDate: "21/01/2023 12:56:06",
      complaints: "Текст...",
      phone: "+7 777 567 54 67",
    },
    {
      patient: "Имя Фамилия",
      surveyDate: "21/01/2023 12:56:06",
      complaints: "Текст...",
      phone: "+7 777 567 54 67",
    },
  ];

  return {
    mainColumns,
    myConsultation,
    myPatientsColumns,
  };
});
