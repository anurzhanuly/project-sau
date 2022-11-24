import axios, { AxiosError } from "axios";

export const postAnswers = async (answers: {
  answers: Record<string, string[]>;
}) => {
  try {
    const res = axios.post(
      "http://www.symptom.kz/diseases/recommendations",
      answers,
    );

    return res;
  } catch (error) {
    const err = error as AxiosError<Error>;
    console.log(error);
    return err;
  }
};
