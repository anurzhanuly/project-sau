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
  postChangeClinic,
  postChangeDoctor,
} from "../services/clinics.refbooks";

import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useClinicsStore = defineStore("clinics", () => {
  const clinics = ref<Clinics[]>([]);
  const doctors = ref<Doctors[]>([]);
  const doctorsFIO = ref<any>([]);
  const cities = ref<City[]>([]);
  const specializations = ref<Specialization[]>([]);
  const selectedClinic = ref<Clinics>();
  const selectedDoctor = ref<Doctors>();

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

  async function changeClinicData(
    id: string,
    newClinic: NewClinic,
  ): Promise<number> {
    const res = await postChangeClinic(id, newClinic);
    console.log("changeClinicData  res:", res);
    if (!axios.isAxiosError(res)) {
      const index = clinics.value.findIndex(elem => elem.id === id);
      clinics.value[index] = res.data;
      return res.status;
    }

    return 0;
  }

  async function changeDoctorData(
    id: string,
    newClinic: NewDoctor,
  ): Promise<number> {
    const res = await postChangeDoctor(id, newClinic);
    console.log("changeDoctorData  res:", res);
    if (!axios.isAxiosError(res)) {
      const index = clinics.value.findIndex(elem => elem.id === id);
      doctors.value[index] = res.data;
      return res.status;
    }

    return 0;
  }

  async function getDoctorsData(): Promise<void> {
    const res = await getDoctors();
    if (!axios.isAxiosError(res)) {
      doctors.value = res.data.data;

      doctorsFIO.value = doctors.value.map(doctor => ({
        id: doctor.id,
        name: `${doctor.attributes.firstName} ${doctor.attributes.lastName} ${doctor.attributes.midName}`,
      }));
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

  return {
    cities,
    clinics,
    doctors,
    doctorsFIO,
    selectedClinic,
    selectedDoctor,
    specializations,
    changeClinicData,
    changeDoctorData,
    getCitiesData,
    createDoctorData,
    getSpecializationsData,
    createClinicData,
    getDoctorsData,
    getClinicsData,
  };
});
