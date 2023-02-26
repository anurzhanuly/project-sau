import type { NewClinic, NewDoctor } from "./../types/clinics";
import type { AxiosError, AxiosResponse } from "axios";
import { useSymptomApi } from "@/services/api";

export const getClinics = async (): Promise<AxiosResponse | AxiosError> => {
  try {
    return await useSymptomApi.get("/clinics");
  } catch (error) {
    console.log(error);
    return error as AxiosError<Error>;
  }
};

export const postNewClinic = async (
  newClinic: NewClinic,
): Promise<AxiosResponse | AxiosError> => {
  try {
    return await useSymptomApi.post("/clinics/new", newClinic);
  } catch (error) {
    console.log(error);
    return error as AxiosError<Error>;
  }
};

export const postChangeClinic = async (
  id: string,
  newClinic: NewClinic,
): Promise<AxiosResponse | AxiosError> => {
  try {
    return await useSymptomApi.post(`/clinics/${id}/update`, newClinic);
  } catch (error) {
    console.log(error);
    return error as AxiosError<Error>;
  }
};

export const postChangeDoctor = async (
  id: string,
  newDoctor: NewDoctor,
): Promise<AxiosResponse | AxiosError> => {
  try {
    return await useSymptomApi.post(`/doctors/${id}/update`, newDoctor);
  } catch (error) {
    console.log(error);
    return error as AxiosError<Error>;
  }
};

export const postNewDoctor = async (
  newDoctor: NewDoctor,
): Promise<AxiosResponse | AxiosError> => {
  try {
    return await useSymptomApi.post("/doctors/new", newDoctor);
  } catch (error) {
    console.log(error);
    return error as AxiosError<Error>;
  }
};

export const getDoctors = async (): Promise<AxiosResponse | AxiosError> => {
  try {
    return await useSymptomApi.get("/doctors");
  } catch (error) {
    console.log(error);
    return error as AxiosError<Error>;
  }
};

export const getCities = async (): Promise<AxiosError | AxiosResponse> => {
  try {
    return await useSymptomApi.get("/cities");
  } catch (error) {
    console.log(error);
    return error as AxiosError<Error>;
  }
};

export const getSpecializations = async (): Promise<
  AxiosError | AxiosResponse
> => {
  try {
    return await useSymptomApi.get("/specializations");
  } catch (error) {
    console.log(error);
    return error as AxiosError<Error>;
  }
};
