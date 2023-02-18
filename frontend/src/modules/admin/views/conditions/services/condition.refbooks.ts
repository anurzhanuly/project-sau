import type { ResQuestions } from "../types/condition";
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
