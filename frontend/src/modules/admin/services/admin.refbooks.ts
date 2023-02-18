import type { ResQuestions } from "@/modules/admin/types/questions";
import type {
  Recommendation,
  ResRecommendation,
} from "@/modules/admin/types/recommendations";
import type { Error } from "@/types/response";
import type { AxiosError } from "axios";
import { useApi } from "@/services/api";

export const getQuestionsJson = async () => {
  try {
    const res = useApi.get<ResQuestions>("/questionnaires/id/114");
    return res;
  } catch (error) {
    const err = error as AxiosError<Error>;
    console.log(error);
    return err;
  }
};

export const postQuestionsJson = async (questions: ResQuestions) => {
  try {
    const res = useApi.post("/questionnaires/add", questions);

    return res;
  } catch (error) {
    const err = error as AxiosError<Error>;
    console.log(error);
    return err;
  }
};

export const getRecommendationsJson = async () => {
  try {
    const res = useApi.get<ResRecommendation>("/admin/v1/recommendations");

    return res;
  } catch (error) {
    const err = error as AxiosError<Error>;
    console.log(error);
    return err;
  }
};

export const putRecommendationsObj = async (newRec: Recommendation) => {
  try {
    const res = useApi.post("/admin/v1/diseases/add", newRec);

    return res;
  } catch (error) {
    const err = error as AxiosError<Error>;
    console.log(error);
    return err;
  }
};

export const deleteDisease = async (deleteRec: Recommendation) => {
  try {
    const res = useApi.post<ResRecommendation>(
      "/admin/v1/diseases/delete",
      deleteRec,
    );
    return res;
  } catch (error) {
    const err = error as AxiosError<Error>;
    console.log(error);
    return err;
  }
};
