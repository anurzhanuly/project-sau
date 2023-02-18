import type { Clinics, Doctors } from "../types/clinics";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useClinicsStore = defineStore("clinics", () => {
  const allClinics = ref<Clinics[]>([]);
  const allDoctors = ref<Doctors[]>([]);

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

  return {
    allClinics,
    allDoctors,
    clinicsColumns,
    doctorsColumns,
    deleteClinicByIndex,
    createClinicData,
    editLocalDoctorByIndex,
    getClinicsData,
    editLocalClinicsByIndex,
  };
});
