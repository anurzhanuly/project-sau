import type { Clinics } from "@/types/clinics";
import type { ResQuestions } from "@/types/questions";
import type {
  Recommendation,
  ResRecommendation,
} from "@/types/recommendations";
import type { Error } from "@/types/response";
import axios, { AxiosError } from "axios";

export const getQuestionsJson = async () => {
  try {
    const res = axios.get<ResQuestions>(
      "https://project-sau.herokuapp.com/questionnaires/id/114",
    );

    return res;
  } catch (error) {
    const err = error as AxiosError<Error>;
    console.log(error);
    return err;
  }
};

export const postQuestionsJson = async (questions: ResQuestions) => {
  try {
    const res = axios.post(
      "https://project-sau.herokuapp.com/questionnaires/add",
      questions,
    );

    return res;
  } catch (error) {
    const err = error as AxiosError<Error>;
    console.log(error);
    return err;
  }
};

export const changeQuestionsJson = async (questions: ResQuestions) => {
  try {
    const res = axios.put(
      "https://project-sau.herokuapp.com/questionnaires/update",
      questions,
    );

    return res;
  } catch (error) {
    const err = error as AxiosError<Error>;
    console.log(error);
    return err;
  }
};

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

export const getRecommendationsJson = async () => {
  try {
    const res = axios.get<ResRecommendation>(
      "https://project-sau.herokuapp.com/admin/v1/recommendations",
    );

    return res;
  } catch (error) {
    const err = error as AxiosError<Error>;
    console.log(error);
    return err;
  }
};

export const putRecommendationsObj = async (newRec: Recommendation) => {
  try {
    const res = axios.post(
      "https://project-sau.herokuapp.com/admin/v1/diseases/add",
      newRec,
    );

    return res;
  } catch (error) {
    const err = error as AxiosError<Error>;
    console.log(error);
    return err;
  }
};
