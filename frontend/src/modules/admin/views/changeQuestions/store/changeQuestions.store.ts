import { changeQuestionsJson } from "../services/changeQuestions.refbooks";
import type { ResQuestions } from "@/modules/admin/types/questions";
import { defineStore } from "pinia";

export const useQuestionsStore = defineStore("questions", () => {
  async function changeQuestionsData(questions: ResQuestions): Promise<void> {
    changeQuestionsJson(questions);
  }

  return {
    changeQuestionsData,
  };
});
