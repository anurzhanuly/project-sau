import type {
  Clinics,
  Doctors,
  City,
  NewClinic,
  Specialization,
  NewDoctor,
} from "../types/clinics";

import {
  getCities,
  getClinics,
  postNewClinic,
  getDoctors,
  getSpecializations,
  postNewDoctor,
} from "../services/clinics.refbooks";

import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useClinicsStore = defineStore("clinics", () => {
  const clinics = ref<Clinics[]>([]);
  const doctors = ref<Doctors[]>([]);
  const cities = ref<City[]>([]);
  const specializations = ref<Specialization[]>([]);
  const selectedClinic = ref<Clinics>();

  async function getClinicsData(): Promise<void> {
    const res = await getClinics();
    if (!axios.isAxiosError(res)) {
      clinics.value = res.data.data;
    }
  }

  async function createClinicData(newClinic: NewClinic): Promise<number> {
    const res = await postNewClinic(newClinic);
    console.log("createClinicData  res:", res);
    if (!axios.isAxiosError(res)) {
      clinics.value.push(res.data.data);
      return res.status;
    }

    return 0;
  }

  async function getDoctorsData(): Promise<void> {
    const res = await getDoctors();
    console.log("getClinicsData  res:", res);
    if (!axios.isAxiosError(res)) {
      doctors.value = res.data.data;
      console.log("getDoctorsData  doctors.value:", doctors.value);
    }
  }

  async function createDoctorData(newDoctor: NewDoctor): Promise<number> {
    const res = await postNewDoctor(newDoctor);
    console.log("createDoctorData  res:", res);
    if (!axios.isAxiosError(res)) {
      doctors.value.push(res.data.data);
      return res.status;
    }

    return 0;
  }

  async function getCitiesData(): Promise<void> {
    const res = await getCities();
    if (!axios.isAxiosError(res)) {
      cities.value = res.data.data;
    }
  }

  async function getSpecializationsData(): Promise<void> {
    const res = await getSpecializations();
    if (!axios.isAxiosError(res)) {
      specializations.value = res.data.data;
    }
  }

  function editLocalClinicsByIndex(index: number, updateTo: Clinics): void {
    clinics.value[index] = { ...updateTo };
  }

  function editLocalDoctorByIndex(index: number, updateTo: Doctors): void {
    doctors.value[index] = { ...updateTo };
  }

  function deleteClinicByIndex(clinic: Clinics): void {
    const foundedIndex = clinics.value.indexOf(clinic);
    clinics.value = clinics.value.filter((_, index) => index !== foundedIndex);
  }

  return {
    cities,
    clinics,
    doctors,
    selectedClinic,
    specializations,
    getCitiesData,
    createDoctorData,
    getSpecializationsData,
    deleteClinicByIndex,
    createClinicData,
    getDoctorsData,
    editLocalDoctorByIndex,
    getClinicsData,
    editLocalClinicsByIndex,
  };
});
