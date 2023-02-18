import type { ResQuestions } from "@/types/questions";
import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";

export const changeQuestionsJson = async (
  questions: ResQuestions,
): Promise<AxiosError | AxiosResponse> => {
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
