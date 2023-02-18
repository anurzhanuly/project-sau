import axios from "axios";
import type { AxiosError } from "axios";
import type { Clinics } from "../types/clinics";

export const getClinicsjson = async () => {
  // TODO: wait Rest
  try {
    const res = axios.get<Clinics>("");

    return res;
  } catch (error) {
    const err = error as AxiosError<Error>;
    console.log(error);
    return err;
  }
};
