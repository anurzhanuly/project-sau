import type { Recommendation } from "@/types/recommendations";
import type { Error, Res } from "@/types/response.";
import axios, { AxiosError } from "axios";

export const getQuestionsJson = async () => {
  try {
    const res = axios.get("http://www.symptom.kz/questionnaires/id/114");

    return res;
  } catch (error) {
    const err = error;
    console.log(error);
    return err;
  }
};

export const postQuestionsJson = async questions => {
  try {
    const res = axios.post(
      "http://www.symptom.kz/questionnaires/add",
      questions,
    );

    return res;
  } catch (error) {
    const err = error;
    console.log(error);
    return err;
  }
};

export const changeQuestionsJson = async questions => {
  try {
    const res = axios.put(
      "http://www.symptom.kz/questionnaires/update",
      questions,
    );

    return res;
  } catch (error) {
    const err = error;
    console.log(error);
    return err;
  }
};

export const getRecommendationsJson = async () => {
  try {
    const res = axios.get<Res<string>>("http://www.symptom.kz/recommendations");

    return res;
  } catch (error) {
    const err = error as AxiosError<Error>;
    console.log(error);
    return err;
  }
};

export const putRecommendationsObj = async (newRec: Recommendation) => {
  try {
    const res = axios.post("http://www.symptom.kz/diseases/add", newRec);

    return res;
  } catch (error) {
    const err = error as AxiosError<Error>;
    console.log(error);
    return err;
  }
};
