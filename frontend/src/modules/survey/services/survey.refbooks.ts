import { useApi } from "@/services/api";
import type { AxiosError } from "axios";

export const postAnswers = async (answers: {
  answers: Record<string, string[]>;
}) => {
  try {
    const res = useApi.post("/diseases/recommendations", answers);

    return res;
  } catch (error) {
    const err = error as AxiosError<Error>;
    console.log(error);
    return err;
  }
};
